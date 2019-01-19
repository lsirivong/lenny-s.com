import React from 'react'
import { graphql } from 'gatsby'
import styled from '@emotion/styled'

import Bio from '../components/Bio'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'
import { SpringLink, MySpring } from '../components/react-spring-animation'
import DefaultTemplate from '../components/DefaultTemplate'

import TransitionLink from 'gatsby-plugin-transition-link'

const Header = styled.header`
  margin-bottom: ${rhythm(1 / 4)};
`
const Title = styled.h3`
  margin-bottom: 0;
`

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMdx.edges

    return (
      <DefaultTemplate>
          <SEO
            title="Lenny Sirivong"
            keywords={[]}
          />

          <Bio />

          {posts.map(({ node }) => {
            const title = node.frontmatter.title || node.fields.slug
            return (
              <div key={node.fields.slug}>
                <Header>
                  <Title>
                    <SpringLink
                      to={node.fields.slug}
                      enter={{
                        duration: 0.3
                      }}
                      exit={{
                        duration: 0.3
                      }}
                    >
                      {title}
                    </SpringLink>
                  </Title>
                  <small>{node.frontmatter.date}</small>
                </Header>
                <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
              </div>
            )
          })}
      </DefaultTemplate>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
