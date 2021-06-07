import React from 'react';
import { Text, PlacehoderImage, Subheader, Header, Component, Wrapper } from './Components';


const MiddleSection = () => {
    return (
        <Component bg>
            <Wrapper>
                <Subheader>Innovation in every details</Subheader>
                <Header>Superhero Tasks</Header>
                <PlacehoderImage/>
                <Text>You wont need another To-Do List app</Text>
            </Wrapper>
        </Component>
    );
};

export default MiddleSection;