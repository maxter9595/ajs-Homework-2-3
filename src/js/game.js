import Character from './domain.js';

export default class Game {
  start() {
    console.log('game started');
    const hero = new Character('Hero');
    console.log('Character created:', hero);
  }
}

export class GameSavingData {
}

export function readGameSaving() {
}

export function writeGameSaving() {
}
