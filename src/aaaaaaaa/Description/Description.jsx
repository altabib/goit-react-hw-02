import css from "./Description.module.css"

const Description = () => {

    return (
        <div className={css.descriptionStyle}>

        <h1 className={css.descriptionHeading}>Sip Happens Café</h1>

        <p className={css.descriptionParagraph}>Please leave your feedback about our service by selecting one of the options below.</p>

        </div>
    );
};

export default Description;