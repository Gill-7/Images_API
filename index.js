const setupDiv = document.getElementById('setup')
const puchlineDiv = document.getElementById('puchline')
const puchlineBtn = document.getElementById('puchlineBtn')
const newJokeBtn = document.getElementById('newJokeBtn')


const getJoke = async () => {
    const jokePromise = await fetch('https://official-joke-api.appspot.com/jokes/programming/random')
    const joke = await jokePromise.json();

    console.log(joke);
}
getJoke()