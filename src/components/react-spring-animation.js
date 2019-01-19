import React from 'react'
import { Spring } from 'react-spring'
import TransitionLink, { TransitionState } from 'gatsby-plugin-transition-link'

const MySpring = ({ children }) => (
  <TransitionState>
    {({ transitionStatus, exit, entry }) => {
      const mount = ['entering', 'entered'].includes(transitionStatus)
      const seconds = mount ? entry.length : exit.length

      return (
        <Spring
          to={{
            opacity: mount ? 1 : 0,
          }}
          config={{
            duration: seconds * 1000,
          }}
        >
          {props => <div style={props}>{children}</div>}
        </Spring>
      )
    }}
  </TransitionState>
)

const SpringLink = ({ to, children }) => (
  <TransitionLink to={to} exit={{ length: 0.5 }} entry={{ length: 0.5 }}>
    {children}
  </TransitionLink>
)

export { MySpring, SpringLink }
