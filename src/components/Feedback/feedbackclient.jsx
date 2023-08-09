import css from './feedbackclient.module.css';
export const Statistics = ({ onCountPositive, good, bad, neutral, total, title }) => {
  return (
    <section>
      <h2>{title}</h2>
      <ul>
        <li className={css.statistics}>
          <p className={css.info_statistics}>Good:</p>
          <span className="info">{good}</span>
        </li>
        <li className={css.statistics}>
          <p className={css.info_statistics}>Neutral:</p>
          <span className="info">{neutral}</span>
        </li>
        <li className={css.statistics}>
          <p className={css.info_statistics}>Bad:</p>
          <span className="info">{bad}</span>
        </li>
        <li className={css.statistics}>
          <p className={css.info_statistics}>Total:</p>
          <span className="info">{total}</span>
        </li>
        <li className={css.statistics}>
          <p className={css.info_statistics}>Positive Feedback:</p>
          <span className="info">{onCountPositive()}%</span>
        </li>
      </ul>
    </section>
  );
};
