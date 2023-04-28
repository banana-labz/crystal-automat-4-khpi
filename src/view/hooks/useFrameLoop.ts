import { useState, useEffect, useCallback } from "react"

export const useFrameLoop = (callback: () => void, frameDuration: number, dependencies: unknown[]) => {
    const [pause, setPause] = useState<boolean>(false)

    const switchPause = useCallback(() => {
        setPause(pause => !pause)
    }, [])

    useEffect(() => {
        if (pause) {
            return
        }

        setTimeout(callback, frameDuration)
    }, [dependencies, pause])

    return {
        pause,
        switchPause,
    }
}
