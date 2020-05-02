import React from 'react'
import Link from 'gatsby-link';
import styled from 'styled-components';

const headerSize = '60px;'

const Page = styled.div`
   padding-top: ${props => props.full ? '0px;' : headerSize};
   padding-bottom: 40px;
`;

const Container = styled.div`
  margin: 0 auto; /* Center the DIV horizontally */

  p {
        /* line-height: 200px; Create scrollbar to test positioning */
  }
`;

const Fixed = styled.div`
  width: 100%;
  position: fixed;
  background: #333;
  padding: 10px 0;
`;

const FixedHeader = styled(Fixed)`
  top: 0;
  z-index:10;
  opacity: ${props => props.full ? 0.8 : 1};
  height:headerSize;
  font-family:'Pacifico';
  font-size:30px;
  background-color: ${props => props.full ? '#333' : '#5c5c5c'};

`;

const FixedFooter = styled(Fixed)`
  bottom: 0;
  color: #fff;

`;

const MenuItem = styled(Link)`
    padding:20px;
    text-decoration: none;
    color:yellow;
    :hover {
      color: red;
    }
`;

export default ({ children, full=false }) => (
  <Page full={full}>
    <FixedHeader full={full}>
      <Container>
          <nav>
            <MenuItem to="/">Music</MenuItem>
            <MenuItem to="/band">About The Band</MenuItem>
          </nav>
      </Container>
    </FixedHeader>
    <Container>
      {children}
    </Container>
    <FixedFooter>
      <Container>Copyright &copy; 2016 Your Company</Container>
    </FixedFooter>
  </Page>
)
