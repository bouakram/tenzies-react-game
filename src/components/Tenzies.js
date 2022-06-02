import React , {useState} from 'react'
import './tenzies.css'
export default function Tenzies() {
    const [dice , setDice] = useState(newDice())

    function newDice(){
      const DiceArr = []
      for (let i = 0; i < 10; i++) {
        DiceArr.push(Math.floor(Math.random() * 6) + 1)
      }
      return DiceArr
    }
    
    function roll(){
        setDice(newDice())
    }

    let diceNumber = dice.map(dice => <p>{dice}</p>)
  return (
    <div className='flex'>
        <div>
        <h1>Tenzies</h1>
        </div>
        <div>
        <p>Roll until all dice are the same, Click each die to freez it at its current value between rolls.</p>
        </div>
        <main>
            {diceNumber}
        </main>
        <button onClick={roll}>Roll</button>
    </div>
  )
}
