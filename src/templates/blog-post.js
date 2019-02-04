import React from 'react'
import { graphql } from 'gatsby'
import MDXRenderer from 'gatsby-mdx/mdx-renderer'

import Bio from '../components/Bio'
import SEO from '../components/seo'
import { rhythm, scale } from '../utils/typography'
import styled from '@emotion/styled'
import DefaultTemplate from '../components/DefaultTemplate'
import { SpringLink, MySpring } from '../components/react-spring-animation'

const RendererContainer = styled.div`
`

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.mdx
    const siteTitle = this.props.data.site.siteMetadata.title
    const { previous, next } = this.props.pageContext

    return (
      <DefaultTemplate>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <h1>{post.frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1),
          }}
        >
          {post.frontmatter.date}
        </p>

        <RendererContainer>
          <MDXRenderer>{post.code.body}</MDXRenderer>
        </RendererContainer>

        <hr
          style={{
            marginBottom: rhythm(1),
          }}
        />
        <Bio />

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <SpringLink to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </SpringLink>
            )}
          </li>
          <li>
            {next && (
              <SpringLink to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </SpringLink>
            )}
          </li>
        </ul>
      </DefaultTemplate>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
      code {
        body
      }
    }
  }
`
