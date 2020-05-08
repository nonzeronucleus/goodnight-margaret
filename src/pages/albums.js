import React from "react";
import Layout from "../components/Layout";
import { StaticQuery, graphql } from 'gatsby'
import _ from 'lodash';
import Link from 'gatsby-link';
import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


import Img from "gatsby-image";



const CoverArt = styled(Img)`

    :hover {
        filter: grayscale(100%);
    }
    box-shadow: 25px 25px 50px 0 white inset, -25px -25px 50px 0 white inset;
    /* opacity:0.8; */
    /* width:00px; */
    /* height:100%; */
    /* border:0px; */
    height:320px;
    width:320px;
    /* position: absolute; */

`;

const MainText = styled.div`

    font-size:20px;
    grid-area: main;

    /* background-color:blue; */
    padding:10px;
    font-size:28px;

    > p {
        margin-bottom:10px;
    }

    > blockquote {
      font-style:italic;
      /* background-color: green; */
      border-left: 10px solid #ccc;
      margin: 1.5em 10px;
      padding: 0.5em 10px;
      quotes: "\\201C" "\\201D" "\\2018" "\\2019";

      :before {
          color: #ccc;
          content: open-quote;
          font-size: 4em;
          line-height: 0.1em;
          margin-right: 0.25em;
          vertical-align: -0.4em;

      }
      > p {
        display: inline;
      }
    }
`;


const AlbumView = ({albumName, img, description}) => (
    <div>
        <h2><Link to={"/albums/"+encodeURI(albumName)}>{albumName}</Link></h2>
        <Link to={"/albums/"+encodeURI(albumName)}><CoverArt fluid={img} /></Link>
        <MainText>
            {documentToReactComponents(description.json)}
        </MainText>

    </div>
)

// <ol>
// {
//     tracks.map(({trackName})=>
//         <li key={trackName}>{trackName}</li>
//     )
// }
// </ol>




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
                        coverArt {
                          fluid(maxHeight: 640) {
                            src
                            sizes
                            srcSet
                            aspectRatio
                            base64
                          }
                        }
                        description {
                          json
                        }
                    }
                }
            }
      }
    `}
    render={data => {
      const albums = _.get(data, 'allContentfulAlbum.edges');

      return (
        <Layout full={false}>
          {
            albums.map(({node}) => {
              const {albumName, coverArt,description} = node;
              const img = coverArt.fluid;

            //   const img = node.photo.fluid;
              return <AlbumView key={albumName} {...{albumName, img,description}}/>
            })
          }
          </Layout>
      );
    }}
  />
)

