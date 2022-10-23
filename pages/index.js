import { useEffect, useState } from "react"

export default function Home() {
  const [text, setText] = useState("")
  useEffect(() => setText("When `a != 0`, there are two solutions to `ax^2 + bx + c = 0` and they are `x = (-b +- sqrt(b^2-4ac))/(2a) .`", []))
  return (
      <div>
        <script type="text/javascript" src='../utils/test.js'></script>
        <script type="text/javascript" src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
        <script async type="text/javascript" id="MathJax-script" src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/startup.js">
        </script>
        <p>{text}</p>
      </div>
  )
}