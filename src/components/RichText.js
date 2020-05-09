import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { BLOCKS } from '@contentful/rich-text-types';
import useContentfulImage from '../hooks/useContentfulImage';
import Img from "gatsby-image";

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';



const EmbeddedImage = styled(Img)`
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
          id
        );
        return (
          <EmbeddedImage fluid={fluid} />
        )
      }
    }
  };


const RichText = styled.div`

    font-size:20px;
    grid-area: main;

    /* background-color:blue; */
    padding:10px;
    font-size:14px;

    > p {
        padding-bottom:10px;
        margin-bottom:0px;
        line-height:20px;
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


export default ({text}) => {
    return <RichText>
        {text && documentToReactComponents(text.json, options)}
    </RichText>
}
