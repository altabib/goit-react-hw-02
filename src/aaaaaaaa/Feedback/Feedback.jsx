import css from "./Feedback.module.css"

const Feedback = ({ good, neutral, bad, total }) => {
    return (
        <div>
            <ul className={css.feedbackList}>

                <li>Good: {good}</li>

                <li>Neutral: {neutral}</li>

                <li>Bad: {bad}</li>

                <li>Positive: {Math.round(((good + neutral) / total) * 100)}%</li>

            </ul>

        </div>
    );
};

export default Feedback;