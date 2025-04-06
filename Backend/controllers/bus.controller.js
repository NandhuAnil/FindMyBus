import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let busData = [];

const loadData = () => {
    try {
        const filePath = path.join(__dirname, '../db/tamilnadu_bus_routes.json');
        const rawData = fs.readFileSync(filePath, 'utf-8');
        busData = JSON.parse(rawData) || [];
        console.log(`✅ Loaded ${busData.length} bus records.`);
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
        const originalStart = bus["Start Location"].toLowerCase().trim();
        const originalEnd = bus["End Location"].toLowerCase().trim();

        const subStops = (bus.sub_stops || []).map(s => ({
            ...s,
            stop: s.stop.toLowerCase().trim()
        }));

        // Full stop sequence
        const allStops = [
            { stop: originalStart, time: bus["Start Time"] },
            ...subStops,
            { stop: originalEnd, time: bus["End Time"] }
        ];

        const startIndex = allStops.findIndex(s => s.stop === normalizedStart);
        const endIndex = allStops.findIndex(s => s.stop === normalizedEnd);

        if (startIndex === -1 || endIndex === -1) continue;

        // If forward
        if (startIndex < endIndex) {
            const sliced = allStops.slice(startIndex, endIndex + 1);
            const newBus = {
                ...bus,
                "Start Location": sliced[0].stop,
                "End Location": sliced[sliced.length - 1].stop,
                "Start Time": sliced[0].time,
                "End Time": sliced[sliced.length - 1].time,
                sub_stops: sliced.slice(1, -1)
            };
            results.push(newBus);
        }

        // If reverse
        if (startIndex > endIndex) {
            const reversed = allStops.slice(endIndex, startIndex + 1).reverse();
            const newBus = {
                ...bus,
                "Start Location": reversed[0].stop,
                "End Location": reversed[reversed.length - 1].stop,
                "Start Time": reversed[0].time,
                "End Time": reversed[reversed.length - 1].time,
                sub_stops: reversed.slice(1, -1)
            };
            results.push(newBus);
        }
    }

    if (results.length === 0) {
        return res.status(404).json({ message: "No buses found for the specified route" });
    }

    res.json(results);
};

loadData();