import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import _ from 'lodash';
import Layout from "../components/Layout";
import SEO from "../components/seo";
import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import useContentfulImage from '../hooks/useContentfulImage';
import Img from "gatsby-image";


const MemberView = styled.div`
`;



const EmbeddedImage = styled(Img)`
    :hover {
        filter: hue-rotate(1deg) blur(5px);
    }
    box-shadow: 25px 25px 50px 0 white inset, -25px -25px 50px 0 white inset;
    /* opacity:0.8; */
    /* width:00px; */
    /* height:100%; */
    /* border:0px; */
    height:512px;
    width:512px;
    /* position: absolute; */

`;

const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node, next) => {
        const id = _.get(node, 'data.target.sys.contentful_id');

        const fluid = useContentfulImage(
          //node.data.target.fields.file["en-US"].url
          id
        );
        return (
          // <div>{JSON.stringify(id)}</div>
          <EmbeddedImage fluid={fluid} />
        )
      }
    }
  };

const Band = () => (
  <StaticQuery
  query={graphql`
    query MargipediaQuery {
        allContentfulMargipedia {
        edges {
          node {
            id
            entryName
            body {
              json
            }
          }
        }
      }
    }
  `}
  render={data => {
    const {entryName, body} = _.get(data, 'allContentfulMargipedia.edges[0].node');

    console.log(body.json);

    return (
      <Layout full={false}>
        <SEO title="Margipedia" />
        <MemberView>
            {documentToReactComponents(body.json, options)}
        </MemberView>
      </Layout>
    );
  }}
/>



)

export default Band;
