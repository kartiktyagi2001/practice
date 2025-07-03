import { memo, useState, useMemo, useCallback } from 'react'
import axios from 'axios'
import './App.css'

// function App() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     axios.get("https://dummyjson.com/todos")
//       .then((response)=> {
//         setTodos(response.data.todos);
//       })
//   }, []);

//   return (
//    <>
//      {todos.map(todo => <Todo title ={todo.title} description = {todo.description}></Todo>)} 
//    </>
//   )

//   function Todo({title, description}){
//     return <>
//       <h1>{title}</h1>
//       <h3>{description}</h3>
//     </>
//   }
// }

// export default App


// function App() {

//   const [counter, setCounter] = useState(0);
//   const[input, setInput] = useState(1);

//   const count = useMemo(()=> {
//     let count = 0;
//     for (let i=1; i<=Number(input); i++) {
//       count = count + i;
//     }
//     return count;
//   }, [input])

//   return <div>

//     <input onChange={(e)=> {
//       setInput(e.target.value);
//     }}  />

//     <br />

//     Sum from 1 to {input} is : {count};

//     <br />

//     <button onClick={()=>{
//       setCounter(counter+1)
//     }}>Counter : {counter}</button>

//   </div>
// }

// export default App

// function App() {
//   const [count, setCount] = useState(0);

//   //this remembers the original implementation until props change(second argument has props) so we donot keep redefining the function
//   const onclick = useCallback(()=>{
//     console.log("child clicked!")
//   }, []);

//   return <div>
//     <Child oncClick={onclick}></Child>
//     <button onClick={()=>{
//       setCount(count+1);
//     }}>count : {count}</button>
//   </div>
// }

// const Child = memo(({onclick}) => {
//   console.log("Child renders!")

//   return <div>
//     <button onClick={onclick}>Button</button>
//   </div>
// })

// export default App


