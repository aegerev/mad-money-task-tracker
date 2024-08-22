import {useState} from 'react'
import {TodoForm} from './components/form.js'
import './App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      text: "Talk about Google's 20th IPO Anniversary",
      isCompleted: false,
    },

    {
      text: 'Talk To PaloAlto CEO Nikesh Arora',
      date: '06:16:38 PM',
      isCompleted: false,
    },
    {
      text: 'Reveal the Name Of the 700% Returner',
      date: '06:27:38 PM',
      isCompleted: false,
    },
    {
      text: 'Talk To Cardinal Health CEO Jason Hollar',
      date: '06:37:38 PM',
      isCompleted: false,
    },

    {
      text: 'Lightning Round',
      date: '06:45:38 PM',
      isCompleted: false,
    },

    {
        text: 'Talk About What Stocks To Watch',
        date: '06:53:38 PM',
        isCompleted: false,
      },

  ]);

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted: false}];
    setTodos(newTodos);
  }

  const removeTodo = e => {
    const index = Number(e.target.id);
    let temp = [...todos]
    temp.splice(index, 1);
    setTodos(temp);
  }
  return (
    <div className="App">
      <h1> MAD Rundown </h1>
        {todos.map((todo, i) => <div className="todo" key = {i} id={i} onClick={removeTodo}> {todo.text} </div>)}
       <TodoForm addTodo={addTodo}></TodoForm>
    </div>
  );
}

export default App;
