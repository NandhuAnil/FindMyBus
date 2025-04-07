import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let busData = [];

const loadData = () => {
    try {
        const mainPath = path.join(__dirname, '../db/Dataset.json');
        const extraPath = path.join(__dirname, '../db/tamilnadu.json');

        const mainRaw = fs.readFileSync(mainPath, 'utf-8');
        const mainData = JSON.parse(mainRaw) || [];

        let extraData = [];
        if (fs.existsSync(extraPath)) {
            const extraRaw = fs.readFileSync(extraPath, 'utf-8');
            extraData = JSON.parse(extraRaw) || [];
            console.log(`📦 Loaded optional ExtraDataset with ${extraData.length} records.`);
        } else {
            console.log('ℹ️ ExtraDataset.json not found, skipping...');
        }

        busData = [...mainData, ...extraData];
        console.log(`✅ Loaded ${busData.length} total bus records.`);

    } catch (error) {
        console.error('❌ Error loading bus data:', error);
    }
};

export const searchBusesByLocation = (req, res) => {
    const { start, end } = req.query;

    if (!start || !end) {
        return res.status(400).json({ message: "Please provide both start and end locations" });
    }

    const normalizedStart = start.toLowerCase().trim();
    const normalizedEnd = end.toLowerCase().trim();

    const results = [];

    for (const bus of busData) {
        const startLoc = bus["Start Location"].toLowerCase().trim();
        const endLoc = bus["End Location"].toLowerCase().trim();

        // parse "Sub-Stops" into array with stop and time
        const subStopsRaw = bus["Sub-Stops"]?.split("->").map(s => s.trim()) || [];
        const sub = subStopsRaw.map(stopTime => {
            const [stop, time] = stopTime.match(/(.*)\s\((.*)\)/)?.slice(1) || [];
            return { stop: stop.toLowerCase().trim(), time: time?.trim() || "" };
        });

        const fullRoute = [
            { stop: startLoc, time: bus["Start Time"] },
            ...sub,
            { stop: endLoc, time: bus["End Time"] }
        ];

        const startIndex = fullRoute.findIndex(s => s.stop === normalizedStart);
        const endIndex = fullRoute.findIndex(s => s.stop === normalizedEnd);

        if (startIndex !== -1 && endIndex !== -1 && startIndex < endIndex) {
            results.push({
                ...bus,
                user_start: {
                    stop: start,
                    time: fullRoute[startIndex].time
                },
                user_end: {
                    stop: end,
                    time: fullRoute[endIndex].time
                },
                sub
            });
        }
    }

    if (results.length === 0) {
        return res.status(404).json({ message: "No buses found for the specified route" });
    }

    res.json(results);
};

loadData();