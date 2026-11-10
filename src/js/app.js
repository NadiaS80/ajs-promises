import GameSavingLoader from './GameSavingLoader';

const result = document.querySelector('#result');

GameSavingLoader.load().then(
  (saving) => {
    result.textContent = JSON.stringify(saving, null, 2);
  },
  (error) => {
    result.textContent = `Unable to load saving: ${error}`;
  },
);
