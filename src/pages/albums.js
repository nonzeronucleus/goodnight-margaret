import React from "react";
import Layout from "../components/Layout";
import { StaticQuery, graphql } from 'gatsby'
import _ from 'lodash';
import styled from 'styled-components';

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



export default () => (
    <StaticQuery
    query={graphql`
        query AlbumListQuery {
            allContentfulAlbum {
                edges {
                    node {
                        albumName
                        tracks {
                            trackName
                        }
                    }
                }
            }
      }
    `}
    render={data => {
      const members = _.get(data, 'allContentfulAlbum.edges');

      return (
        <Layout full={false}>
          {
            members.map(({node}) => {
              const {albumName, tracks} = node;
            //   const img = node.photo.fluid;
              return <AlbumView key={albumName} {...{albumName, tracks}}/>
            })
          }
          </Layout>
      );
    }}
  />
)

