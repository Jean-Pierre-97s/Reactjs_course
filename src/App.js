import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      post: [
        {
          id: 1,
          title: 'Titulo 1',
          body: 'Corpo 1'
        },
        {
          id: 2,
          title: 'Titulo 2',
          body: 'Corpo 2'
        },
        {
          id: 3,
          title: 'Titulo 3',
          body: 'Corpo 3'
        },
      ]
    }
  }

  render() {
    const {post} = this.state
    return (
      <div className="App">
        {post.map(post => (
          <div key = {post.id}>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
