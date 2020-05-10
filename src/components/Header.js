import React from 'react'
import styled from 'styled-components';
import breakpoints from '../consts/breakpoints';
import Link from 'gatsby-link';

const MenuItem = styled(Link)`
    padding:20px;
    text-decoration: none;
    color:yellow;
    :hover {
      color: red;
    }
`;

const Small = styled.span`
  font-size:8px;
`;

export const Menu = () => (<nav>
    <MenuItem to="/">Home</MenuItem>
    <MenuItem to="/band">About The Band</MenuItem>
    <MenuItem to="/albums">Albums</MenuItem>
    <MenuItem to="/margipedia">Margipedia</MenuItem>
    <MenuItem to="/merch">Merch<Small>andise</Small></MenuItem>
</nav>);

const Header = styled.div`
  top: 0;
  z-index:10;
  font-family:'Pacifico';
  font-size:14px;
  width: 100%;
  background-color: ${props => props.full ? '#333' : '#5c5c5c'};
  padding: 10px 0;

  @media only screen and (min-width: ${breakpoints.tablet}) {
      font-size:28px;
    }
`;

const FixedHeader = styled(Header)`
  position: fixed;
  opacity: ${props => props.full ? 0.8 : 1};
`;


const BackgroundHeader = styled(Header)`
  padding: 10px 0;

  opacity: 0;
`;

export const Padding = () => (
    <BackgroundHeader>
        <Menu />
    </BackgroundHeader>
)

export default ({full = false}) => (
    <>
        <FixedHeader {...{full}}>
            <Menu />
        </FixedHeader>
      {!full && <Padding />}
    </>
)

