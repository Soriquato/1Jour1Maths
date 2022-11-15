import { MathJax, MathJaxContext } from "better-react-mathjax";
import MathText from "./MathText";
import MathInputButton from "./MathInputButton";
import style from "../styles/MathTextInput.module.css";
import { createElement } from "react";

function onClickDivision(){
    let textBox = document.getElementById("textBox")
    let text = textBox.innerText
    text += "`(1/x)`"
    textBox.innerText = text
    onChangeDivision()
}

function onChangeDivision(){
    let textBox = document.getElementById("textBox")
    let text = textBox.innerText
    let textBoxMaths = document.getElementById("mathJaxTextBox")
    textBoxMaths.innerHTML = <MathText>{text}</MathText>
}

export default function MathTextInput(){
    return (
        <div>
            <form name="form1">
                <div id={"textBox"}role={"textbox"} contentEditable="true" className ={style.textBox} name="area1" onInput={onChangeDivision}></div>
                <div className={style.textBoxMaths} id="mathJaxTextBox"></div>
            </form>
            <MathInputButton symbol={"2/6"} onClick={onClickDivision}></MathInputButton>
        </div>
    )
}