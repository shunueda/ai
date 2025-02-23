import { useEffect, useState } from 'react'

const breakpoint = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${breakpoint - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }
    mql.addEventListener('change', onChange)
    setIsMobile(window.innerWidth < breakpoint)
    return () => mql.removeEventListener('change', onChange)
  }, [])
  return isMobile
}
