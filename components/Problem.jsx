import MathText from "./MathText";
import style from "../styles/Problem.module.css"

export default function Problem(){
    let textProblem = "`sum_(i=1)^n i^3=((n(n+1))/2)^2`"
    return (
        <div className={style.problemWrapper}>
            <MathText>{textProblem}</MathText>
        </div>
    )
}