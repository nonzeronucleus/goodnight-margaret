
import React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import _ from 'lodash';
import styled from 'styled-components';
import Header from './Header'
import Footer from './Footer';
import breakpoints from '../consts/breakpoints';

const Body = styled.div `
    display: flex;
    flex-direction: column;
    // margin: 0;
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

        // margin-left:100px;
        // margin-right:100px;
        max-width: 800px;
      }

      @media only screen and (min-width: ${breakpoints.desktop}) {
        padding-left:40px;
        padding-right:40px;

        // margin-left:100px;
        // margin-right:100px;
        max-width: 1024px;
      }

    }

    .footer {
      flex: 0 0 auto;
    }

`;


export default ({ children, hero }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => {
      const title=_.get(data, 'site.siteMetadata.title','Supergirls Notts');
      const description=_.get(data, 'site.siteMetadata.description','');

      return (
        <Body>
          <Helmet>
            <title>
              {title}
            </title>
            <link rel="canonical" href="http://supergirls-notts.co.uk" />
            <meta property="og:description" content={description}></meta>
            <meta name="description" content={description} />
            <meta property="og:title" content={title}></meta>
          </Helmet>
          <div className="header">
            <Header />
          </div>
          <div className="body">
            <div className="content">
              {hero}
              <div className="main">
                {children}
              </div>
            </div>
            <div className="footer"><Footer /></div>
          </div>
        </Body>
      )
    }}
  />
);













// import React from "react"
// import { useStaticQuery, graphql } from "gatsby"
// import BackgroundImage from 'gatsby-background-image';
// import styled from 'styled-components';
// import Menu from './Menu';
// import "./layout.css";

// /*
//  * This component is built using `gatsby-image` to automatically serve optimized
//  * images with lazy loading and reduced file sizes. The image is loaded using a
//  * `useStaticQuery`, which allows us to load the image from directly within this
//  * component, rather than having to pass the image data down from pages.
//  *
//  * For more information, see the docs:
//  * - `gatsby-image`: https://gatsby.dev/gatsby-image
//  * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
//  */


// // const StyledImage = styled(BackgroundImage)`
// //     filter: hue-rotate(90deg) blur(4px);
// //     opacity:0.4;
// //     width:100%;
// //     height:100%;
// //     border:0px;
// //     position: absolute;
// // `;

// // const OuterDiv = styled.div`
// //   position:absolute;
// //   width:100%;
// //   height:100%;
// //   top:0px;
// //   left:0px;
// // `;


// // const InnerDiv = styled.div`
// //   position:absolute;
// //   width:100%;

// //   top:0px;
// //   left:0px;
// // `;

// // const MenuDiv = styled.div`
// //   width:100%;
// //   height:40px;
// //   background-color:red;
// //   position:relative;
// //   top:0px;
// //   left:0px;
// // `;

//   // const data = useStaticQuery(graphql`
//   //   query {
//   //     placeholderImage: file(relativePath: { eq: "band.JPG" }) {
//   //       childImageSharp {
//   //         fluid(maxWidth: 300) {
//   //           ...GatsbyImageSharpFluid
//   //         }
//   //       }
//   //     }
//   //   }
//   // `)


//   const Main = styled.div`
//     position:absolute;
//     width:100%;

//     top:110px;
//     left:0px;
//     overflow:scroll;
// `;


// const Layout = ({children}) => {


//   return (
//     <div>
//       <Main>
//         {children}
//       </Main>
//       <Menu/>
//     </div>
//   )



//   // return (
//   //   <OuterDiv>
//   //     <StyledImage
//   //       Tag="section"
//   //       fluid={data.placeholderImage.childImageSharp.fluid}
//   //       backgroundColor={`#040e18`}
//   //     >
//   //   </StyledImage>
//   //   <InnerDiv>
//   //       <Menu/>
//   //       {children}
//   //   </InnerDiv>
//   // </OuterDiv>)
// }



// export default Layout;


// // const Layout = ({ children }) => {



// // const Layout = ({ children }) => {
// //   const data = useStaticQuery(graphql`
// //     query SiteTitleQuery {
// //       site {
// //         siteMetadata {
// //           title
// //         }
// //       }
// //     }
// //   `)

// //   return (
// //     <>
// //       <Header siteTitle={data.site.siteMetadata.title} />
// //       <div
// //         style={{
// //           margin: `0 auto`,
// //           maxWidth: 960,
// //           padding: `0 1.0875rem 1.45rem`,
// //           color:'white'
// //         }}
// //       >
// //         <main>{children}</main>
// //         <footer>
// //           © {new Date().getFullYear()}, Built with
// //           {` `}
// //           <a href="https://www.gatsbyjs.org">Gatsby</a>
// //         </footer>
// //       </div>
// //     </>
// //   )
// // }

// // Layout.propTypes = {
// //   children: PropTypes.node.isRequired,
// // }

// // export default Layout
