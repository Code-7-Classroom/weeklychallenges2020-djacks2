import React, {Component} from 'react';
import './App.css';
import BasicInfo from './BasicInfo'
// import { render } from '@testing-library/react';



    class App extends React.Component{
      constructor (){
        super();


        this.state= {
          person: [
             {
            Name:"Derek",
            DOB: 1/1/1999,
            Number: 704-444-4449
          },
          {
            Name:"Anthony",
            DOB: 2/1/1999,
            Number: 704-444-4849
          },
          {
            Name:"Josh",
            DOB: 1/1/1997,
            Number: 704-444-4479
        }

          ]
        };
      }
      render () {
        return <BasicInfo person={this.state.person}/>
      }
    }

export default App;
