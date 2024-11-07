async function fetchPokemon() {
    const pokemonInput = document.getElementById("pokemonName").value.toLowerCase();
    const pokemonLabel = document.getElementById("pokemonLabel");
    const pokemonImage = document.getElementById("pokemonImage");

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonInput}`);
        
        if (!response.ok) {
            throw new Error('Pokémon not found');
        }
        
        const pokemon = await response.json();
        
        pokemonLabel.textContent = `Name: ${pokemon.id}`;
        
        pokemonImage.src = pokemon.sprites.front_default; 
        pokemonImage.style.display = 'block';
        console.log(pokemon);
        
        
    } catch (error) {
        pokemonLabel.textContent = "Pokémon not found. Please try again.";
        pokemonImage.style.display = 'none'; 
        console.error('Error:', error);
    }
}
