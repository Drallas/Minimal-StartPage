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

## Settings: saving

**Decided: save everything straight away, with one line that says so.** The checkboxes already apply at once; the city field is the odd one out, because it needs "Opslaan". A single "save" button for the whole panel adds a state where changes exist but are not active, and people forget it. Privacy switches should take effect the moment they are changed.

Changes to make:

- Entering a city saves on Enter or on the Save button, and then shows what is in use: "Gebruikt: Utrecht, Nederland" with a clear "Wis" button beside it.
- A line at the top of the panel: "Wijzigingen worden direct opgeslagen." (translated like the rest).
- While a city is being looked up, the button shows that it is busy, and a failed lookup says so under the field.

## Time zones

**Idea:** up to three extra time zones next to the local time, chosen in the settings.

**Where it shows:** hovering the time shows the extra zones, the same way the weather preview works. Touch screens have no hover, so a small globe icon next to the date should open the same list on tap. Clicking the date already switches its format, so the date itself should not take a second job.

**Format:** one line per zone, with the city name from the zone name, the time, and the day difference when it is not today ("+1 dag" or "−1 dag"), so it reads clearly across midnight.

**Choosing zones:** a search field in the settings, filled from the list of zones the browser knows (`Intl.supportedValuesOf('timeZone')`). Limit: three. A zone can be removed with one click.

**Points to watch:**
- Daylight saving changes the offsets twice a year; the display is computed live, so it stays correct, but the stored choice is only the zone name.
- Older Safari versions may not have the zone list; then the field falls back to a plain text entry with a check.
- The city name comes from the zone name ("Europe/Amsterdam" → "Amsterdam"), which is good enough for a start page.
- The canvas can show the same list, because it needs no network, so this one can be mirrored later.

**Open question:** should the zone list be a hover-only detail (like the weather preview), or should the globe icon always be visible?
