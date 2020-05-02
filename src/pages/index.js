import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image';

import Layout from "../components/Layout";
import Image from "../components/image";
import SEO from "../components/seo";
import styled from 'styled-components';


const BandName = styled.div`
  width:100%;
  height:100%;
  text-align:center;
  font-size:200px;
  padding: 70px 0;
  vertical-align: middle;
  color:#0e89e0;
`;


const InnerDiv = styled.div`
  /* position:absolute; */
  width:100%;

  top:0px;
  left:0px;
`;

const StyledImage = styled(Image)`
    filter: hue-rotate(90deg) blur(4px);
    opacity:0.4;
    /* width:100%; */
    /* height:100%; */
    border:0px;
    /* position: absolute; */

`;



const IndexPage = () => {
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
    <Layout>
      <SEO title="Home" />
        <StyledImage
            Tag="section"
            fluid={data.placeholderImage.childImageSharp.fluid}
            backgroundColor={`#040e18`}
          >
        </StyledImage>
        <BandName>Goodnight Margaret</BandName>
        </Layout>
  )
}

export default IndexPage;
