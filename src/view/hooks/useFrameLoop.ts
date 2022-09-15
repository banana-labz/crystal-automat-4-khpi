import {
  useState,
  useEffect,
  useCallback,
} from "react"

const DEFAULT_FRAME_DURATION = 100000

export const useFrameLoop = (
  callback: () => void,
  frameDuration = DEFAULT_FRAME_DURATION,
  dependencies: any[],
) => {
  const [pause, setPause] = useState<boolean>(false)

  const switchPause = useCallback(() => {
    setPause(pause => !pause)
  }, [])

  useEffect(() => {
    if (pause) {
      return
    }

    setTimeout(() => {
      callback()
    }, frameDuration)
  }, [dependencies, pause])

  return { pause, switchPause }
}
