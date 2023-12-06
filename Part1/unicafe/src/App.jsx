import { useState } from "react";

function Statistics(props) {
  return (
    <div>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.total}</p>
      <p>average {props.average}</p>
      <p>positive {props.positive}%</p>
    </div>
  );
}

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  function handleGoodButton() {
    setGood(good + 1);
  }

  function handleNeutralButton() {
    setNeutral(neutral + 1);
  }

  function handleBadButton() {
    setBad(bad + 1);
  }

  function calculateTotalFeedback() {
    return good + neutral + bad;
  }

  function calculateAverageFeedback() {
    return (good - bad) / calculateTotalFeedback();
  }

  function calculatePositiveFeedback() {
    return (good / calculateTotalFeedback()) * 100;
  }

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodButton}>good</button>
      <button onClick={handleNeutralButton}>neutral</button>
      <button onClick={handleBadButton}>bad</button>
      <h1>statistics</h1>
      {good || neutral || bad ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={calculateTotalFeedback()}
          average={calculateAverageFeedback()}
          positive={calculatePositiveFeedback()}
        />
      ) : (
        <p>No feedback given</p>
      )}
    </div>
  );
}
