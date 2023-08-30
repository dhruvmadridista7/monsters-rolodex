import { Component } from 'react';

import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters : [],
      searchFeild : '',
    };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(
      () => {
        return { monsters : users };
      },
      () => {
        console.log(this.state);
      }
    ))
  }

  render() {
    console.log('render');

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchFeild);
    })

    return (
      <div className="App">
        <input 
          className='search-box'
          type='search'
          placeholder='search monster'
          onChange={(event) => {
            // console.log(event.target.value);
            // console.log({ startingArray : this.state.monsters });
            const searchFeild = event.target.value.toLowerCase();
            // const filteredMonsters = this.state.monsters.filter((monster) => {
            //   return monster.name.toLowerCase().includes(searchString);
            // })

            this.setState(() => {
              // return { monsters : filteredMonsters };
              return { searchFeild : searchFeild };
            }, 
            // () => {
            //   console.log({ EndingArray : this.state.monsters })
            // }
            )
          }}
        />
        {
          // this.state.monsters.map((monster) => {
          filteredMonsters.map((monster) => {  
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default App;
