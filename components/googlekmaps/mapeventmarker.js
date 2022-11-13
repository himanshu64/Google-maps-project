// import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
// import Image from 'next/image';
// import imageUrl from '@/data/location.png'

// const Wrapper = styled.div`
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   width: 18px;
//   height: 18px;
//   background-color: #000;
//   border: 2px solid #fff;
//   border-radius: 100%;
//   user-select: none;
//   transform: translate(-50%, -50%);
//   cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
//   &:hover {
//     z-index: 1;
//   }
// `;

// const MapEventMarker = ({ story, onClick , }) => (
//   <Wrapper
//     alt={story.title}
//     onClick={onClick}
//   >
//     <Image src={imageUrl} />
//     {story.isShow && <InfoWindow story={story} />}
//   </Wrapper>
// );

// MapEventMarker.defaultProps = {
//   onClick: null,
// };

// MapEventMarker.propTypes = {
//   onClick: PropTypes.func,
//   story: PropTypes.object.isRequired,
// };

// const InfoWindow = (props) => {
//   const { story } = props;
//   const infoWindowStyle = {
//     position: 'relative',
//     bottom: 150,
//     left: '-45px',
//     width: 220,
//     backgroundColor: 'white',
//     boxShadow: '0 2px 7px 1px rgba(0, 0, 0, 0.3)',
//     padding: 10,
//     fontSize: 14,
//     zIndex: 100,
//   };

//   return (
//     <div style={infoWindowStyle}>
//       <div style={{ fontSize: 16 }}>
//         {story.title}
//       </div>
//       {/* <div style={{ fontSize: 14 }}> */}
//         {/* <span style={{ color: 'grey' }}>
//           {place.rating}
//           {' '}
//         </span> */}
//         {/* <span style={{ color: 'orange' }}>
//           {String.fromCharCode(9733).repeat(Math.floor(place.rating))}
//         </span>
//         <span style={{ color: 'lightgrey' }}>
//           {String.fromCharCode(9733).repeat(5 - Math.floor(place.rating))}
//         </span>
//       </div>
//       <div style={{ fontSize: 14, color: 'grey' }}>
//         {place.types[0]}
//       </div>
//       <div style={{ fontSize: 14, color: 'grey' }}>
//         {'$'.repeat(place.price_level)}
//       </div>
//       <div style={{ fontSize: 14, color: 'green' }}>
//         {place.opening_hours.open_now ? 'Open' : 'Closed'}
//       </div> */}
//     </div>
//   );
// };

// InfoWindow.propTypes = {
//   place: PropTypes.shape({
//     story: PropTypes.object,
//     // formatted_address: PropTypes.string,
//     // rating: PropTypes.number,
//     // types: PropTypes.arrayOf(PropTypes.string),
//     // price_level: PropTypes.number,
//     // opening_hours: PropTypes.shape({
//     //   open_now: PropTypes.bool,
//     // }),
//   }).isRequired,
// };
// export default MapEventMarker;