import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import BackgroundImage from 'gatsby-background-image';

import Layout from "../components/Layout";
import SEO from "../components/seo";
import styled from 'styled-components';


const Text = styled.div`
  width:100%;
  height:100%;
  text-align:start;
  font-size:60px;
  padding: 70px 0;
  color:#0e89e0;
  font-family:'Poppins';

  padding:40px 10px 10px 10px;
`;


const StyledImage = styled(Img)`
    opacity:0.8;
    top:-80px;
    border-bottom:40px;

`;

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      bandImage: file(relativePath: { eq: "band.JPG" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        logo: file(relativePath: { eq: "goodnight-margaret.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }

      }
  `)
    return (
    <Layout full={true}>
      <SEO title="Home" />
      <BackgroundImage
        fluid={data.bandImage.childImageSharp.fluid}
        >

        <StyledImage
          Tag="section"
          fluid={data.logo.childImageSharp.fluid}
          backgroundColor={`#040e18`}
        >
        </StyledImage>
      </BackgroundImage>
      <Text>
      Goodnight Margaret are a British rock band, formed in Nottingham in 2020. They have sold no records worldwide, making them one of the world's least-selling bands.
      </Text>
   </Layout>
  )
}

export default IndexPage;
