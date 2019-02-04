import _ from 'lodash'
import React from 'react'
import styled from '@emotion/styled'
import { rhythm } from '../utils/typography'
import Image from 'gatsby-image'
import { themeTransitionEase, themeTransitionDuration } from '../utils/animations'

const largerThanSmall = `@media (min-width: 481px)`

const Container = styled.div`
  display: block;
  margin: ${rhythm(2)} 0;
  display: grid;
  overflow: hidden;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  align-items: start;
  grid-gap: ${rhythm(1)};
`

const Header = styled.header`
`

const Thumb = styled(Image)`
  ${largerThanSmall} {
    grid-row: 1 / 3;
  }
`

const Description = styled.dl`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-auto-flow: column;
  grid-column-gap: ${rhythm(1)};
  ${largerThanSmall} {
    grid-column: 2 / -1;
  }
  *:nth-of-type(n) {
    grid-column: 1 / 2;
  }
  *:nth-of-type(2n) {
    grid-column: 2 / 3;
  }
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
  imageFluid,
}) => (
  <Container>
    {imageFluid && (
      <Thumb
        fluid={imageFluid}
      />
    )}

    <Header>
      <Name>
        {name}
      </Name>
      <small>
        {date}
      </small>
    </Header>

    <Description>
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
    </Description>
  </Container>
)
