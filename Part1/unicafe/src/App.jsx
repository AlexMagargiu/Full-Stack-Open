import { useState } from "react";

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
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {calculateTotalFeedback()}</p>
      <p>average {calculateAverageFeedback()}</p>
      <p>positive {calculatePositiveFeedback()}%</p>
    </div>
  );
}
