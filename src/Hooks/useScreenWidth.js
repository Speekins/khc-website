import { useEffect, useState } from 'react'

const useScreenWidth = () => {

  const [screenWidth, setScreenWidth] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 0
  })


  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleWidthChange = () => {
        setScreenWidth({
          width: typeof window !== 'undefined' ? window.innerWidth : 0
        })
      }

      window.addEventListener('resize', handleWidthChange)

      return () => {
        window.removeEventListener('resize', handleWidthChange)
      }
    }
    return null
  }, [])

  return screenWidth.width > 650
}

export default useScreenWidth