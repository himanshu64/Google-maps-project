import Image from 'next/image'
import imageUrl from 'data/location.png'

// InfoWindow component
const InfoStaticWindow = (props) => {
  const { place } = props
  const infoWindowStyle = {
    position: 'relative',
    bottom: 150,
    left: '-45px',
    width: 220,
    backgroundColor: 'white',
    boxShadow: '0 2px 7px 1px rgba(0, 0, 0, 0.3)',
    padding: 10,
    fontSize: 14,
    zIndex: 100,
  }

  return <></>
}

// Marker component
export const MarkerStatic = ({ show, place, $hover }) => {
  const markerStyle = {
    // border: '1px solid white',
    // borderRadius: '50%',
    // height: 10,
    // width: 10,
    // backgroundColor: show ? 'red' : 'blue',
    cursor: 'pointer',
    zIndex: 10,
  }

  return (
    <>
      <div style={markerStyle} />
      <Image src={imageUrl} alt="abc" height="64" width="64" />

      {$hover && <InfoStaticWindow place={place} />}
    </>
  )
}
