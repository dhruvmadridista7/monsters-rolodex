import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [ searchField, setSearchField ] = useState(''); //[value, setValue]
  // console.log(searchField);
  const [title, setTitle] = useState('');
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  // const [stringField, setStringField] = useState('');

  // console.log('render');

  useEffect(() => {
    // console.log('Effect fired');
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonsters(users)); 
  }, [])

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);

    // console.log('effect if firing');
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setSearchField(searchFieldString);
  }

  const onTitleChange = (event) => {
    const searchFieldString = event.target.value.toLowerCase();
    setTitle(searchFieldString);
  }

  // const onStringChange = (event) => {
  //   setStringField(event.target.value);
  // }

  // const filteredMonsters = monsters.filter((monster) => {
  //   return monster.name.toLowerCase().includes(searchField);
  // })

  return (
    <div className="App">
      {/* <h1 className='app-title'>Monster Rolodex</h1> */}
      <h1 className='app-title'>{title}</h1>
      <SearchBox 
          classNmae = 'monster-search-box'
          onChangeHandler = {onSearchChange}
          placeholder = 'search monster'
      />
      <br />
      <SearchBox 
          classNmae = 'titke-search-box'
          onChangeHandler = {onTitleChange}
          placeholder = 'set Title'
      />
      {/* <SearchBox 
          onChangeHandler = {onStringChange}
          placeholder = 'search String'
      /> */}
      <CardList monsters={filteredMonsters}/>
    </div>
  );
}

export default App;


// Using Class Components : =================================

// import { Component } from 'react';

// import CardList from './components/card-list/card-list.component';
// import SearchBox from './components/search-box/search-box.component';
// import './App.css';

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters : [],
//       searchFeild : '',
//     };
//     // console.log('constructor');
//   }

//   componentDidMount() {
//     // console.log('componentDidMount');
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => response.json())
//     .then((users) => this.setState(
//       () => {
//         return { monsters : users };
//       },
//       () => {
//         console.log(this.state);
//       }
//     ))
//   }

//   onSearchChange = (event) => {
//     const searchFeild = event.target.value.toLowerCase();
//     this.setState(() => {
//       return { searchFeild : searchFeild };
//     })
//   }

//   render() {
//     // console.log('render from appjs');

//     const { monsters, searchFeild } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchFeild);
//     })

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monster Rolodex</h1>
//         <SearchBox 
//             classNmae = 'monster-search-box'
//             onChangeHandler = {onSearchChange}
//             placeholder = 'search monster'
//         />
//         <CardList monsters={filteredMonsters}/>
//         {/* <input 
//           className='search-box'
//           type='search'
//           placeholder='search monster'
//           onChange={onSearchChange}
//         /> */}
//         {/* {
//           filteredMonsters.map((monster) => {  
//             return (
//               <div key={monster.id}>
//                 <h1>{monster.name}</h1>
//               </div>
//             );
//           })
//         } */}
//         {/* <CardList monsters={'I am the monsters'} anything={[1,2,3]}/>  */}
        
//       </div>
//     );
//   }
// }

// export default App;
