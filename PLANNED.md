# Planned

What is still to be built. The finished work is in [BUILT.md](BUILT.md); the reasoning is in [docs/](docs/).

## Wallpapers

- Check the four wallpapers against the text colours in light and dark mode, and decide on the photo credits.
- Uploading a visitor's own photo: not decided. See [docs/Wallpapers.md](docs/Wallpapers.md).

## More permanent links

Candidates and the open question: [docs/Permanent-links.md](docs/Permanent-links.md).

## Help

- A keyboard shortcut list in the Help guide, once the shortcuts are settled.

## Code structure

- Before splitting anything, add tests for the behaviour that exists now: limits, import and export, the new-tab options, the reset confirmation and the layout on phones.
- Move the translations and the icons out of `script.js` into their own files. This is the lowest-risk step and makes the file much shorter.
- Then split the logic (search, weather, links, AI shortcuts, settings) into separate modules. The shared state and the load order in `script.js` make this the risky part, so do it only with the tests in place.
- Not decided: whether a build step or plain ES modules is the right fit for a page without a build.

## Translations

- Check the German, French, Spanish and Chinese wording of the Help, the settings and the new messages with a native speaker.
