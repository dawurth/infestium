import React from 'react';
import GlobalMap from './components/GlobalMap';
import AgentEvolutionTree from './components/AgentEvolutionTree';

const App: React.FC = () => {
    return (
        <div>
            <h1>Infestation Protocol</h1>
            <GlobalMap />
            <AgentEvolutionTree />
        </div>
    );
};

export default App;