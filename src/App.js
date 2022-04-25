import logo from './logo.svg';
import './App.css';
import { DISHES } from './shared/dishes';
import { Component } from 'react';
import Menu from './components/MenuComponent';
import { Navigation } from './components/NavbarComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render() {
    return (
      <div>
        <div>
          <Navigation/>
        </div>
        <div className='container mt-4'>
          <Menu dishes={this.state.dishes}/>
        </div>
        
      </div>
    )
  }
}

export default App;
