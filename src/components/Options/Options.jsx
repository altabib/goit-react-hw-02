import css from "./Options.module.css"


const Options = ({updateFeedback, resetFeedback, totalFeedback }) => { 
    
    return (
        <div className={css.optionsButton}>
            
            <button onClick={() => updateFeedback("good")} type="button" className={css.btnLi}>Good</button>

            <button onClick={() => updateFeedback("neutral")} type="button" className={css.btnLi}>Neutral</button>

            <button onClick={() => updateFeedback("bad")} type="button" className={css.btnLi}>Bad</button>

            {totalFeedback > 0 ? <button onClick={() => resetFeedback()} type="button" className={css.btnLi}>Reset</button> : ""}

        </div>
    );
    
};

export default Options;
