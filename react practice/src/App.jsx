import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App () {

//   const [title, setTitle] = useState("Kartik")  //global state var

//   function update(){
//     setTitle(Math.random());
//   }

//   return (
//       <div>
//         <button onClick={update}>Update title 1</button>
//         <Header title={title}></Header>
//         <Header title="Tyagi"></Header>
//       </div>
//   )
// }

// function Header({title}){
//   return <div>
//     {title}
//   </div>
// }

// export default App

// function App() {

//   // state array with three todos
//   const [todo, setTodo] = useState([
//     {title: "GYM",
//     desciption: "go to gym"},
//     {title: "Study", 
//     desciption: "go to library"},
//     {title: "Project",
//     desciption: "work on project"}
//   ])

//   //function add new todos
//   function addTodo(){
//     setTodo([...todo, {   //spread operator used
//       title: Math.random(),
//       desciption: Math.random()
//     }])

//     //easy way->

//     // const newTodo = [];
//     // for(let i =0; i<todo.length; i++) {
//     //   newTodo.push(todo[i]);
//     // }
//     // setTodo.push({
//     //   title: Math.random(),
//     //   desciption: Math.random()
//     // })

//     // setTodo(newTodo);
//   }

//   return(
//     <div>

//     {/* button to trigger  add Todo*/}

//     <button onClick={addTodo}>Add Todo</button>

//       {/* iteration over state array and rendering the elements */}

//       {todo.map(function(todo) {
//         return <Todo title={todo.title} description={todo.description}></Todo>
//       })}
//     </div>
//   )

//   // component that accepts title and description as input
//   function Todo({title, description}){
//     return <div>
//       <h1>
//         {title}
//       </h1>

//       <h3>
//         {description}
//       </h3>
//     </div>
//   }
// }

// export default App

// component wrappers

// function App() {
//   return <div>
//     <CardWrapper innerComponent = {<TextComponent/>}></CardWrapper>
//     <CardWrapper innerComponent = {<TextComponent/>}></CardWrapper>
//   </div>
// }

// function CardWrapper({innerComponent}) {
//     return <div style={{border: "1px solid black"}}>
//       {innerComponent}
//     </div>
// }

// function TextComponent() {
//   return <div>
//     Hello!
//   </div>
// }

// export default App

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    fetch("https://dummyjson.com/todos")
      .then(async (res)=> {
        const json = await res.json();
        setTodos(json);
      })
  }, [])
  return <div>
    {todos.length}
    {todos.map(todo => <todo title={todo.title} description={todo.description}></todo>)}
  </div>
}

function Todos({title, description}){
  <div>
    <h1>{title}</h1>
    <h3>{description}</h3>
  </div>
}

export default App