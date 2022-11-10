import { MathJaxContext, MathJax } from "better-react-mathjax";

export default function MathText({children}){
    const config = {
        loader: { load: ["input/asciimath"] }
    };
    return (
        <MathJaxContext config={config}>
            <MathJax>{children}</MathJax>
        </MathJaxContext>
    )
}