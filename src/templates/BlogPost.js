import * as React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Layout from "../components/Layout"
import SEO  from "../components/SEO"
import styled from 'styled-components'
import respondTo from '../utils/respondTo'
// import { PageProps } from "@/definitions"

const BlogPostStyled = styled.article`
  padding-top: 18rem;
  max-width: 70rem;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  line-height: 2.6rem;
  
  ${respondTo.tablet`
    padding: 4rem 2rem;
    padding-top: 18rem;
    h1, h2 {
      line-height: 4rem;
    }
    img {
      padding: 2rem;
    }
  `}
  /* align-items: center; */
  

`


const BlogPostTemplate = ({ data, location }) => {
  const post = data.mdx
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  return (
    <Layout title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <BlogPostStyled itemScope itemType="http://schema.org/Article">
        <header >
          <h1
            
            itemProp="headline"
          >
            {post.frontmatter.title}
          </h1>
          {/* <p >
            {post.frontmatter.date}
          </p> */}
        </header>
        <section
          itemProp="articleBody"
        >
          <MDXRenderer>{post.body}</MDXRenderer>
        </section>
      </BlogPostStyled>
      {/* <nav >
        <ul >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav> */}
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: mdx(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
