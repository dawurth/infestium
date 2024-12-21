import React, { useState } from 'react';

interface Agent {
    id: number;
    name: string;
}

const AgentEvolutionTree: React.FC = () => {
    const [agents, setAgents] = useState<Agent[]>([]);

    const handleAddAgent = () => {
        const newAgent: Agent = { id: agents.length + 1, name: `Agent ${agents.length + 1}` };
        setAgents([...agents, newAgent]);
    };

    return (
        <div>
            <h2>Agent Evolution Tree</h2>
            <button onClick={handleAddAgent}>Add Agent</button>
            <ul>
                {agents.map((agent) => (
                    <li key={agent.id}>{agent.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default AgentEvolutionTree;
