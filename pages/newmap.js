// import React, { useRef, useState, useEffect, Component } from 'react'
// import Image from 'next/image'
// import Link from '@/components/Link'
// import imageUrl from 'data/map-marker-512.png'
// import GoogleMapReact from 'google-map-react'
// import HomeIcon from '../data/home.svg'
// import MusicIcon from '../data/music.svg'
// import styles from '@/data/mapStyles'
// import audio from '@/data/audios.json'
// import GoogleMapWrapper from '@/components/googlekmaps/googlemapwrapper'
// import MapEventMarker from '@/components/googlekmaps/mapeventmarker'
// import isEmpty from 'lodash.isempty'

const NewMapTour = () => {
  return <></>
}
export default NewMapTour

// // export default function NewMapTour() {
// //   const [markers, setMarkers] = useState([])

// //   const [storyAudio, setStoryAudio] = useState([...audio.audios])
// //   const mapRef = useRef()
// //   let defaultProps = {
// //     center: {
// //       lat: 28.5289864,
// //       lng: 77.2137014,
// //     },
// //     zoom: 5,
// //     centerAroundCurrentLocation: false,
// //     visible: true,
// //   }

// //   console.lo

// //   const handleApiLoaded = (map, maps) => {
// //     console.log('storyAudio', storyAudio)
// //     let infowindow = new google.maps.InfoWindow()
// //     for (let i = 0; i < storyAudio.length; i++) {
// //       // init markers
// //       let marker = new google.maps.Marker({
// //         position: new google.maps.LatLng(storyAudio[i].lat, storyAudio[i].lng),
// //         map: map,
// //         title: 'Click Me ' + i,
// //       })

// //       // process multiple info windows
// //       ;(function (marker, i) {
// //         // add click event
// //         let infoWindow;
// //         maps.event.addListener(marker, 'click', function () {
// //           if (!marker.open) {
// //             infoWindow = new google.maps.InfoWindow({
// //               close: () => {
// //                 var ourAudio = document.getElementById('audio')
// //                 ourAudio.pause()
// //               },
// //               content:
// //                 ' <div class="info-window">' +
// //                 ' <img src=' +storyAudio[i].image_url +
// //                 '  class="h-[100] w-full rounded-md" alt="" />' +
// //                 ' <div  class="font-bold pt-2 text-xl">' +
// //                 storyAudio[i].title +
// //                 '</div>' +
// //                 '<div  class="font-normal pt-2 text-xs">' +
// //                 storyAudio[i].summary +
// //                 '</div>' +
// //                 ' <button class="rounded-full bg-[#E1F1FF] mt-4 p-2 font-normal">' +
// //                 Math.floor(storyAudio[i].duration_in_secs / 60) +
// //                 ' min</button>' +
// //                 '<br/><button onclick=' +
// //                 playAudioSong(storyAudio[i].audio_url) +
// //                 ' class="mt-4 p-2 text-white font-bold rounded-full bg-[#EB8003]">' +
// //                 'Play Audio story' +
// //                 '</button>' +
// //                 '</div>',
// //             })
// //             infoWindow.open(map, marker)
// //             marker.open = true
// //           } else {
// //             var ourAudio = document.getElementById('audio')
// //             ourAudio.pause()
// //             marker.open = false
// //             infoWindow.close()
// //             console.log('close')

// //           }
// //           google.maps.event.addListener(map, "click", function(event) {
// //             infoWindow.close();
// //         });
// //         })

// //       })(marker, i)
// //     }
// //   }
// //   const playAudioSong = (url) => {
// //     var ourAudio = document.getElementById('audio') // Create a audio element using the DOM
// //     ourAudio.src = url // Set resource to our URL
// //     ourAudio.autoplay = true // Automatically play sound
// //     ourAudio.play()
// //     console.log(url)
// //     // if (!ourAudio.paused == true) {
// //     //   ourAudio.play()
// //     // } else {
// //     //   ourAudio.pause()
// //     // }
// //     ourAudio.onended = function () {
// //       this.remove() // Remove when played.
// //     }
// //   }
// //   const generateInfoWindowContentString = (data) => {
// //     return
// //   }
// //   const onChildClickCallback = (key) => {
// //     setStoryAudio((state) => {
// //       const index = state.findIndex((e) => e.id === Number(key) + 1)
// //       state[index].isShow = !state[index].isShow // eslint-disable-line no-param-reassign
// //       return storyAudio
// //     })

// //     console.log(storyAudio)
// //   }

