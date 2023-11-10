import { useState } from 'react';

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (evt) => setToDo(evt.target.value);
  const onSubmit = (evt) => {
    evt.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos((current) => [toDo, ...current]);
    setToDo("");
  };
  console.log('my arr', toDos);
  return (
    <div>
      <h1>My To Dos ({ toDos.length })</h1>
      <form onSubmit={ onSubmit }>
        <input
          type="text"
          value={ toDo }
          placeholder="Write your to do..."
          onChange={ onChange }
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        { toDos.map((todo, index) => {
          <li key={index}>{ todo }</li>
        }) }
      </ul>
    </div>
  )
}
export default App;