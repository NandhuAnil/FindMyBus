import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


let busData = [];

const loadData = () => {
    try {
        const filePath = path.join(__dirname, '../db/BusDataset.json'); // Adjust path if needed
        const rawData = fs.readFileSync(filePath, 'utf-8'); // ✅ Fix: Correctly pass 'utf-8'
        busData = JSON.parse(rawData).tamilnadu_bus_routes_real_subst || [];
        console.log(`✅ Loaded ${busData.length} bus records.`);
    } catch (error) {
        console.error('❌ Error loading bus data:', error);
    }
};

export const getBusByRoute = (req, res) => {
    const routeNumber = parseInt(req.params.routeNumber, 10);
    const bus = busMap.get(routeNumber);

    if (!bus) {
        return res.status(404).json({ message: "Bus not found" });
    }
    res.json(bus);
};

// Controller to search buses by query (district, operator, etc.)
export const searchBuses = (req, res) => {
    const { district, busOperator, busType } = req.query;

    const filteredBuses = busData.filter(bus =>
        (!district || bus.district.toLowerCase() === district.toLowerCase()) &&
        (!busOperator || bus.busOperator.toLowerCase() === busOperator.toLowerCase()) &&
        (!busType || bus.busType.toLowerCase() === busType.toLowerCase())
    );

    res.json(filteredBuses);
};


// Load data when server starts
loadData();

// module.exports = { getBusDetails };