// //   return (
// //     <>
// //       <div className="relative ">
// //         <audio id="audio" style={{ display: 'none' }}></audio>
// //         <div className="flex justify-between pt-8">
// //           <Link
// //             href={'/landing'}
// //             className="button-shadow relative z-50 ml-14 max-w-sm rounded-lg border border-gray-200 bg-white p-2 shadow-md dark:border-gray-700 dark:bg-gray-800"
// //           >
// //             <HomeIcon />
// //           </Link>

// //           <div className="button-shadow relative z-50 mr-14  max-w-sm rounded-lg border border-gray-200 bg-white p-2 shadow-md dark:border-gray-700 dark:bg-gray-800">
// //             <MusicIcon />
// //           </div>
// //         </div>
// //         <main
// //           style={{ height: '100vh', width: '100%' }}
// //           className={'absolute bottom-0 left-0 right-0 top-0 z-0 bg-transparent'}
// //         >
// //           <GoogleMapReact
// //             bootstrapURLKeys={{ key: 'AIzaSyCzWjCqkm_oyyujQd13vg7QEQlumHnXZ_o' }}
// //             defaultCenter={defaultProps.center}
// //             defaultZoom={defaultProps.zoom}
// //             yesIWantToUseGoogleMapApiInternals
// //             onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
// //             onChildClick={onChildClickCallback}
// //             // style={styles}
// //             ref={mapRef}
// //             options={{
// //               styles: styles,
// //               disableDefaultUI: false,
// //               mapTypeControl: false,
// //               streetViewControl: true,
// //               draggable: true,
// //             }}
// //           ></GoogleMapReact>
// //         </main>
// //       </div>
// //     </>
// //   )
// // }

// // Return map bounds based on list of places
// const getMapBounds = (map, maps, stories) => {
//   const bounds = new maps.LatLngBounds()

//   stories.forEach((story) => {
//     bounds.extend(new maps.LatLng(story.lat, story.lng))
//   })
//   return bounds
// }

// // Re-center map when resizing the window
// const bindResizeListener = (map, maps, bounds) => {
//   maps.event.addListener(map, 'idle', () => {
//     maps.event.addListener(window, 'resize', () => {
//       map.fitBounds(bounds)
//     })
//   })
// }
// // Fit map to its bounds after the api is loaded
// const apiIsLoaded = (map, maps, stories) => {
//   // // Get bounds by our places
//   // const bounds = getMapBounds(map, maps, stories)
//   // // Fit map to bounds
//   // map.fitBounds(bounds)
//   // // Bind the resize listener
//   // bindResizeListener(map, maps, bounds)
// }

// class NewMapTour extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       stories: [],
//     }
//   }

//   componentDidMount() {
//     this.setState({ stories: audio.audios })
//     // fetch('@/data/audios.json')
//     //   .then((response) => response.json())
//     //   .then((data) => {
//     //     console.log(data)

//     //   })
//   }
//   onChildClickCallback = (key) => {
//     this.setState((state) => {
//       console.log("key",key)
//       const index = state.stories.findIndex((e) => e.id === Number(key) );
//       console.log("index",index)
//       state.stories[index].isShow = !state.stories[index].isShow; // eslint-disable-line no-param-reassign
//       return { stories: state.stories };
//     });
//   };

//   render() {

//     const { stories } = this.state
//     console.log("stories", stories)
//     let defaultProps = {
//       center: {
//         lat: 28.5289864,
//         lng: 77.2137014,
//       },
//       zoom: 5,
//       centerAroundCurrentLocation: false,
//       visible: true,
//     }
//     return (
//       <>
//         {!isEmpty(stories) && (
//           <GoogleMapWrapper
//             defaultZoom={defaultProps.zoom}
//             defaultCenter={defaultProps.center}
//             yesIWantToUseGoogleMapApiInternals
//             onGoogleApiLoaded={({ map, maps }) => apiIsLoaded(map, maps, stories)}
//             onChildClick={this.onChildClickCallback}
//             options={{
//               styles: styles,
//               disableDefaultUI: false,
//               mapTypeControl: false,
//               streetViewControl: true,
//               draggable: true,
//             }}
//           >
//             {stories.map((story) => (
//               <MapEventMarker key={story.id} story={story}  lat={story.lat} lng={story.lng} onClick={
//                 () => {

//                 }
//               } />
//             ))}
//           </GoogleMapWrapper>
//         )}
//       </>
//     )
//   }
// }
// export default NewMapTour
