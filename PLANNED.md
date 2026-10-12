# Planned

What is still to be built. The finished work is in [BUILT.md](BUILT.md); the reasoning is in [docs/](docs/).

## Wallpapers

- Check the four wallpapers against the text colours in light and dark mode, and decide on the photo credits.
- Uploading a visitor's own photo: not decided. See [docs/Wallpapers.md](docs/Wallpapers.md).

## More permanent links

Candidates and the open question: [docs/Permanent-links.md](docs/Permanent-links.md).

## Accessibility

- Keyboard: every control in the settings, Manage data and Help can be reached and used with the keyboard alone, in a sensible order, and Escape closes each window.
- Screen readers: the labels, the states (full, greyed out, reset) and the new messages are announced, checked with a screen reader on at least one desktop and one phone.
- Colour contrast: the grey text, the dimmed buttons and the blue and green limit states, and the red reset frame, checked against the WCAG AA minimum in light and dark mode.
- Focus: the focus ring is visible on every control in both themes.

## Help

- A keyboard shortcut list in the Help guide, once the shortcuts are settled.

## Code structure

- Before splitting anything, add tests for the behaviour that exists now: limits, import and export, the new-tab options, the reset confirmation and the layout on phones.
- Move the translations and the icons out of `script.js` into their own files. This is the lowest-risk step and makes the file much shorter.
- Then split the logic (search, weather, links, AI shortcuts, settings) into separate modules. The shared state and the load order in `script.js` make this the risky part, so do it only with the tests in place.
- Not decided: whether a build step or plain ES modules is the right fit for a page without a build.
- Move the static data (the time zone list, the AI catalog, the page presets) out of `script.js` into its own file, next to `quotes.js`.
- Not decided: TypeScript. A middle step without a build is JSDoc types with `// @ts-check`, checked in CI with `tsc --checkJs`. Decide after the split.

## Translations

- Check the German, French, Spanish and Chinese wording of the Help, the settings and the new messages with a native speaker.
