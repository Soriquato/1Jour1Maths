import { useState } from "react";
import Script from "next/script";

export default function Problem(){
    const [loaded, setLoaded] = useState(false);
    let textProblem = "When `a != 0`, there are two solutions to `ax^2 + bx + c = 0` and they are `x = (-b +- sqrt(b^2-4ac))/(2a) .`"
    return (
        <div>
            <Script type="text/javascript" src="../utils/test.js"></Script>
            <Script
                onLoad={() => setLoaded(true)}
                async
                type="text/javascript"
                id="MathJax-script"
                src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/startup.js"
            ></Script>
            <p style={{ display: loaded ? "initial" : "none" }}>
                {textProblem}
            </p>
        </div>
    )
}