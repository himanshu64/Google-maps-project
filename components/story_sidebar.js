import { useState } from 'react'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'
import MusicIcon from '../data/music.svg'
import Image from 'next/image'

const StorySidebar = (props) => {
  const [navShow, setNavShow] = useState(false)
  const { stories, onStoryClick } = props

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  return (
    <div>
      <button
        onClick={onToggleNav}
        aria-label="Toggle Menu"
        className="button-shadow relative z-40 mr-14  max-w-sm rounded-lg border border-gray-200 bg-white p-2 shadow-md dark:border-white dark:bg-white"
      >
        <MusicIcon />
      </button>
      {/* <button
        type="button"
        className="ml-1 mr-1 h-8 w-8 rounded py-1"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="text-gray-900 dark:text-gray-100"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button> */}
      <div
        className={`fixed top-0 right-0 z-10 h-full w-1/4 transform  snap-y  opacity-95 duration-300 ease-in-out bg-white ${
          navShow ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="info-scroll fixed mt-8 h-full w-full p-2 pb-6 ">
          {stories.map((story) => (
            // <div key={link.title} className="px-12 py-4">
            //   <Link
            //     href={link.href}
            //     className="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
            //     onClick={onToggleNav}
            //   >
            //     {link.title}
            //   </Link>
            // </div>
            // <div class="flex ">
            //   <div class="w-1/2  ">
            //     <Image src={story.image_url} height={"100%"} width={"100%"} />
            //   </div>
            //   <div class="w-1/2 ... ">w-1/2</div>
            // </div>
            <Link href="/map-tour" key={story.id}>
              <div className="info-window-slider pb-6">
                {' '}
                <img src={story.image_url} className="h-[100] w-full rounded-md" alt="" />
                <div className="pt-2 text-xl font-bold text-black dark:text-black">{story.title}</div>
                <div className="pt-2 text-xs font-normal text-black dark:text-black">{story.summary}</div>
                <button className="mt-4 rounded-full bg-[#E1F1FF] p-2 font-normal">
                  {Math.floor(story.duration_in_secs / 60)} min
                </button>
              </div>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  )
}

export default StorySidebar
