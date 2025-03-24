"use client"

import { useEffect, useState } from "react"

export function useSoundEffect() {
  const [clickSound, setClickSound] = useState<HTMLAudioElement | null>(null)
  const [hoverSound, setHoverSound] = useState<HTMLAudioElement | null>(null)
  const [successSound, setSuccessSound] = useState<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const click = new Audio("/sounds/click.mp3")
      const hover = new Audio("/sounds/hover.mp3")
      const success = new Audio("/sounds/success.mp3")

      click.volume = 0.2
      hover.volume = 0.1
      success.volume = 0.3

      setClickSound(click)
      setHoverSound(hover)
      setSuccessSound(success)
    }

    return () => {
      if (clickSound) {
        clickSound.pause()
        clickSound.currentTime = 0
      }

      if (hoverSound) {
        hoverSound.pause()
        hoverSound.currentTime = 0
      }

      if (successSound) {
        successSound.pause()
        successSound.currentTime = 0
      }
    }
  }, [])

  const playClickSound = () => {
    if (clickSound) {
      clickSound.currentTime = 0
      clickSound.play().catch(() => {
        // Autoplay was prevented
      })
    }
  }

  const playHoverSound = () => {
    if (hoverSound) {
      hoverSound.currentTime = 0
      hoverSound.play().catch(() => {
        // Autoplay was prevented
      })
    }
  }

  const playSuccessSound = () => {
    if (successSound) {
      successSound.currentTime = 0
      successSound.play().catch(() => {
        // Autoplay was prevented
      })
    }
  }

  return { playClickSound, playHoverSound, playSuccessSound }
}

