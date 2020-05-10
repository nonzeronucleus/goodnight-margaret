import React from "react";
import Layout from "../components/Layout";
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import _ from 'lodash';
import RichText from '../components/RichText';
import Img from 'gatsby-image';



const MerchStyle = styled.div`
    display:grid;
    grid-template-rows: auto auto;
    grid-template-columns: 400px auto;
    grid-template-areas:
        "image header"
        "image  body"
`;


const ImgArea = styled.div`
    grid-area:image;
`;

const HeaderArea = styled.div`
    grid-area:header;
`;

const BodyArea = styled.div`
    grid-area:body;
`;




const MerchImg = styled(Img)`
    box-shadow: 25px 25px 50px 0 white inset, -25px -25px 50px 0 white inset;
    /* opacity:0.8; */
    /* width:00px; */
    /* height:100%; */
    /* border:0px; */
    height:256px;
    width:256px;
    /* position: absolute; */
`;

const OutOfStock = styled.div`
    color:red;
`;

const MerchItem = ({name, description, img}) => (
    <MerchStyle>
        <HeaderArea>
            <h2>{name}</h2>
        </HeaderArea>
        <ImgArea>
            <MerchImg fluid={img} />
        </ImgArea>
        <BodyArea>
            <RichText text={description} />
            <OutOfStock>Out of stock</OutOfStock>
        </BodyArea>
    </MerchStyle>
)

export default () => (
    <StaticQuery
    query={graphql`
      query MerchQuery {
        allContentfulMerchandise {
            edges {
              node {
                name
                description {
                  json
                }
                image {
                fluid(maxHeight: 128, sizes: "") {
                    src
                    sizes
                    srcSet
                    aspectRatio
                    base64
                    }
                }
                price
              }
            }
          }
      }
    `}
    render={data => {
        const merch = _.get(data, 'allContentfulMerchandise.edges');

        return (
          <Layout full={false}>

          {merch.map(({node}, row) => {
            const {name,description} = node;
            const img = node.image.fluid;

            return <MerchItem key = {name} {...{name,description, img}} />
          })}
          </Layout>
        )
        }
    } />
)