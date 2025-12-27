import { ScrambleWords } from '../ScrambleWords';

export interface ScrambleWords {
  currentWord: string;
  errorCounter: number;
  guess: string;
  isGameOver: boolean;
  maxAllowErrors: number;
  maxSkips: number;
  points: number;
  scrambledWord: string;
  skipCounter: number;
  words: string[];
  totalWords: number;
}

// export type ScrambleWordsAction = {
//   type: 'NO_TENGO_LA_MENOR_IDEA';
// };


const GAME_WORDS = [
  'REACT',
  'JAVASCRIPT',
  'TYPESCRIPT',
  'HTML',
  'ANGULAR',
  'SOLID',
  'NODE',
  'VUEJS',
  'SVELTE',
  'EXPRESS',
  'MONGODB',
  'POSTGRES',
  'DOCKER',
  'KUBERNETES',
  'WEBPACK',
  'VITE',
  'TAILWIND',
];

// Esta función mezcla el arreglo para que siempre sea aleatorio
const shuffleArray = (array: string[]) => {
  return array.sort(() => Math.random() - 0.5);
};

// Esta función mezcla las letras de la palabra
const scrambleWord = (word: string = '') => {
  return word
    .split('')
    .sort(() => Math.random() - 0.5)
    .join('');
};

export const getInitialState = () => {

  const shuffledWords = shuffleArray([...GAME_WORDS]);

  return {
    currentWord: shuffledWords[0],
    errorCounter: 0,
    guess: '',
    isGameOver: false,
    maxAllowErrors: 3,
    maxSkips: 3,
    points: 0,
    scrambledWord: scrambleWord(shuffledWords[0]),
    skipCounter: 0,
    words: shuffledWords,
    totalWords: GAME_WORDS.length,
  }
};


export type ScrambleWordsAction =
  | { type: 'NO_TENGO_LA_MENOR_IDEA' }
  | { type: 'NO_TENGO_LA_MENOR_IDEA2' }
  | { type: 'NO_TENGO_LA_MENOR_IDEA3' }

export const scrambleWordsReducer = (
  state: ScrambleWords,
  action: ScrambleWordsAction): ScrambleWords => {
  switch (action.type) {
    case 'NO_TENGO_LA_MENOR_IDEA':
      return state;
    default:
      return state;
  }
}