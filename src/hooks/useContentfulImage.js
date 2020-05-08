// useContentfulImage.js
import { graphql, useStaticQuery } from "gatsby";

export default id => {
  const { allContentfulAsset } = useStaticQuery(
    graphql`
      query CONTENTFUL_IMAGE_QUERY {
        allContentfulAsset {
          nodes {
            contentful_id
            file {
              url
            }
            fluid(maxWidth: 400, quality: 85) {
                aspectRatio
                base64
                src
                sizes
                srcSet
            }
          }
        }
      }
    `
  );
  return allContentfulAsset.nodes.find(n => n.contentful_id === id).fluid;
};
