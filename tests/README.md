# Tests

`smoke.js` checks the basic behaviour of `index.html` in Chromium: the page loads without errors, the settings and data panel open and close, export and import work (replace, merge without duplicates, and a refused invalid file). External services (IP lookup, weather, city search) are mocked, so no network is needed.

## Run

```
cd tests
npm ci
npx playwright install chromium
npm test
```

To use a Chromium that is already installed, set `CHROMIUM_PATH` to its binary before `npm test`.

## In GitHub

The workflow `.github/workflows/tests.yml` runs the same script on every push and pull request. The HTML check in `html-check.yml` runs next to it.
