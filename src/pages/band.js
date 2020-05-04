import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import _ from 'lodash';
import Layout from "../components/Layout";
import SEO from "../components/seo";
import styled from 'styled-components';
import BandMember from '../components/BandMember';




const Content = styled.div`
  width:100%;
  height:100%;
  display:flex;
  flex-direction: row;
  /* text-align:center; */
  /* font-size:200px; */
  padding: 70px 0;
  /* vertical-align: middle; */
  color:#0e89e0;
  /* position:relative; */

  ul {
    list-style-type: none;
  }
`;


// const Artist = () => {

// }

const MemberView = styled.div`
`;

const Band = () => (
  <StaticQuery
  query={graphql`
    query BandMemberQuery {
      allContentfulBandMember(sort: {order: ASC, fields: order}) {
        edges {
          node {
            id
            name
            description {
              json
            }
            photo {
              fluid(maxHeight: 128, sizes: "") {
                src
                srcSet
                aspectRatio
                base64
              }
            }
          }
        }
      }
    }
  `}
  render={data => {
    const members = _.get(data, 'allContentfulBandMember.edges');

    return (
      <Layout full={false}>
        <SEO title="Band" />
        <MemberView>
        {
          members.map(({node}, row) => {
            const {name,description} = node;
            const img = node.photo.fluid;
            return <BandMember {...{name, img, description,row}} key={name} />
          })
        }
        </MemberView>
      </Layout>
    );
  }}
/>



)

export default Band;
