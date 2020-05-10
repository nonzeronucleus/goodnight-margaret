import React from 'react'
import {Helmet} from 'react-helmet'

import Link from 'gatsby-link';
import styled from 'styled-components';
import breakpoints from '../consts/breakpoints';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Body = styled.div`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height:100%;


    .header {
      flex: 0 0 auto;
    }

    .body {
      flex: 1 1 auto;
      display: flex;
      flex-direction: column;
      overflow: auto;
    }

    .content {
      flex: 1 1 auto;
    }

    .main {
      margin-left:auto;
      margin-right:auto;
      max-width: 800px;
      padding-left:40px;
      padding-right:40px;

      margin-top:20px;
      @media only screen and (min-width: ${breakpoints.tablet}) {
        padding-left:40px;
        padding-right:40px;

        max-width: 800px;
      }

      @media only screen and (min-width: ${breakpoints.desktop}) {
        padding-left:40px;
        padding-right:40px;

        max-width: 1024px;
      }

    }

    .footer {
      flex: 0 0 auto;
    }
`;


export default ({hero, children, full=false}) => (
  <Body>
    <Helmet>
      <title>
        Goodnight Margaret
      </title>
    </Helmet>
    <div className="header">
      <Header full = {hero} />
    </div>
    <div className="body">
      <div className="content">
      {hero}
        <div className="main">
          {children}
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  </Body>
);



// const Page = styled.div`
//    /* padding-top: ${props => props.full ? '0px;' : headerSize}; */
//    padding-bottom: 40px;
//    /* max-width:1024px; */
// `;

// const Container = styled.div`
//   margin: 0 auto; /* Center the DIV horizontally */


//   p {
//         /* line-height: 200px; Create scrollbar to test positioning */
//   }
// `;


// const BodyContainer = styled.div`
//   margin: 0 auto;
//   padding: ${props => props.full ? '0px' : '20px'};
//   max-width: ${props => props.full ? '100%' : '1024px'};
// `;

// const Fixed = styled.div`
//   width: 100%;
//   position: fixed;
//   background: #333;
//   padding: 10px 0;
// `;

// const FixedHeader = styled(Fixed)`
//   top: 0;
//   z-index:10;
//   opacity: ${props => props.full ? 0.8 : 1};
//   height:headerSize;
//   font-family:'Pacifico';
//   font-size:30px;
//   background-color: ${props => props.full ? '#333' : '#5c5c5c'};

// `;


// const NotFixedHeader = styled.div`
//   width: 100%;
//   /* position: fixed; */
//   padding: 10px 0;

//   top: 0;
//   z-index:10;
//   opacity: 0;
//   height:headerSize;
//   font-family:'Pacifico';
//   font-size:30px;
//   /* background-color: ${props => props.full ? '#333' : '#5c5c5c'};
//   color: ${props => props.full ? '#333' : '#5c5c5c'}; */

// `;


// const FixedFooter = styled(Fixed)`
//   bottom: 0;
//   @media only screen and (max-width: ${breakpoints.mobile}) {
//     font-size: 12px;
//   }
//   color: #fff;

// `;

// const MenuItem = styled(Link)`
//     padding:20px;
//     text-decoration: none;
//     color:yellow;
//     :hover {
//       color: red;
//     }
// `;

// const Contentful = styled.a`
//   margin-top:5px;
//   float:right;
//   margin-right:10px;
//   > img {
//     width:100px;
//     @media only screen and (max-width: ${breakpoints.mobile}) {
//       width:50px;
//     }
//     margin-bottom:0px;
//   }
// `;

// const Small = styled.span`
//   font-size:8px;
// `;


// const Menu = () => (
//   <Container>
//     <nav>
//       <MenuItem to="/">Home</MenuItem>
//       <MenuItem to="/band">About The Band</MenuItem>
//       <MenuItem to="/albums">Albums</MenuItem>
//       <MenuItem to="/margipedia">Margipedia</MenuItem>
//       <MenuItem to="/merch">Merch<Small>andise</Small></MenuItem>
//     </nav>
//   </Container>
// )

// export default ({ children, full=false }) => (
//   <Page full={full}>
//     <FixedHeader full={full}>
//       <Menu />
//     </FixedHeader>

//       {!full &&
//         <NotFixedHeader full={full}>
//           <Menu />
//       </NotFixedHeader>}



//     <BodyContainer {...{full}}>

//       {children}
//     </BodyContainer>
//     <FixedFooter>
//       <Container>Copyright &copy; 2020 Goodnight Margaret
//       <Contentful href='https://www.contentful.com/' rel='nofollow' target='_blank' > <img
//       src='https://images.ctfassets.net/fo9twyrwpveg/7F5pMEOhJ6Y2WukCa2cYws/398e290725ef2d3b3f0f5a73ae8401d6/PoweredByContentful_DarkBackground.svg'
//       alt='Powered by Contentful' />
//     </Contentful>
//     </Container>

//     </FixedFooter>
//   </Page>
// )
