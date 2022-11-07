import { useState } from "react";
import Script from "next/script";
import { MathJaxContext, MathJax } from "better-react-mathjax";

export default function Problem(){
    const config = {
        loader: { load: ["input/asciimath"] }
    };
    let textProblem = "`sum_(i=1)^n i^3=((n(n+1))/2)^2`"
    return (
        <div>
            <MathJaxContext config={config}>
                <h2>Basic MathJax example with AsciiMath</h2>
                <MathJax>{"When `a != 0`, there are two solutions to `ax^2 + bx + c = 0` and they are `x = (-b +- sqrt(b^2-4ac))/(2a) .`"}</MathJax>
                <MathJax>{textProblem}</MathJax>
            </MathJaxContext>
        </div>
    )
}