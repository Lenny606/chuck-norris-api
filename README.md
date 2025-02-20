# Chuck Norris Jokes Project

## Overview

This project is a simple, interactive web page that fetches and displays random Chuck Norris jokes using the Chuck Norris API. It's designed as a fun, lightweight application to demonstrate basic API integration and dynamic content updating with JavaScript.

## Features

- Displays random Chuck Norris jokes
- "Load Joke" button to fetch new jokes on demand
- Simple, responsive design
- Error handling for failed API requests

## Technologies Used

- HTML5
- CSS3 (inline styles for simplicity)
- JavaScript (ES6+)
- Fetch API for making HTTP requests
- [Chuck Norris API](https://api.chucknorris.io/)

## How to Use

1. Clone or download this repository to your local machine.
2. Open the `index.html` file in a web browser.
3. You'll see the Chuck Norris logo, a joke container, and a "Load Joke" button.
4. Click the "Load Joke" button to fetch and display a new joke.

## Project Structure

- `index.html`: Contains the HTML structure, inline CSS, and JavaScript for the application.

## API Endpoint Used

- GET: `https://api.chucknorris.io/jokes/random` - Fetches a random Chuck Norris joke

## JavaScript Functionality

The `loadJoke` function:
- Fetches a random joke from the Chuck Norris API
- Displays a loading message while fetching
- Updates the joke container with the new joke
- Handles errors and displays an error message if the request fails

## Styling

The project uses inline CSS for styling, including:
- Responsive design with a maximum width for larger screens
- Centered content layout
- Styled button with hover effe