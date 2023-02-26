import Bulbasaur from './images/bulbasaur.jpg';

function Showcase() {

  const favPokemon = 'Bulbasaur';
  const pokeCharacteristics = {
    "type": "Grass",
    "move": "Vine Whip"
  }

  return (
    <div>
      <h1>{favPokemon}'s Showcase Component</h1>
      <img src={Bulbasaur} alt={favPokemon}></img>
      <h2>Bulbasaur's type is <span style={{ "backgroundColor": "green", "color": "white" }}>{pokeCharacteristics.type}</span> and
       one of their moves is <span style={{ "color": "#00FF00", "backgroundColor": "#FFFFFF" }}>{pokeCharacteristics.move}</span></h2>
    </div>
  )
}

export default Showcase;
