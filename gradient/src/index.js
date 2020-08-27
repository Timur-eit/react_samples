import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class BackgroundColor extends React.Component {
  state = {
    color1: 'Red',
    color2: 'Blue',
    background: '#fff',
  }

  handleChange1 = (event) => {
    this.setState({
      color1: event.target.value,
    });
    // console.log(`this is first foo`);
    // console.log(event.target);
    // console.log(event);
  }

  handleChange2 = (event) => {
    this.setState({
      color2: event.target.value,
    }); // ?
    // console.log(`this is second foo`);
    // console.log(event.target);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target);
    this.setState({background: `linear-gradient(${this.state.color1}, ${this.state.color2})`});
  }

  render() {
    return (
      <form id='color-form,' className='color-panel' onSubmit={this.handleSubmit} style={{ background: this.state.background }}>
        <label htmlFor='color1'>
          Выберете первый цвет
          <select id='color1' type='text' name='color1' color1={this.state.color1} onChange={this.handleChange1}>
            <option color1='Red'>Red</option>
            <option color1='Gray'>Gray</option>
            <option color1='Silver'>Silver</option>
            <option color1='White'>White</option>
            <option color1='Fuchsia'>Fuchsia</option>
            <option color1='Maroon'>Maroon</option>
            <option color1='Yellow'>Yellow</option>
            <option color1='Olive'>Olive</option>
            <option color1='Lime'>Lime</option>
            <option color1='Green'>Green</option>
            <option color1='Aqua'>Aqua</option>
            <option color1='Teal'>Teal</option>
            <option color1='Blue'>Blue</option>
            <option color1='Navy'>Navy</option>
          </select>
        </label>
        <label htmlFor='color1'>
          Выберете второй цвет          
          <select name='color2' color1={this.state.color2} onChange={this.handleChange2}>
            <option color2='Blue'>Blue</option>
            <option color2='Gray'>Gray</option>
            <option color2='Silver'>Silver</option>
            <option color2='White'>White</option>
            <option color2='Fuchsia'>Fuchsia</option>
            <option color2='Red'>Red</option>
            <option color2='Maroon'>Maroon</option>
            <option color2='Yellow'>Yellow</option>
            <option color2='Olive'>Olive</option>
            <option color2='Lime'>Lime</option>
            <option color2='Green'>Green</option>
            <option color2='Aqua'>Aqua</option>
            <option color2='Teal'>Teal</option>
            <option color2='Navy'>Navy</option>
          </select>          
        </label>

        <button className='submit' type='submit'>Go</button>
      </form>
    );
  }
}

ReactDOM.render(
  <BackgroundColor />,
  document.getElementById('root')
);