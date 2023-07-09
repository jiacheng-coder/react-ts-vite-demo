import { useEffect, useState } from "react"
import Demo from './components/hooks-useInput'
import ImmerjsDemo from "./components/immerjs-demo"
const useMouse = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({
        x: e.pageX,
        y: e.pageY
      })
    }
    document.addEventListener('mousemove', handleMouseMove)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])
  return position
}

function App() {
  return <div>
    <h1>Demo</h1>
    <Demo />
    <ImmerjsDemo />
  </div>
}

export default App
