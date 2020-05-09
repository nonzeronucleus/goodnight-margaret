import React from 'react';
import _ from 'lodash';
import Layout from '../components/Layout';
import Link from 'gatsby-link';
import RichText from '../components/RichText';


export default ({data, location}) => {
    const {trackName, lyrics}  = _.get(data, 'allContentfulTrack.edges[0].node');
    const parent =  _.get(location, 'state.parent');

    return (<Layout>
        { parent && <Link to={parent}>Back</Link> }
        <h2>{trackName}
        </h2>
        <RichText text={lyrics} />
    </Layout>)
}

export const query = graphql`
    query($id:String) {
        allContentfulTrack (filter: {contentful_id: {eq: $id}}) {
            edges {
              node {
                contentful_id
                trackName
                lyrics {
                  json
                }
              }
            }
        }
    }
`
