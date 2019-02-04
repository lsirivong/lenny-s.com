import React from 'react'
import { Global } from '@emotion/core'
import styled from '@emotion/styled'
import { rhythm } from '../utils/typography'
import { ThemeProvider, withTheme } from 'emotion-theming'
import Nav from '../components/Nav'

import themes from '../utils/themes'
import globalStyles from '../utils/globalStyles'

const Container = styled.div`
  padding: ${rhythm(3)} 0 0;
`

const ContentContainer = styled.div`
  flex-grow: 1;
`

const GlobalWithTheme = withTheme(Global)

class Layout extends React.Component {
  state = {
    darkTheme: false
  }

  render() {
    const { location, title, children } = this.props

    const theme = this.state.darkTheme ? themes.dark : themes.light

    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Global
            styles={globalStyles(theme)}
          />

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
      </ThemeProvider>
    )
  }
}

export default Layout
