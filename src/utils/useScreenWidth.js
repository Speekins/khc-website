import { useEffect, useState } from 'react'

const useScreenWidth = () => {
  const [screenWidth, setScreenWidth] = useState({
    width: window.innerWidth
  })

  useEffect(() => {
    const handleWidthChange = () => {
      setScreenWidth({
        width: window.innerWidth
      })
    }

    window.addEventListener('resize', handleWidthChange)

    return () => {
      window.removeEventListener('resize', handleWidthChange)
    }
  }, [])

  return screenWidth
}

export default useScreenWidth