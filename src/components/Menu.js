import React from "react"
import Link from 'gatsby-link';
import styled from 'styled-components';


const Menu = styled.div`
    padding:20px;
    font-size:30px;
    width:100%;
    overflow: hidden;
    /* background-color: #333; */
    position: fixed; /* Set the navbar to fixed position */
    top: 0; /* Position the navbar at the top of the page */
    width: 100%; /* Full width */
    opacity: 0.5;
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
        <MenuItem to="/band">About The Band</MenuItem>
    </Menu>
);
