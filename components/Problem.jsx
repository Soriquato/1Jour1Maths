import MathText from "./MathText";

export default function Problem(){
    let textProblem = "`sum_(i=1)^n i^3=((n(n+1))/2)^2`"
    return (
        <div>
            <MathText>{textProblem}</MathText>
        </div>
    )
}