import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faPlay, faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons'
import useMusicPlayer from './hooks/useAudioPlayer'

function PlayerControls() {
  const music = useMusicPlayer()
  return (
    <>
      <div className="fixed bottom-0 right-0 left-0  mx-auto  flex overflow-hidden ">
        <div className="flex w-full w-full flex-col rounded-lg bg-[#2B2381]  shadow-md ">
          <div className=" flex flex-col items-center p-5 sm:flex-row">
            <div className="flex items-center">
              <div className="flex space-x-3 p-2">
                <button
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white pl-0.5 ring-1 ring-white focus:outline-none"
                  onClick={music.togglePlay}
                >
                  {music.isPlaying ? (
                    <FontAwesomeIcon icon={faPause} color={'#2B2381'} />
                  ) : (
                    <FontAwesomeIcon icon={faPlay} color={'#2B2381'} />
                  )}
                </button>
              </div>
            </div>
            {/* <div className="relative ml-2 w-full sm:w-1/2 md:w-7/12 lg:w-4/6">
              <div className="h-2 w-full rounded-lg bg-red-300"></div>
              <div className="absolute top-0 h-2 w-1/2 rounded-lg bg-red-500"></div>
            </div> */}
            {/* <div className="flex w-full justify-end pt-1 sm:w-auto sm:pt-0">
              <span className="pl-2 text-xs font-medium uppercase text-gray-700">02:00/04:00</span>
            </div> */}
            <div>
              <button class="rounded-full bg-white  p-2 font-normal">Listen Next Story </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PlayerControls
