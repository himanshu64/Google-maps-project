import React, { useState, useEffect, Suspense, useRef } from 'react'
import Image from 'next/image'
import GoogleMapReact from 'google-map-react'
import LayoutWrapper from '@/components/LayoutWrapper'
import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from '@/components/Link'
import SectionContainer from '@/components/SectionContainer'
import Footer from '@/components/Footer'
import MobileNav from '@/components/MobileNav'
import ThemeSwitch from '@/components/ThemeSwitch'
import { MarkerStatic } from '@/components/my_marker'
import HomeIcon from '../data/home.svg'
import MusicIcon from '../data/music.svg'
import imageUrl from 'data/location.png'
import styles from '@/data/mapStyles'
import audio from '@/data/audios.json'
import StorySidebar from '@/components/story_sidebar'

export default function LandingHome() {
  const mapRef = useRef()
  const playerRef = useRef()
  let defaultProps = {
    center: {
      lat: 28.5289864,
      lng: 77.2137014,
    },
    zoom: 12,
    centerAroundCurrentLocation: false,
    visible: true,
  }
  const [isLoading, setIsLoading] = useState(false)
  const [currentLocation, setCurrentLocation] = useState({
    center: {
      lat: 0,
      lng: 0,
    },
  })

  const [playTrack, setPlayTrack] = useState({
    // Get audio file in a variable
    audio: typeof Audio !== 'undefined' && new Audio(),

    // Set initial state of song
    isPlaying: false,
  })

  //   const playAudio = () => {
  //    let audio = typeof Audio !== 'undefined' && new Audio('/static/music1.mp3')
  //    audio.autoplay = true;
  //    let resp = audio.play()
  //    if (resp!== undefined) {
  //     resp.then(_ => {
  //         // autoplay starts!
  //         console.log("audio play")
  //     }).catch(error => {
  //        //show error
  //        console.log("audio play denied", error)
  //     });
  // }
  //   }

  const handleApiLoaded = async (map, maps) => {
    // use map and maps objects
    // console.log('map', map)
    // console.log('maps', maps)
    // playAudio()
    // document.getElementById("player").addEventListener('click', musicPlay);
    // function musicPlay() {
    // document.getElementById('player').play();
    // document.removeEventListener('click', musicPlay);
    // }
  }

  const getLocation = async () => {
    // console.log('get location', navigator.geolocation)
    if (navigator.geolocation) {
      console.log('get location')
      //
      await navigator.permissions
        .query({
          name: 'geolocation',
        })
        .then(function (result) {
          setIsLoading(false)
          if (result.state == 'granted') {
            // report(result.state)
            // geoBtn.style.display = 'none'
            console.log('granted')
          } else if (result.state == 'prompt') {
            // report(result.state)
            // geoBtn.style.display = 'none'
            console.log('prompt')

            // navigator.geolocation.getCurrentPosition(revealPosition, positionDenied, geoSettings)
            navigator.geolocation.getCurrentPosition(success, error)
          } else if (result.state == 'denied') {
            // report(result.state)
            // geoBtn.style.display = 'inline'
            console.log('denied')
          }
          result.onchange = function () {
            // report(result.state)
          }
        })
    }
  }
  function success(position) {
    setCurrentLocation((prev) => ({
      ...prev,
      center: {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      },
    }))

    console.log(currentLocation.center.lat)
    let center = new window.google.maps.LatLng(position.coords.latitude, position.coords.longitude)
    var marker = new window.google.maps.Marker({
      position: currentLocation,
      icon: <Image src={imageUrl} alt="abc" height="64" width="64" />,
    })
    mapRef.current.map_.panTo(center)
    window.onload = function () {
      document.getElementsByTagName('body').click()
    }
    document
      .getElementById('player')
      .play()
      .catch((error) => {
        console.log(error)
        document.addEventListener(
          'click',
          () => {
            document.getElementById('player').play()
          },
          { once: true }
        )
      })
  }

  function error(msg) {
    if (msg.code == 1) {
      //PERMISSION_DENIED
      console.log()
    } else if (msg.code == 2) {
      //POSITION_UNAVAILABLE
      console.log()
    } else {
      console.log('timeout')
    } //TIMEOUT
  }

  useEffect(() => {
    playAudio()
    getLocation()
  }, [])
  const playAudio = () => {
    // $(document).ready(function(){
    //   $(".myLink").click();
    // });
  }
  const onStoryClick = () => {}
  return (
    <>
      <audio id="player" autoPlay={true} controls style={{ display: 'none' }}>
        <source src="/static/music1.mp3" type="audio/mp3" />
      </audio>
      <div className="relative ">
        {/* <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
        <div className=" z-30 flex h-screen flex-col justify-between">
          <header className="flex items-center justify-between rounded-b-lg bg-white py-6 px-4">
            <div>
              <Link href="/" aria-label={siteMetadata.headerTitle}>
                <div className="flex items-center justify-between">
                  <div className="mr-3">
                    <Logo />
                  </div>
                  {typeof siteMetadata.headerTitle === 'string' ? (
                    <div className="hidden h-6 text-2xl font-semibold sm:block">
                      {siteMetadata.headerTitle}
                    </div>
                  ) : (
                    siteMetadata.headerTitle
                  )}
                </div>
              </Link>
            </div>
            <div className="flex items-center text-base leading-5">
              <div className="hidden sm:block">
                {headerNavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              {/* <ThemeSwitch /> */}
        {/* <MobileNav />
            </div>
          </header>
        </div>
      </div> */}{' '}
        <>
          <div className="flex justify-between pt-8">
            <div className="button-shadow relative z-50 ml-14 max-w-sm rounded-lg border border-gray-200 bg-white p-2 shadow-md dark:border-gray-700 dark:bg-gray-800">
              <HomeIcon />
            </div>
            <StorySidebar onStoryClick={onStoryClick} stories={audio.audios} />
          </div>
          <div className="flex  justify-center">
            <div className="m-auto">
              <div
                className="relative z-10 w-full  text-center text-7xl font-bold  text-white"
                style={{ lineHeight: 100.56 + 'px' }}
              >
                {' '}
                All In One
                <br />
                <span className="text-[#EB8003]"> India</span>{' '}
              </div>
              <div className="flex justify-center">
                <Link
                  href="/map-tour"
                  type="button"
                  className="ease button-shadow focus:shadow-outline relative z-10 m-2 select-none rounded-full border   bg-white px-4  py-2 font-bold text-[#222222] shadow-md transition duration-500 hover:bg-[#EB8003] hover:text-white focus:outline-none"
                >
                  Ready to explore
                </Link>
              </div>
            </div>
          </div>
          <main
            style={{ height: '100vh', width: '100%' }}
            className={'absolute bottom-0 left-0 right-0 top-0 z-0 bg-transparent'}
          >
            <GoogleMapReact
              bootstrapURLKeys={{ key: process.env.NEXT_MAP_API_KEY, mapIds: [process.env.NEXT_MAP_ID] }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
              ref={mapRef}
              options={{
                styles: styles,
                disableDefaultUI: false,
                mapTypeControl: false,
                streetViewControl: true,
                draggable: false,
                mapId: process.env.NEXT_MAP_ID
              }}
            >
              <MarkerStatic show={true} />
            </GoogleMapReact>
          </main>
        </>
      </div>
    </>
  )
}
