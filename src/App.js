import logo from './logo.svg';
import './App.css';
import Dino from './Dino'



function App(props) {
  return (
    <div className="App">
      <header>
        <h1>{props.post.title}</h1>
        <p>by {props.post.author}</p>
        <p>{props.post.body}</p>
        <h2>Comments</h2>
        <p>{props.post.comments[2]}</p>
      </header>
    </div>
  );
}

export default App;
