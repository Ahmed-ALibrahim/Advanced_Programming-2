import { useState } from 'react'

const Display = ({ counter }) => <h2>القيمة: {counter}</h2>
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>

const CounterApp = () => {
  const [counter, setCounter] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <h1>تطبيق العداد</h1>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="زيادة +1" />
      <Button onClick={decreaseByOne} text="نقصان -1" />
      <Button onClick={setToZero} text="تصفير" />
    </div>
  )
}

export default CounterApp