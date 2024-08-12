import { useState } from 'react'
import Statistics from './Statistics'
import Button from './Button'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [percentage, setPercentage] = useState(0)
  const [average, setAverage] = useState(0)


  const handleAll = (good, neutral, bad) => {
    console.log(good, neutral, bad)
    setAll(good + bad + neutral)
  }

  const handleAverage = (good, neutral, bad) => {
    setAverage((good + (neutral * 0) + (bad * -1)) / 3)
  }

  const handlePercentage = (good, neutral, bad) => {
    const perc = (good / (good + neutral + bad)) * 100 
    setPercentage(perc)
  }

  const handleGood = () => {
    const newGood = good + 1;
    setGood(newGood);
    handleAll(newGood, neutral, bad);
    handleAverage(newGood, neutral, bad);
    handlePercentage(newGood, neutral, bad);
};

  const handleNeutral = () => {
    const newNeutral = neutral + 1;
    setNeutral(newNeutral);
    handleAll(good, newNeutral, bad);
    handleAverage(good, newNeutral, bad);
    handlePercentage(good, newNeutral, bad);
  };

  const handleBad = () => {
    const newBad = bad + 1;
    setBad(newBad);
    handleAll(good, neutral, newBad);
    handleAverage(good, neutral, newBad);
    handlePercentage(good, neutral, newBad);
  };

  return (
    <div>
      <h2>give feedback</h2>
      <div>
        <Button name="good" onClick = {handleGood} />
        <Button name="neutral" onClick = {handleNeutral}/>
        <Button name="bad" onClick = {handleBad}/>
      </div>
      
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} percentage={percentage}/>
    </div>
  )
}

export default App