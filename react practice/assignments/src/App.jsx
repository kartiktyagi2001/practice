import { useMemo, useState } from 'react'


// assignment 1 -> useMemo

function Assignment1() {
  const [input, setInput] = useState(0);

  const fact = useMemo(()=>{
    let value = 1;
    for(let i = 1; i<= input; i++) {
      value = value*i;
    }
    return value;
  }, [input]);

  

  return (
    <div>
      <input
        type="number" 
        onChange={(e) => setInput(e.target.value)}
      />

      <p>Factorial : {fact}</p>
    </div>
  )


}

// export default Assignment1

//assignment2 -> useMemo

const words = ["hi!", "name", "is", "kartik"];
const sentences = [];
const lines = 1000;

for(let i = 0; i< lines; i++) {
  let sentence = "";
  for(let j = 0; j< words.length; j++) {
    sentence += (words[Math.floor(words.length * Math.random())]);
    sentence += " ";
  }
  sentences.push(sentence);
}

function Assignment2(){
  
}

export default Assignment2