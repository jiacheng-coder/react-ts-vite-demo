import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export default function HooksDemo() {
  const [x, setX] = useState(0)
  const y = useMemo(() => 2 * x + 1, [x])
  const changeX = useCallback(() => setX(x + 1), [x])

  const renderCountRef = useRef(1)
  const isOdd = renderCountRef.current % 2 !== 0

  useEffect(() => {
    document.title = String(x)
    renderCountRef.current++
  }, [x])
  return <ul onClick={changeX}>
    <li>x:{x}</li>
    {isOdd ? <li>y:{y}</li> : null}
  </ul>
}
