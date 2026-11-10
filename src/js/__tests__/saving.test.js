import GameSaving from '../GameSaving';
import GameSavingLoader from '../GameSavingLoader';

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.useRealTimers();
});

test('returns a promise that resolves to a GameSaving', async () => {
  const result = GameSavingLoader.load();

  expect(result).toBeInstanceOf(Promise);

  await jest.runAllTimersAsync();

  const saving = await result;

  expect(saving).toBeInstanceOf(GameSaving);
  expect(saving).toEqual({
    id: 9,
    created: 1546300800,
    userInfo: { id: 1, name: 'Hitman', level: 10, points: 2000 },
  });
});
