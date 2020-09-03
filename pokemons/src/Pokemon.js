import React from 'react';

export function Pokemon(props) {
  function handleClick() {
    props.onToggleCaught(props.id);
  }

  const style = {
    background: props.caught ? '#5504aa' : '#04aa84',
  }

  return (
    <div className='pokemon' style={style}>
      <span className='pokemon__title'>{props.name}</span>
      <img name={props.name} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png`} alt='pokemon'/>
      <button onClick={handleClick} type='button' className='pokemon__button'>Поймать</button>
    </div>
  ) 
}