import React from 'react';
import { Text, PlacehoderImage, Subheader, Header, Component, Wrapper, Item } from './Components';

const RightSection = () => {
    return (
        <Component >
            <Wrapper row>
                <Item left mr>
                    <PlacehoderImage />
                    <Text>Superhero TO-Do List allows you to work with unique features not found in any other To-Do List. You'll really always be locked in to perform your tasks.</Text>
                </Item>
                <Item>
                    <Subheader>Incerdible features</Subheader>
                    <Header>
                        Universal app to manage your tasks
                    </Header>
                </Item>
            </Wrapper>
        </Component>
    );
};

export default RightSection;