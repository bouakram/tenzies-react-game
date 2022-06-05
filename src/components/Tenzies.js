import React , {useEffect, useState} from 'react'
import './tenzies.css'
import {nanoid} from "nanoid"
import Confetti from 'react-confetti'

export default function Tenzies() {
    const [dice , setDice] = useState(newDice())
    const [tenzies , setTenzies] = useState(false)

    useEffect(()=>{
      const isallHold = dice.every(die => die.ishold)
      const firstVal = dice[0].value
      const allSameVal = dice.every(die => die.value === firstVal)

      if(isallHold && allSameVal){
        setTenzies(true)
      }else{setTenzies(false)}
    },[dice])

    function newDice(){
      const DiceArr = []
      for (let i = 0; i < 10; i++) {
        DiceArr.push({ 
          value : Math.floor(Math.random() * 6) + 1 ,
          ishold : false,
          id : nanoid()
        })
      }
      return DiceArr
    }
    
    function roll(){
        setDice(tenzies? newDice() : prevdices => prevdices.map( dice => {
          return dice.ishold ? dice : {
            value : Math.floor(Math.random() * 6) + 1 ,
            ishold : false,
            id : nanoid()
          }
        }) )
    }

    function holdDice(id){
      console.log(id)
      setDice(prevDice => prevDice.map(dice => {
        return dice.id === id ? {...dice, ishold : !dice.ishold} : dice  
      }))
    }

    let diceNumber = dice.map(dice => 
    <p 
    key={dice.id} 
    style = {dice.ishold ? {background : "green"}:{background : "white"}} onClick = {()=> holdDice(dice.id)} >

    {dice.value} 

    </p>)
  return (
    <div className='flex'>
      {tenzies && <Confetti/>}
        <div>
        <h1>Tenzies</h1>
        </div>
        <div>
        <p>{tenzies ?'You Won !' : 'Roll until all dice are the same, Click each die to freez it at its current value between rolls.'}</p>
        </div>
        <main>
            {diceNumber}
        </main>
        <button onClick={roll}>{tenzies?"New Game":"Roll"}</button>
    </div>
  )
}
