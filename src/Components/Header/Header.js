import React from 'react';
import styled from 'styled-components/macro';

const Component = styled.div`
    display: flex;
    justify-content: center;
    padding: 1rem;
`

const Wrapper = styled.div`
    display: flex;
`

const Button = styled.button`
    background-color: transparent;
    border: 0;
    padding: 0.5rem 1.25rem;
    border-radius: 0.375rem;
    transition: backgrounf-color 0.25s ease-in;

    &::not(:last-of-type){
        margin-right: 1rem;
    }

    &:hover{
        cursor: pointer;
        background-color: #EDF2F7;
    }
`

const Header = () => {
    return (
        <div>
            <Component>
                <Wrapper>
                    <Button>Features</Button>
                    <Button>Prices</Button>
                    <Button>Blog</Button>
                </Wrapper>
            </Component>
        </div>
    );
};

export default Header;