import express from 'express';

const router = express.Router();

interface Agent {
    id: number;
    name: string;
}

let agents: Agent[] = [];

// Get all agents
router.get('/', (req, res) => {
    res.json(agents);
});

// Add a new agent
router.post('/', (req, res) => {
    const newAgent: Agent = req.body;
    agents.push(newAgent);
    res.status(201).json(newAgent);
});

export default router;
