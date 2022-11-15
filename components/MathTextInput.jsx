import { MathJax, MathJaxContext } from "better-react-mathjax";
import MathText from "./MathText";
import MathInputButton from "./MathInputButton";
import style from "../styles/MathTextInput.module.css";
import { createElement, useState } from "react";
import Problem from "./Problem";

export default function MathTextInput(){
    let [text, setText] = useState()
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
        setText(text)
    }
    return (
        <div>
            <form name="form1">
                <div id={"textBox"}role={"textbox"} contentEditable="true" className ={style.textBox} name="area1" onInput={onChangeDivision}></div>
                <div className={style.textBoxMaths} id="mathJaxTextBox"><MathText>{text}</MathText></div>
            </form>
            <MathInputButton symbol={"2/6"} onClick={onClickDivision}></MathInputButton>
        </div>
    )
}