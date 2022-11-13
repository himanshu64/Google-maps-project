import Image from 'next/image'
import React from 'react'
import imageUrl from '@/data/location.png'

import { greatPlaceStyle, greatPlaceStyleHover } from './my_great_place_with_hover_styles.js'

export default class MyGreatPlaceWithHover extends React.PureComponent {
  render() {
    const style = this.props.$hover ? greatPlaceStyleHover : greatPlaceStyle

    return (
      <div style={style}>
        <Image src={imageUrl} alt="abc" height="64" width="64" />
        {this.props.text}
      </div>
    )
  }
}
