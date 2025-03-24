"use client"

import { useState, useEffect } from "react"

export function useAudio(url: string, volume = 0.5) {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const audioElement = new Audio(url)
      audioElement.volume = volume
      audioElement.loop = true
      setAudio(audioElement)

      return () => {
        audioElement.pause()
        audioElement.currentTime = 0
      }
    }
  }, [url, volume])

  const toggleAudio = () => {
    if (!audio) return

    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play().catch(() => {
        // Autoplay was prevented
      })
      setIsPlaying(true)
    }
  }

  return { toggleAudio, isPlaying }
}

