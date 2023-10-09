import * as React from "react"
import {graphql, Link } from "gatsby"


import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import { GatsbyImage } from "gatsby-plugin-image"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home"></Seo>
    <div>
        
    </div>
    <ul className={styles.list}>
      {
        data.allContentfulBlogPost.edges.map(edge => (
          <li key={edge.node.id}>
            <div class="blogContainer">
              <Link class="blogTitle" to={edge.node.slug}>{edge.node.title}
                <GatsbyImage class="blogImg" image={edge.node.heroImage.gatsbyImageData}>
                </GatsbyImage>
              </Link>
            </div>
            <div>
              {edge.node.body.childrenMarkdownRemark}
            </div>
          </li>
        ))
      }
    </ul>
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage

export const query = graphql`
  query {
    allContentfulBlogPost {
      edges {
        node {
          slug
          heroImage {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED, width: 300)
          }
          body {
            childMarkdownRemark {
              excerpt
            }
          }
          id
          title
        }
      }
    }
  }
`
