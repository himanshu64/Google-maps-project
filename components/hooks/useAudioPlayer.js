import { useContext } from 'react'
import { MusicContext } from '../contexts/music_context'

const useMusicPlayer = () => {
  const [state, setState] = useContext(MusicContext)

  function playTrack() {
    state.audioPlayer.pause()
    state.audioPlayer = new Audio(state.track.file)
    state.audioPlayer.play()
    setState({ ...state, isPlaying: true })
    // if (index === state.currentTrackIndex) {
    //   togglePlay()
    // } else {
    //   state.audioPlayer.pause()
    //   state.audioPlayer = new Audio(state.track.file)
    //   state.audioPlayer.play()
    //   setState({ ...state, currentTrackIndex: index, isPlaying: true })
    // }
  }

  function togglePlay() {
    if (state.isPlaying) {
      state.audioPlayer.pause()
    } else {
      playTrack()
    }
    setState({ ...state, isPlaying: !state.isPlaying })
  }

  return {
    playTrack,
    togglePlay,
    currentTrackName: state.track.name,
    trackList: state.track,
    isPlaying: state.isPlaying,
  }
}

export default useMusicPlayer
