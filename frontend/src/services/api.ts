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
