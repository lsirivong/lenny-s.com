import React from 'react'
import { graphql, Link } from 'gatsby'
import { styled } from 'linaria/react'

import Bio from '../components/Bio'
import SEO from '../components/seo'
import { rhythm } from '../utils/typography'
import DefaultTemplate from '../components/DefaultTemplate'

const Header = styled.header`
  margin-bottom: ${rhythm(1 / 4)};
`
const Title = styled.h3`
  margin-bottom: ${rhythm(1 / 4)};
`

class Index extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const allMdx = data.allMdx.edges

    return (
      <DefaultTemplate>
        <SEO
          title="Full Stack Web Developer & Game Maker"
          keywords={[]}
        />

        <Bio />

        {allMdx.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          const path = `/blog${node.fields.slug}`
          return (
            <div key={path}>
              <Header>
                <Title>
                  <Link
                    to={path}
                  >
                    {title}
                  </Link>
                </Title>
                <small>{node.frontmatter.date}</small>
              </Header>
              <p>
                {node.frontmatter.description}
              </p>
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
            description
          }
        }
      }
    }
  }
`
