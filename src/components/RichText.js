import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';

import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


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
        {text && documentToReactComponents(text.json)}
    </RichText>
}
