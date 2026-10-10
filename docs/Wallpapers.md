# Wallpapers

## Curated set (open)

Five wallpapers chosen by hand, checked against the text colours in light and dark mode. The images are still to be supplied. Until then the current photo stays in use.

## Uploading a visitor's own photo (not decided)

Considered, not built. If it is built, it would need:

- A brightness check, to choose the light or dark veil behind the text.
- A contrast check of the main text, at least 4.5:1.
- Resizing to a 2000 px JPEG before storage.
- Storage in IndexedDB, since the photo is too large for localStorage.
- Only JPEG, PNG and WebP accepted.
- A reset that brings back the default wallpaper.

Open question: is the extra code worth it for a page whose point is that it stays simple? The default set already covers most needs.
