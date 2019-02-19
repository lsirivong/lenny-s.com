import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import { styled } from 'linaria/react'
import { rhythm } from '../utils/typography'

const Greeting = styled.div`
  display: flex;
  margin-bottom: ${rhythm(2)};
  align-items: center;
`

const Description = styled.p`
  margin: 0;
`

const PureBio = ({ fixedImage, author, social }) => (
  <Greeting>
    <Image
      fixed={fixedImage}
      alt={author}
      style={{
        marginRight: rhythm(1 / 2),
        marginBottom: 0,
        minWidth: 50,
        borderRadius: `100%`,
      }}
    />

    <Description>
      {author} is a full stack web developer and game maker.
    </Description>
  </Greeting>
)

const Bio = () => (
  <StaticQuery
    query={bioQuery}
    render={data => {
      const { author, social } = data.site.siteMetadata
      const fixedImage = data.avatar.childImageSharp.fixed
      return (
        <PureBio
          {...{
            author,
            social,
            fixedImage,
          }}
        />
      )
    }}
  />
)

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Bio
