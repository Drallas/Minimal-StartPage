# Planned features

What is built, what is still open, and what was decided. Nothing in "Open" is built yet.

## Built

- Clock: 24-hour, 12-hour and full time with seconds; the date and week follow the browser language.
- Time zones: an optional globe above the clock, up to five zones, sorted by UTC offset, with short UTC labels.
- Weather: optional, off by default. Location from the IP address or a chosen city. Hover preview and full forecast with icons per hour and per day, the local time of the place, and a Windy link.
- IP address: its own optional switch under the footer, with the city, country and provider on hover.
- Links: a button at the top left. Permanent links as logos in a row (Wikipedia, Google, Apple, Facebook, X, Instagram, Microsoft, GitHub, Reuters); up to 15 of your own. Hovering the button shows your own links only. The button can be switched off.
- Background: a wallpaper switch, an option to hide its button, and a tint switch that hides the slider.
- Settings: grouped into Weather, Display, Background and Privacy. Gear icon, Help guide in six languages, Escape closes the top window.
- Privacy: everything is off by default. Only weather and the IP address send data, and a short disclaimer points to Help.
- Phones: the bottom controls sit above the browser's bar; the tint slider and the wallpaper button are adjusted for touch.

## Open

### Page density: minimal, standard, full

One switch that chooses how much is on the page.

- **Minimal:** clock, date, search and the links button. No quote, no Ask AI row, no globe, no weather icon.
- **Standard:** the default for a new visitor.
- **Full:** everything on, including the time zones and the weather preview.

Each option stays available on its own in the settings; the switch only changes the presets.

### Canvas

The canvas has the date and week in the browser language, the footer and the phone layout. It does not have weather, the IP address, the links or the time zones: those need a network connection or per-visitor storage, which the canvas does not have. If it is wanted there, time zones can be added as a session-only setting.

### Wallpapers

- Five curated wallpapers, chosen by hand and checked against the text colours in light and dark mode. Waiting for the images.
- Upload of a visitor's own photo was considered but not decided. If built: a brightness check to pick the light or dark veil, a contrast check of the main text (at least 4.5:1), resizing to 2000 px JPEG, storage in IndexedDB, only JPEG, PNG and WebP, and a reset to the default.

### More permanent links

Candidates, to choose from: Buienradar (Dutch rain radar), Windy (global weather map), DeepL (translation), OpenStreetMap (maps). The row holds nine now; more fit only if the window is widened.

### Settings and help

- A keyboard shortcut list in the Help guide, once the shortcuts are settled.

## Decided

- Wikipedia is a permanent link. It follows the browser language and cannot be removed.
- Permanent links are logos where the open icon set has them; Microsoft and Reuters are shown by name.
- Custom links: up to 15, optional description written by the visitor (not taken from the site), only http and https addresses.
- Showing the IP address is separate from the weather, off by default, and uses the same service as the IP location.
- The hover list shows only the visitor's own links; the permanent ones live in the window.
- Settings save straight away; there is no save button.
- Dialogs open with the panel focused, not a button, so nothing looks selected.
