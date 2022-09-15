import { useState, useEffect, useCallback } from "react"

const DEFAULT_FRAME_DURATION = 100000

export const useFrameLoop = (
  callback: () => void,
  frameDuration = DEFAULT_FRAME_DURATION,
) => {
  const [pause, setPause] = useState<boolean>(false)
  const [iteration, setIteration] = useState<number>(0)

  const switchPause = useCallback(() => {
    setPause(pause => !pause)
  }, [])

  const incrementIteration = useCallback(() => {
    setIteration(i => i + 1)
  }, [])

  useEffect(() => {
    if (pause) {
      return
    }

    setTimeout(() => {
      incrementIteration()
      callback()
    }, frameDuration)    
  }, [iteration, pause])

  return {
    pause: { pause, switchPause },
    iteration: { iteration, setIteration }
  }
}
