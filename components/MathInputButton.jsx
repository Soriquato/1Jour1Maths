import style from '../styles/MathInputButton.module.css';

export default function MathInputButton({symbol, onClick}){
    return (
        <button className={style.buttonContainer} onClick={onClick}>
            <div className={style.buttonContent}>
                {symbol}
            </div>
        </button>
    )
}