import React from 'react';
import { graphql } from 'gatsby';
import _ from 'lodash';
import Layout from '../components/Layout';
import styled from 'styled-components';
import Link from 'gatsby-link';




const AlbumView = ({albumName, tracks}) => (
    <div>
        <h2>{albumName}</h2>
        <ol>
        {
            tracks.map(({trackName})=>
                <li key={trackName}>{trackName}</li>
            )
        }
        </ol>
    </div>
)


export default ({data}) => {
    const {albumName, tracks}  = _.get(data, 'allContentfulAlbum.edges[0].node');

    // return <div>{JSON.stringify(node)}</div>

    // const {albumName, tracks} = _.get(data, 'allContentfulAlbum.edges.node');

    return <Layout><Link to="/albums">Back</Link><AlbumView {...{albumName, tracks}} /></Layout>;
}

export const query = graphql`
query($id:String) {
    allContentfulAlbum (filter: {contentful_id: {eq: $id}}) {
        edges {
            node {
                albumName
                tracks {
                    contentful_id
                    trackName
                }
            }
        }
    }
}
`;
