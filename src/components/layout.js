import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';
import Menu from './Menu';
import "./layout.css";

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */


const StyledImage = styled(BackgroundImage)`
    filter: hue-rotate(90deg) blur(4px);
    opacity:0.4;
    width:100%;
    height:100%;
    border:0px;
    position: absolute;
`;

const OuterDiv = styled.div`
  position:absolute;
  width:100%;
  height:100%;
  top:0px;
  left:0px;
`;


const InnerDiv = styled.div`
  position:absolute;
  width:100%;

  top:0px;
  left:0px;
`;

const MenuDiv = styled.div`
  width:100%;
  height:40px;
  background-color:red;
  position:relative;
  top:0px;
  left:0px;
`;


const Layout = ({children}) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "band.JPG" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <OuterDiv>
      <StyledImage
        Tag="section"
        fluid={data.placeholderImage.childImageSharp.fluid}
        backgroundColor={`#040e18`}
      >
    </StyledImage>
    <InnerDiv>
        <Menu/>
        {children}
    </InnerDiv>
  </OuterDiv>)
}



export default Layout;


// const Layout = ({ children }) => {



// const Layout = ({ children }) => {
//   const data = useStaticQuery(graphql`
//     query SiteTitleQuery {
//       site {
//         siteMetadata {
//           title
//         }
//       }
//     }
//   `)

//   return (
//     <>
//       <Header siteTitle={data.site.siteMetadata.title} />
//       <div
//         style={{
//           margin: `0 auto`,
//           maxWidth: 960,
//           padding: `0 1.0875rem 1.45rem`,
//           color:'white'
//         }}
//       >
//         <main>{children}</main>
//         <footer>
//           © {new Date().getFullYear()}, Built with
//           {` `}
//           <a href="https://www.gatsbyjs.org">Gatsby</a>
//         </footer>
//       </div>
//     </>
//   )
// }

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

// export default Layout
