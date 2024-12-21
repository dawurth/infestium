const API_BASE_URL = 'http://localhost:5000';

export const fetchAgents = async (): Promise<any> => {
    const response = await fetch(`${API_BASE_URL}/agents`);
    return response.json();
};

export const addAgent = async (agent: { id: number; name: string }): Promise<any> => {
    const response = await fetch(`${API_BASE_URL}/agents`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(agent),
    });
    return response.json();
};

export const fetchPlayerProgress = async (): Promise<any> => {
    const response = await fetch(`${API_BASE_URL}/player-progress`);
    return response.json();
};

export const fetchResistanceForces = async (): Promise<any> => {
    const response = await fetch(`${API_BASE_URL}/resistance-forces`);
    return response.json();
};

export const fetchExpansionOpportunities = async (): Promise<any> => {
    const response = await fetch(`${API_BASE_URL}/expansion-opportunities`);
    return response.json();
};
