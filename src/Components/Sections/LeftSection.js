import React from 'react';
import { Text, PlacehoderImage, Subheader, Header, Component, Wrapper, Item } from './Components';

const LeftSection = () => {
    return (
        <Component bg>
            <Wrapper row>
                <Item>
                    <Subheader>Amazing Collabration</Subheader>
                    <Header>
                        Connect to everyone you need
                    </Header>
                </Item>
                <Item right ml>
                    <PlacehoderImage />
                    <Text>You can workk with everyone, anyone, anywhere. Just invite them using email and get the thinggs done </Text>
                </Item>
            </Wrapper>
        </Component>
    );
};

export default LeftSection;