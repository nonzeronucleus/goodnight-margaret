import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import _ from 'lodash';
import Layout from "../components/Layout";
// import SEO from "../components/seo";
import Img from "gatsby-image";
import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


const Headshot = styled(Img)`
    /* filter: hue-rotate(deg) blur(4px); */
    /* opacity:0.8; */
    /* width:00px; */
    /* height:100%; */
    /* border:0px; */
    height:128px;
    width:128px;
    /* position: absolute; */

`;

const Content = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-direction: row;
  /* text-align:center; */
  /* font-size:200px; */
  padding: 70px 0;
  /* vertical-align: middle; */
  color:#0e89e0;
  /* position:relative; */

  ul {
    list-style-type: none;
  }
`;


const Sidebar = styled.div`
  padding-top:20px;
  /* background-color: red; */
  width: 200px;
`;

const Main = styled.div`
  /* background-color: blue; */
  width:100%;
`;

// const Artist = () => {

// }

const MemberView = styled.div`
  padding:20px;
`;

const BandMember = ({name, img, description}) => (
  <div>
    <h2>{name}</h2>

    <Headshot fluid={img}/>

    {documentToReactComponents(description.json)}

  </div>
)



const Band = () => (
  <StaticQuery
  query={graphql`
    query EventOverviewQuery {
      allContentfulBandMember {
        edges {
          node {
            id
            name
            description {
              json
            }
            photo {
              fluid(maxHeight: 128, sizes: "") {
                src
                srcSet
                aspectRatio
                base64
              }
            }
          }
        }
      }
    }
  `}
  render={data => {
    const members = _.get(data, 'allContentfulBandMember.edges');

    return (
      <Layout full={false}>
        <MemberView>
        {
          members.map(({node}) => {
            const {name,description} = node;
            const img = node.photo.fluid;
            return <BandMember {...{name, img, description}} key={name} />
          })
        }
        </MemberView>
      </Layout>
    );
  }}
/>



)

export default Band;
