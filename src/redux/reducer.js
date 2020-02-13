import { MAKE_GUESS, RESTART_GAME, GENERATE_AURAL_UPDATE } from "./actions";

const initialState = {
  guesses: [],
  feedback: "Make your guess!",
  auralStatus: "",
  correctAnswer: Math.floor(Math.random() * 100) + 1
};

export default function reducer(state = initialState, action) {
  if (action.type === MAKE_GUESS) {
  }
  if (action.type === RESTART_GAME) {
    return initialState;
  }
  return state;
}
