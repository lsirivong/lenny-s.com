import _ from 'lodash'
import React from 'react'
import styled from '@emotion/styled'
import { rhythm } from '../utils/typography'
import Image from 'gatsby-image'
import { themeTransitionEase, themeTransitionDuration } from '../utils/animations'

const Container = styled.div`
  display: block;
  margin: ${rhythm(2)} 0;
  display: grid;
  overflow: hidden;
  grid-template-columns: 1fr 1fr;
`

const Content = styled.div`
  padding-left: ${rhythm(1)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Header = styled.header`
  margin-bottom: ${rhythm(1)};
`

const Description = styled.div`
`

const Thumb = styled(Image)`
`

const Button = styled.a`
  display: inline-block;
  padding: ${rhythm(0.5)} ${rhythm(1)};
  text-align: center;
  border: 0;
  transition: background ${themeTransitionDuration} ${themeTransitionEase},
    color ${themeTransitionDuration} ${themeTransitionEase};
  ${({theme}) => `
    background: ${theme.accent};
    color: ${theme.background};
  `};
`

const listify = v => _.isArray(v) ? v.join(', ') : v

const Name = styled.h3`
  margin: 0;
`

export default ({
  url,
  name,
  date,
  jam,
  ranking,
  rankingUrl,
  time,
  theme,
  imageFixed,
}) => (
  <Container>
    {imageFixed && (
      <Thumb
        fixed={imageFixed}
      />
    )}
    <Content>
      <Description>
        <Header>
          <Name>
            {name}
          </Name>
          <small>
            {date}
          </small>
        </Header>

        <dl>
          <dt>
            Jam
          </dt>
          <dd>
            {listify(jam)}
          </dd>
          <dt>
            Theme
          </dt>
          <dd>
            {listify(theme)}
          </dd>
          <dt>
            Jam Duration
          </dt>
          <dd>
            {time}
          </dd>
          <dt>
            Ranking
          </dt>
          <dd>
            <a href={rankingUrl}>
              {ranking}
            </a>
          </dd>
        </dl>
      </Description>
      <Button
        href={url}
      >
        Play Now
      </Button>
    </Content>
  </Container>
)
