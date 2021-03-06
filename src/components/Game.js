import _ from 'lodash'
import React from 'react'
import { css } from 'linaria'
import { styled } from 'linaria/react'
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

const Thumb = css`
  ${largerThanSmall} {
    grid-row: 1 / 3;
  }
`

const Button = styled.a`
  display: inline-block;
  padding: ${rhythm(0.5)} ${rhythm(1)};
  text-align: center;
  border: 0;
  transition: background ${themeTransitionDuration} ${themeTransitionEase},
    color ${themeTransitionDuration} ${themeTransitionEase};
  background: var(--color-accent);
  color: var(--color-background);
`

const Description = styled.dl`
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-auto-flow: column;
  grid-column-gap: ${rhythm(1)};
  margin: 0;
  ${largerThanSmall} {
    grid-column: 2 / -1;
  }
  *:nth-of-type(n) {
    grid-column: 1 / 2;
  }
  *:nth-of-type(2n) {
    grid-column: 2 / 3;
  }
  ${Button}:nth-of-type(n) {
    grid-column: 1 / -1;
  }
`

const Name = styled.h3`
  margin: 0 0 ${rhythm(0.5)};
`

const Meta = styled.small`
  display: block;
  line-height: 1;
`

const listify = v => _.isArray(v) ? v.join(', ') : v

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
      <Image
        className={Thumb}
        fluid={imageFluid}
      />
    )}

    <Header>
      <Name>
        <a href={url}>
          {name}
        </a>
      </Name>
      <Meta>
        {date}
      </Meta>
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

      <Button
        href={url}
      >
        Play on itch.io
      </Button>
    </Description>
  </Container>
)
