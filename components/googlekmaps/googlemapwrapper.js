import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import GoogleMapReact from 'google-map-react'

const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
`

const GoogleMapWrapper = ({ children, ...props }) => (
  <Wrapper>
    <GoogleMapReact
      bootstrapURLKeys={{
        // key: process.env.REACT_APP_MAP_KEY,
        key: process.env.MAP_API_KEY,
      }}
      {...props}
    >
      {children}
    </GoogleMapReact>
  </Wrapper>
)

GoogleMapWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
}

GoogleMapWrapper.defaultProps = {
  children: null,
}

export default GoogleMapWrapper
