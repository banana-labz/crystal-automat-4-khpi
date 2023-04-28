import React, { HTMLAttributes } from "react"

interface IconProps extends HTMLAttributes<SVGElement> {
    color?: string
    height?: number
    width?: number
}

const DEFAULT_SIZE = 24
const DEFAULT_COLOR = "black"

export const PauseIcon = ({ width = DEFAULT_SIZE, height = DEFAULT_SIZE, color = DEFAULT_COLOR, ...other }: IconProps) => (
    <svg width={width} height={height} viewBox={`0 0 ${DEFAULT_SIZE} ${DEFAULT_SIZE}`} {...other}>
        <path
            d="M9 16h2V8H9v8zm3-14C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm1-4h2V8h-2v8z"
            fill={color}
        />
    </svg>
)