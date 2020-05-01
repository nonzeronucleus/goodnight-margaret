import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout";
import Image from "../components/image";
import SEO from "../components/seo";
import styled from 'styled-components';


const BandName = styled.div`
  width:100%;
  height:100%;
  text-align:center;
  font-size:200px;
  padding: 70px 0;
  vertical-align: middle;
  color:#0e89e0;
`;



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <BandName>Goodnight Margaret</BandName>
  </Layout>
)

export default IndexPage
