import React from "react"
import Link from 'gatsby-link';
import styled from 'styled-components';


const Menu = styled.div`
    padding:20px;
    font-size:30px;
    width:100%;
`;


const MenuItem = styled(Link)`
    padding:20px;
    text-decoration: none;
    color:white;
    :hover {
      color: red;
    }
`;


export default () => (
    <Menu>
        <MenuItem to="/">Music</MenuItem>
        <MenuItem to="/">About The Band</MenuItem>
    </Menu>
);
