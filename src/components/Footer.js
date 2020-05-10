import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import breakpoints from '../consts/breakpoints';

const Footer = styled.div`
    width:100%;
    padding-top:0;
    padding-bottom:0;
    padding-left: 10px;
    padding-right: 10px;
    margin-bottom:0px;
    background-color: #5c5c5c;
    color: #f0eceb;
    font-size:14px;
    min-height: 30px;

    > a {
      color: #f0eceb;
      padding-right: 40px;
      text-decoration:none;
      vertical-align: middle;
      font-size:14px;
    }

    @media only screen and (min-width: ${breakpoints.tablet}) {
      font-size:28px;
      min-height: 50px;
    }
`;

const Contentful = styled.a`
  margin-top:5px;
  float:right;
  margin-right:10px;
  > img {
    width:50px;
    margin-bottom:0px;

    @media only screen and (min-width: ${breakpoints.tablet}) {
        width:100px;
    }
  }
`;

export default ({ children, data }) =>
  <Footer>
        Copyright &copy; 2020 Goodnight Margaret
        <Contentful href='https://www.contentful.com/' rel='nofollow' target='_blank' > <img
        src='https://images.ctfassets.net/fo9twyrwpveg/7F5pMEOhJ6Y2WukCa2cYws/398e290725ef2d3b3f0f5a73ae8401d6/PoweredByContentful_DarkBackground.svg'
        alt='Powered by Contentful' />
      </Contentful>

  </Footer>

    // <a href="javascript:gaOptout();">Deactive Google Analytics</a>
