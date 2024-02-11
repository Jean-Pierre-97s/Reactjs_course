import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      counter: 0,
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

  timeoutUpdate = null

  componentDidMount() {
    this.handleTimeout()
  }

  componentDidUpdate() {
    this.handleTimeout()
  }
  componentWillUnmount(){
    clearTimeout(this.timeoutUpdate)
  }
  handleTimeout = () => {
    const {post, counter} = this.state
    post[0].title = 'O titulo mudou'
    
    this.timeoutUpdate = setTimeout(()=> {
      this.setState({ post, counter: counter + 1 })
    }, 1000)
    console.log('oi')
  }

  render() {
    const {post, counter} = this.state
    return (
      <div className="App">
        <h1>{counter}</h1>
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
