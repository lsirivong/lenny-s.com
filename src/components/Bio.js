import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from '@emotion/styled'

import { rhythm } from '../utils/typography'

const Greeting = styled.div`
  display: flex;
`

const Pitch = styled.div`
`

const PureBio = ({ fixedImage, author, social }) => (
  <div>
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

      <p>
        Hi! I’m a full stack web developer at Gin Lane living and working from Denver, CO.
      </p>
    </Greeting>

    <Pitch>
      <h2>
        I build fast, maintainable, award-winning websites.
      </h2>
    </Pitch>
  </div>
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
