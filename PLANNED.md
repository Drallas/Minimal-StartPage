# Planned features

A list of ideas for later, with the points to watch. Nothing here is built yet unless it says so.

## Wallpapers

**Curated set (planned).** Five wallpapers chosen by hand, each checked against the text colours in light and dark mode. Files to be added to `assets/` in the same sizes as the current forest photo (800, 1280 and 2000 px, plus a small thumbnail). The settings get a small picker that remembers the choice. Waiting for the five images before building.

**Upload your own (considered, not decided).** Possible, but the text can become unreadable on a bright, busy or very dark photo. If we build it, it needs:

- a brightness check when the photo is loaded, so the right light or dark veil is chosen;
- a contrast check of the main text against the veil, with a warning when the result is below 4.5:1;
- resizing to 2000 px JPEG in the browser before storing, to keep the storage small;
- storage in IndexedDB, not localStorage, which is too small for an image;
- only JPEG, PNG and WebP accepted, never SVG, because SVG can contain scripts;
- a reset to the default wallpaper.

The photo stays in the visitor's own browser; it is not sent anywhere. Safari on iPhone can clear the storage when space runs low, so the page must fall back to the default without errors. Uploads cannot work on the canvas, because the canvas has no per-visitor storage.

## Weather

- Turn weather on from the settings only; no visible control when it is off (done: a faint icon remains).
- Possible: a forecast for another place saved next to the current one.

## Settings and help

- Possible: a keyboard shortcut list in the help panel, once the shortcuts are settled.

## Canvas

- The canvas has no weather, IP lookup or settings panel. These stay in the repo only.
