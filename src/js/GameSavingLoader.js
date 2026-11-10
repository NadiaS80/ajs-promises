import GameSaving from './GameSaving';
import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static load() {
    return read()
      .then(json)
      .then((value) => new GameSaving(JSON.parse(value)));
  }
}
