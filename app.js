const jokeContainer = document.getElementById('joke-container');
const loadJokeButton = document.getElementById('load-joke');

const loadJoke = async () => {
    const url = 'https://api.chucknorris.io/jokes/random';
    try {
        jokeContainer.textContent = 'Loading...';
        const fetchJokes = await fetch(url, {
            headers: {
                Accept: 'application/json'
            }
        });

        const data = await fetchJokes.json();
        jokeContainer.textContent = data.value;
    } catch(e) {
        console.log(e);
        jokeContainer.textContent = 'Failed to load joke. Please try again.';
    }
};

loadJokeButton.addEventListener('click', loadJoke);

// Load initial joke
loadJoke();