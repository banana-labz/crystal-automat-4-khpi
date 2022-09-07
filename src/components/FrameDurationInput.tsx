import React, { useCallback } from "react"

interface FrameDurationInputProps {
  frameDuration: number | null
  setFrameDuration: (frameDuration: number | null) => void
}

export const FrameDurationInput = ({ frameDuration, setFrameDuration }: FrameDurationInputProps) => {
  const handleChangeFrameDuration = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.match(/\d+/)
    if (!inputValue) {
      setFrameDuration(null)
      return
    }

    setFrameDuration(+inputValue)
  }, [])


  return (
    <input
      className="FrameDurationInput"
      title="Frame duration input"
      placeholder="frame duration"
      value={frameDuration || ""}
      onChange={handleChangeFrameDuration}  
    />
  )
}