'use client'

import { useState, useEffect } from 'react'
import TypeWriterEffectProps from '../utils/types/TypeWriterEffectProps';

// Custom component for allowing the Typewriter effect
export function TypewriterEffect({
  text,
  className = '',
  speed = 100,
  delay = 0
}: TypeWriterEffectProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    // Initial delay before starting
    const startTimeout = setTimeout(() => {
      setHasStarted(true)
    }, delay)

    return () => clearTimeout(startTimeout)
  }, [delay])

  useEffect(() => {
    if (!hasStarted) return

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed, hasStarted])

  return (
    <span className={className}>
      {displayedText}<span className="animate-pulse">|</span>
    </span>
  )
}
