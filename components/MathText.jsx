export default function MathText({children}){
    return (
        <MathJaxContext>
            <MathJax>{children}</MathJax>
        </MathJaxContext>
    )
}