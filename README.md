# Promises

[![CI](https://github.com/NadiaS80/ajs-promises/actions/workflows/ci.yml/badge.svg)](https://github.com/NadiaS80/ajs-promises/actions/workflows/ci.yml)

`GameSavingLoader.load()` последовательно читает буфер, декодирует JSON и возвращает `Promise<GameSaving>`. В `app.js` результат и ошибка обрабатываются через `.then()`.

```sh
npm ci
npm run lint
npm run coverage -- --runInBand
npm run build
```
