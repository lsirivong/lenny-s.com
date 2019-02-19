import _ from 'lodash'
import React from 'react'
import { rhythm } from '../utils/typography'
import Game from '../components/Game'
import { StaticQuery, graphql } from 'gatsby'

const games = [
  {
    name: 'Billy\'s West Quest',
    date: 'December 2, 2018',
    time: '48 Hours',
    jam: ['Mini Jam 16', 'Ludum Dare 43'],
    theme: ['Western', 'Sacrifices Must Be Made'],
    url: 'https://lsirivong.itch.io/billys-west-quest',
    rankingUrl: 'https://itch.io/jam/mini-jam-16-western/rate/338874',
    ranking: 'MJ: 5th, LD: not ranked',
    image: 'billy-s-west-quest',
  },
  {
    name: 'SIR Q.T',
    date: 'November 18, 2018',
    time: '72 Hours',
    jam: 'Mini Jam 15',
    theme: 'Technology',
    url: 'https://lsirivong.itch.io/sirqt',
    rankingUrl: 'https://itch.io/jam/mini-jam-15-technology/rate/332394',
    ranking: '9th',
    image: 'sir-q-t',
  },
  {
    name: 'They Want the Lost Phone',
    date: 'November 8, 2018',
    time: '7 Days',
    jam: 'Weekly Game Jam 69',
    theme: 'Lost Phone',
    url: 'https://lsirivong.itch.io/they-want-the-lost-phone',
    rankingUrl: 'https://itch.io/jam/weekly-game-jam-69/rate/327586',
    ranking: 'Unranked',
    image: 'lost-phone',
  },
  {
    name: 'Untitled Elemental Slime Game',
    date: 'November 4, 2018',
    time: '72 Hours',
    jam: 'Mini Jam 14',
    theme: 'Elements',
    url: 'https://lsirivong.itch.io/untitled-elemental-slime-game',
    rankingUrl: 'https://itch.io/jam/mini-jam-14-elements-/rate/326160',
    ranking: '2nd',
    image: 'untitled-elemental-slime-game',
  },
  {
    name: 'Secondhand',
    date: 'March 1, 2018',
    time: '7 Days',
    jam: 'Fantasy Console Game Jam #3',
    theme: 'One Minute',
    url: 'https://lsirivong.itch.io/secondhand',
    rankingUrl: 'https://itch.io/jam/fantasy-console-game-jam-3/rate/229747',
    ranking: '7th',
    image: 'secondhand',
  },
]

const findImage = (data, image) => (
  _.get(
    _.find(data.images.edges, edge => edge.node.name === image),
    'node.childImageSharp.fluid'
  )
)

export default () => (
  <StaticQuery
    query={gameImageQuery}
    render={data => (
      <>
        {games.map((game, i) => (
          <React.Fragment
            key={game.name}
          >
            <Game
              {...game}
              imageFluid={findImage(data, game.image)}
            />
            {i < games.length - 1 ? (
              <hr />
            ) : null}
          </React.Fragment>
        ))}
      </>
    )}
  />
)

const gameImageQuery = graphql`
  query GameImageQuery {
    images: allFile(filter: { relativeDirectory: { regex: "/game-images/"}}) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxWidth: 315) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
