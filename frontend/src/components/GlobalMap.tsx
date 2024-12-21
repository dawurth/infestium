import React, { useEffect, useState } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import { fetchPlayerProgress, fetchResistanceForces, fetchExpansionOpportunities } from '../services/api';

const GlobalMap: React.FC = () => {
    const [playerProgress, setPlayerProgress] = useState([]);
    const [resistanceForces, setResistanceForces] = useState([]);
    const [expansionOpportunities, setExpansionOpportunities] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const playerData = await fetchPlayerProgress();
            const resistanceData = await fetchResistanceForces();
            const expansionData = await fetchExpansionOpportunities();

            setPlayerProgress(playerData);
            setResistanceForces(resistanceData);
            setExpansionOpportunities(expansionData);
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Global Map</h2>
            <ComposableMap>
                <Geographies geography="/path/to/world-geojson">
                    {({ geographies }) =>
                        geographies.map(geo => (
                            <Geography key={geo.rsmKey} geography={geo} />
                        ))
                    }
                </Geographies>
            </ComposableMap>
        </div>
    );
};

export default GlobalMap;