import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from '@/components/Link'
import GoogleMapReact from 'google-map-react'
import HomeIcon from '../data/home.svg'
import MusicIcon from '../data/music.svg'
import styles from '@/data/mapStyles'
import audio from '@/data/audios.json'
import StorySidebar from '@/components/story_sidebar'

export default function MapTour() {
  const [markers, setMarkers] = useState([])

  const [storyAudio, setStoryAudio] = useState([...audio.audios])
  const mapRef = useRef()
  let defaultProps = {
    center: {
      lat: 28.5289864,
      lng: 77.2137014,
    },
    zoom: 5,
    centerAroundCurrentLocation: false,
    visible: true,
  }

  console.lo

  const handleApiLoaded = (map, maps) => {
    console.log('storyAudio', storyAudio)
    let infowindow = new maps.InfoWindow()
    for (let i = 0; i < storyAudio.length; i++) {
      // init markers
      let marker = new maps.Marker({
        position: new maps.LatLng(storyAudio[i].lat, storyAudio[i].lng),
        map: map,
        title: 'Click Me ' + i,
      })

      // process multiple info windows
      ;(function (marker, i) {
        // add click event
        let infoWindow
        maps.event.addListener(marker, 'click', function () {
          if (!marker.open) {
            infoWindow = new maps.InfoWindow({
              close: () => {
                var ourAudio = document.getElementById('audio')
                ourAudio.pause()
              },
              content:
                ' <div class="info-window">' +
                ' <img src=' +
                storyAudio[i].image_url +
                '  class="h-[100] w-full rounded-md" alt="" />' +
                ' <div  class="font-bold pt-2 text-xl">' +
                storyAudio[i].title +
                '</div>' +
                '<div  class="font-normal pt-2 text-xs">' +
                storyAudio[i].summary +
                '</div>' +
                ' <button class="rounded-full bg-[#E1F1FF] mt-4 p-2 font-normal">' +
                Math.floor(storyAudio[i].duration_in_secs / 60) +
                ' min</button>' +
                ' <button style="display:none" class="rounded-full bg-[#E1F1FF] mt-4 p-2 font-normal">' +
                +' min</button>' +
                '</div>',
            })
            playAudioSong(storyAudio[i].audio_url)
            infoWindow.open(map, marker)
            marker.open = true
          } else {
            var ourAudio = document.getElementById('audio')
            ourAudio.pause()
            marker.open = false
            infoWindow.close()
            console.log('close')
          }
          maps.event.addListener(map, 'click', function (event) {
            infoWindow.close()
          })
        })
      })(marker, i)
    }
  }
  // '<br/><button onclick=' +
  //               playAudioSong(storyAudio[i].audio_url) +
  //               ' class="mt-4 p-2 text-white font-bold rounded-full bg-[#EB8003]">' +
  //               'Play Audio story' +
  //               '</button>' +
  const playAudioSong = (url) => {
    var ourAudio = document.getElementById('audio') // Create a audio element using the DOM
    ourAudio.src = url // Set resource to our URL
    ourAudio.autoplay = true // Automatically play sound
    ourAudio.play()
    console.log(url)
    // if (!ourAudio.paused == true) {
    //   ourAudio.play()
    // } else {
    //   ourAudio.pause()
    // }
    ourAudio.onended = function () {
      this.remove() // Remove when played.
    }
  }
  const generateInfoWindowContentString = (data) => {
    return
  }
  const onChildClickCallback = (key) => {
    setStoryAudio((state) => {
      const index = state.findIndex((e) => e.id === Number(key) + 1)
      state[index].isShow = !state[index].isShow // eslint-disable-line no-param-reassign
      return storyAudio
    })

    console.log(storyAudio)
  }

  const onStoryClick = () => {}

  return (
    <>
      <div className="relative ">
        <audio id="audio" style={{ display: 'none' }}></audio>
        <div className="flex justify-between pt-8">
          <Link
            href={'/'}
            className="button-shadow relative z-50 ml-14 max-w-sm rounded-lg border border-gray-200 bg-white p-2 shadow-md dark:border-gray-700 dark:bg-gray-800"
          >
            <HomeIcon />
          </Link>
          <StorySidebar onStoryClick={onStoryClick} stories={audio.audios} />
        </div>
        <main
          style={{ height: '100vh', width: '100%' }}
          className={'absolute bottom-0 left-0 right-0 top-0 z-0 bg-transparent'}
        >
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.NEXT_PUBLIC_MAP_API_KEY, mapIds: [process.env.NEXT_PUBLIC_MAP_ID], }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
            onChildClick={onChildClickCallback}
            // style={styles}
            ref={mapRef}
            options={{
              // styles: styles,
              disableDefaultUI: false,
              mapTypeControl: false,
              streetViewControl: true,
              draggable: true,
              mapId:process.env.NEXT_PUBLIC_MAP_ID
            }}
          ></GoogleMapReact>
        </main>
      </div>
    </>
  )
}
