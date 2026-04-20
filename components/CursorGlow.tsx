'use client'

import { useEffect } from 'react'

export function CursorGlow() {
  useEffect(() => {
    const update = (event: PointerEvent) => {
      document.documentElement.style.setProperty('--cursor-x', `${event.clientX}px`)
      document.documentElement.style.setProperty('--cursor-y', `${event.clientY}px`)
    }

    window.addEventListener('pointermove', update)
    return () => window.removeEventListener('pointermove', update)
  }, [])

  return <div className="cursor-glow" aria-hidden="true" />
}
