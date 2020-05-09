import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import _ from 'lodash';
import Layout from "../components/Layout";
import SEO from "../components/seo";
import RichText from '../components/RichText';



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
        <h2>{entryName}</h2>
        <RichText text={body} />
      </Layout>
    );
  }}
/>



)

export default Band;
