import React from 'react';
import _ from 'lodash';
import Layout from '../components/Layout';
import styled from 'styled-components';
import Link from 'gatsby-link';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


const MainText = styled.div`

    font-size:20px;
    grid-area: main;

    /* background-color:blue; */
    padding:10px;
    font-size:14px;
    line-height:14px;

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

export default ({data, location}) => {
    const {trackName, lyrics}  = _.get(data, 'allContentfulTrack.edges[0].node');
    const parent =  _.get(location, 'state.parent');

    return (<Layout>
        { parent && <Link to={parent}>Back</Link> }
        <h2>{trackName}
        </h2>
        <MainText>
            {lyrics && documentToReactComponents(lyrics.json)}
        </MainText>
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
