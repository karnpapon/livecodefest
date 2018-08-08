/**
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 * UI - Icon
 * -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
 */
import React from 'react'
import styled from 'styled-components'

const Icon = ({ name, ...rest }) => {
  rest.className = `${rest.className ? `${rest.className} ` : ''}icon-livecoding-${name}`
  return <IconStyles {...rest} />
}

const IconStyles = styled.i`
  font-size: ${props => props.size ? props.size : '14px'};
  color: ${props => props.color ? props.color : ''};
`

export default Icon
