import React from 'react'
import { Spring } from 'react-spring'
import TransitionLink, { TransitionState } from 'gatsby-plugin-transition-link'
import * as easings from 'd3-ease'

const MySpring = ({ children }) => (
  <TransitionState>
    {({ transitionStatus, exit, entry }) => {
      const mount = ['entering', 'entered'].includes(transitionStatus)
      const unmount = ['exiting'].includes(transitionStatus)
      const seconds = mount ? entry.length : exit.length

      return (
        <Spring
          to={{
            transform: `translateY(${unmount ? '-40px' : (mount ? 0 : '40px')})`,
            opacity: (mount ? 1 : 0),
          }}
          config={{
            duration: seconds * 1000,
            easing: easings.easeCubicOut,
            delay: mount ? exit.length * 1000 : 0,
          }}
        >
          {props => (
            <div
              style={{
                zIndex: mount ? 200 : 100,
                ...props
              }}
            >
              {children}
            </div>
          )}
        </Spring>
      )
    }}
  </TransitionState>
)

const length = 0.5

const SpringLink = ({ to, children, ...rest }) => (
  <TransitionLink
    to={to}
    exit={{ length }}
    entry={{ length: 1.5 }}
    {...rest}
  >
    {children}
  </TransitionLink>
)

export { MySpring, SpringLink }
