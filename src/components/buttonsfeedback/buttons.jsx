import css from './buttons.module.css';

export const FeedbackOptions = ({ onTotalFeedback, handleClick, title }) => {
  return (
    <section>
      <h1>{title}</h1>
      <div className={css.section_buttons} onClick={onTotalFeedback}>
        <button
          className={css.button}
          type="button"
          onClick={() => handleClick('good')}
        >
          Good
        </button>
        <button
          className={css.button_neutral}
          type="button"
          onClick={() => handleClick('neutral')}
        >
          Neutral
        </button>
        <button
          className={css.button_bad}
          type="button"
          onClick={() => handleClick('bad')}
        >
          Bad
        </button>
      </div>
    </section>
  );
};
