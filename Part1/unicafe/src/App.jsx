import { useState } from "react";

function StatisticLine(props) {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
}

function Statistics(props) {
  return (
    <table>
      <tbody>
        <StatisticLine text="good" value={props.good} />
        <StatisticLine text="neutral" value={props.neutral} />
        <StatisticLine text="bad" value={props.bad} />
        <StatisticLine text="all" value={props.total} />
        <StatisticLine text="average" value={props.average} />
        <StatisticLine text="positive" value={props.positive} />
      </tbody>
    </table>
  );
}

function Button(props) {
  return <button onClick={props.handleClick}>{props.text}</button>;
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
      <Button handleClick={handleGoodButton} text="good" />
      <Button handleClick={handleNeutralButton} text="neutral" />
      <Button handleClick={handleBadButton} text="bad" />
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
