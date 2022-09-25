import React from 'react';

import {
	SimulationColumn,
	SimulationRow,
    SimulationSection,
    SimulationTitle,
	
} from './SimulationStyles';
import { Button } from '../globalStyles';
import { Container } from '../globalStyles';
// import { useHistory } from 'react-router-dom';

const Simulation = () => {

    return(
    
    <SimulationSection>
        <Container>
            <SimulationRow>
                <SimulationColumn small>
                    <SimulationTitle>Simulation</SimulationTitle>
                        <SimulationRow>
                            <SimulationColumn>
                                <select>
                                    <option value="default" selected>Select a Model</option>
                                    <option value="1">Model 1</option>
                                    <option value="2">Model 2</option>
                                    <option value="3">Model 3</option>
                                </select>
                            </SimulationColumn>
                        </SimulationRow>

                        <SimulationRow>
                            <SimulationColumn>
                                <Button>Simulate</Button>
                            </SimulationColumn>
                        </SimulationRow>

                        <SimulationRow>
                            <SimulationColumn>
                                <a href='#'>View Results</a>
                            </SimulationColumn>
                        </SimulationRow>
                </SimulationColumn>
            </SimulationRow>
        </Container> 
    </SimulationSection> )


};





export default Simulation;