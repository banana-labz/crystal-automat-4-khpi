import { useEffect, useRef } from "react"

import { theme } from "view/themes"

export const useCanvas = (callback: (context: CanvasRenderingContext2D) => void, deps: unknown[]) => {  
    const ref = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = ref.current
        if (!canvas) {
            return
        }

        const context = canvas.getContext("2d")
        if (!context) {
            return
        }

        context.fillStyle = theme.colors.canvasBackground
        context.fillRect(0, 0, canvas.width, canvas.height)

        callback(context)
    }, deps)

    return ref
}