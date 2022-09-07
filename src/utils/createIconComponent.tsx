import React, { HTMLAttributes, SVGAttributes } from "react"

interface IconProps extends HTMLAttributes<SVGElement> {
  color?: string
  height?: number
  width?: number
}

export const createIconComponent = (
  path: string,
  defaultWidth: number,
  defaultHeight: number,
  defaultColor: string,
  fillRule?: SVGAttributes<SVGPathElement>["fillRule"],
  clipRule?: SVGAttributes<SVGPathElement>["clipRule"],
) => ({
  width = defaultWidth,
  height = defaultHeight,
  color = defaultColor,
  ...other
}: IconProps) => (
  <svg width={width} height={height} viewBox={`0 0 ${defaultWidth} ${defaultHeight}`} {...other}>
    <path fillRule={fillRule} clipRule={clipRule} d={path} fill={color} />
  </svg>
)