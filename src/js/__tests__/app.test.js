import GameSavingLoader from '../GameSavingLoader';

jest.mock('../GameSavingLoader', () => ({ load: jest.fn() }));

let result;

beforeEach(() => {
  result = { textContent: '' };
  global.document = {
    querySelector: jest.fn().mockReturnValue(result),
  };
});

afterEach(() => {
  delete global.document;
});

test('shows the loaded saving', async () => {
  const saving = { id: 9 };
  GameSavingLoader.load.mockResolvedValueOnce(saving);

  await jest.isolateModulesAsync(async () => {
    await import('../app');
  });

  expect(document.querySelector).toHaveBeenCalledWith('#result');
  expect(result.textContent).toBe(JSON.stringify(saving, null, 2));
});

test('shows the loading error', async () => {
  GameSavingLoader.load.mockRejectedValueOnce(new Error('File unavailable'));

  await jest.isolateModulesAsync(async () => {
    await import('../app');
  });

  expect(result.textContent).toBe('Unable to load saving: Error: File unavailable');
});
