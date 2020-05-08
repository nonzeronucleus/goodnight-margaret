import React from "react"
import { StaticQuery, graphql } from 'gatsby'
import _ from 'lodash';
import Layout from "../components/Layout";
import SEO from "../components/seo";
import styled from 'styled-components';
import BandMember from '../components/BandMember';


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
                sizes
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
