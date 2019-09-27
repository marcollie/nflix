import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header``;

const List = styled.ul`
    display:flex;
    &:hover{
        background-color:blue;
    }
`;

const Item = styled.li``;

const sLink = styled(Link)``;

export default () => (
    <Header>
        <List>
            <Item>
                <sLink to="/">Movies</sLink>
            </Item>
            <Item>
                <sLink to="/TV">TV</sLink>
            </Item>
            <Item>
                <sLink to="/search">Search</sLink>
            </Item>
        </List>
    </Header>
)
