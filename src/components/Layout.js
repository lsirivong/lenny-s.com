import React from 'react'
import { styled } from 'linaria/react';
import { rhythm } from '../utils/typography'
import Nav from '../components/Nav'
import themes from '../utils/themes'
import globalStyles from '../utils/globalStyles'
import Helmet from 'react-helmet'

const Container = styled.div`
  padding: ${rhythm(3)} 0 0;
`

const ContentContainer = styled.div`
  flex-grow: 1;
`

class Layout extends React.Component {
  state = {
    darkTheme: false
  }

  render() {
    const { location, title, children } = this.props

    const theme = this.state.darkTheme ? themes.dark : themes.light

    return (
      <Container>
        <Helmet>
          <body className={theme} />
        </Helmet>
        <Nav
          darkTheme={this.state.darkTheme}
          onToggle={e => {
            e.preventDefault();
            this.setState(state => ({
              darkTheme: !state.darkTheme
            }))
          }}
        />

        <ContentContainer>
          {children}
        </ContentContainer>
      </Container>
    )
  }
}

export default Layout
