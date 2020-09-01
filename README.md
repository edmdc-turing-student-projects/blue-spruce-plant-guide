# Blue Spruce Plant Guide

## Abstract

- A learning tool for Colorado nature lover's motivated to learn the state's
  native plant population by their appearance and scientific names.

## Learning Goals

- In depth exploration of useReducer react hook.
- Continue to build React fundamentals
- Reinforce using React Router to create a multi-page user experience
- Improve ability to test components and creating jest mocks

## Setup

Clone down this repository to your local machine.

Once cloned, change into this repo's directy.

Run `npm install`.

Run `npm start`.

In your browser, navigate to `localhost:8080`.

### Wins

- Handled all user interactions with useReducer react hook
- Project was configured from scratch using my own boilerplate found [here](https://github.com/emontealvo/react-app-boilerplate)
- Casually made use of recursion to create some arrays.

### Challenges

- The nuances of testing continue to be challenging, and their solutions not always
    straightforward. It's slow learning, it feels.
- My silly desire for recursive solutions made testing challenging.
- There are some subtleties introduced to component life cycle's by the use of useReducer
    hook that require a deeper understanding of how hooks behave to optimize the rendering
    of our app and simplify testing.
- Working with the trefle api and an external proxy proved difficult as neither
    proxy choice available to me proved reliable. This drained a bit of time
    throughout the project that would have been better spent fine tuning
    app logic and UI.

### Main Takeaway

- I have a tendency to want to overreach for solo projects. I prefer to experiment
    with adjacent interests for solo projects rather than create a more minimal,
    refined project. Not bad, but also not great as I am never as happy with the end
    result.
- It's made me appreciate group projects, as they encourage planning projects into
    granular tasks that are easier to manage.
- There is more to understand about React components and their life cycles than
    I initially thought, especially as apps grow larger in scale and hooks are
    introduced.
- Exercise better judgment when picking an api next time, and perhaps look into
    building your own proxy for later projects that require it.

### Future Iterations

- Add a more detailed plant page, maybe for desktop only, making use of another
    API call to get leave, stalk/bark, flower pics, etc.
- Make site more personal by incorporating username in more places
- Give ability to create a personal plant guide
- Efficiently bring in more of the API

## Technologies Used

- React Hooks
- React Router
- Jest & React-testing-library
- SCSS/SASS
- Fetch API

## Systems/Practices

- Git Version Control
- Node Package Manager
- Webpack 4 Bundler

This project was bootstrapped with my own react app boilerplate found [here](https://github.com/emontealvo/react-app-boilerplate).

