"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { SpotlightProps } from "@/types/type"

export const Spotlight = ({
  className,
  children,
  spotlightColor
}: SpotlightProps) => {
  const divRef = React.useRef<HTMLDivElement>(null)
  const [isFocused, setIsFocused] = React.useState(false)
  const [position, setPosition] = React.useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = React.useState(100)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return

    const div = divRef.current
    const rect = div.getBoundingClientRect()

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  const handleFocus = () => {
    setIsFocused(true)
    setOpacity(1)
  }

  const handleBlur = () => {
    setIsFocused(false)
    setOpacity(0)
  }

  const handleMouseEnter = () => {
    setOpacity(1)
  }

  const handleMouseLeave = () => {
    setOpacity(100)
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "bg-background relative size-full overflow-hidden rounded-xl",
        className
      )}
    >
      {children}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`
        }}
      />
    </div>
  )
}
