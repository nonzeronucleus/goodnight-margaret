import React from 'react';
import { graphql } from 'gatsby';
import _ from 'lodash';
import Layout from '../components/Layout';
import Link from 'gatsby-link';
import RichText from '../components/RichText';



export default ({data, location}) => {
    const {name, personalDescription}  = _.get(data, 'allContentfulBandMember.edges[0].node');

    // return <div>{JSON.stringify(data)}</div>

    return <Layout>
        <h2>{name}</h2>
        <RichText text= {personalDescription} />
    </Layout>;
}

export const query = graphql`
query($id:String) {
    allContentfulBandMember (filter: {contentful_id: {eq: $id}}) {
        edges {
            node {
              personalDescription {
                json
              }
              name
            }
          }
    }
}
`;
