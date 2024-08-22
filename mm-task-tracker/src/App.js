import {useState} from 'react'
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

  const [value, setValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if(!value) {
      return;
    }

    const newTodos = [...todos, {text: value, isCompleted: false}];
    setTodos(newTodos);
    setValue('');
  }

  return (
    <div className="App">
      <h1> MAD Rundown </h1>
        {todos.map((todo, i) => <div className="todo" key = {i}> {todo.text} </div>)}
        <form onSubmit={handleSubmit}>
          <input type="text" 
          className="input"
           value={value} 
           placeholder="Add Task" 
           onChange={e => setValue(e.target.value)}
          />
        </form>
    </div>
  );
}

export default App;
