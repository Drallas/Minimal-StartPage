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

**Choosing zones:** a search field in the settings, filled from the list of zones the browser knows (`Intl.supportedValuesOf('timeZone')`). Limit: five. A zone can be removed with one click.

**Points to watch:**
- Daylight saving changes the offsets twice a year; the display is computed live, so it stays correct, but the stored choice is only the zone name.
- Older Safari versions may not have the zone list; then the field falls back to a plain text entry with a check.
- The city name comes from the zone name ("Europe/Amsterdam" → "Amsterdam"), which is good enough for a start page.
- The canvas can show the same list, because it needs no network, so this one can be mirrored later.

**Decided and built:** optional, switched on in the settings. A small globe next to the date opens a window with up to five extra zones, which the visitor chooses there. Nothing changes on the time or the date.

## Weather icons in the pop-ups

**Problem:** the weather status is only text in the hover preview and the full forecast. Only the top bar has an icon.

**Plan:** add the same small outline icon, in the same colours, to:

- the "now" line of the hover preview and of the full forecast (next to the word, e.g. rain);
- each hourly row of the preview and of the full forecast (the hourly weather code is already requested);
- each day row of the full forecast (already requested, now shown as an icon too).

**Points to watch:** the rows must stay aligned and readable at phone width. Colour only on hover in the preview, as in the top bar; the full forecast can keep colour, since it is a deliberate view.

## Custom links

**Idea:** replace the Wikipedia icon in the top left with a links button. The first entry is the local Wikipedia, as now. The visitor can add up to five more.

**Look:** the button shows a small dot or count when there is at least one link, so it reads as "there are links" without text.

**Hover:** a small window with the links, the way the weather preview works.

**Click:** a window in the centre, like the full forecast. Each link shows its title, its address, and an optional short description. The window has add, edit and remove, and a link to reset the defaults.

**Rules:**
- Only `https://` and `http://` addresses are accepted. `javascript:` and similar are refused.
- Links open in a new tab, with `rel="noopener"`.
- The list is stored in the browser only; nothing is sent anywhere.
- The Wikipedia default can be edited or removed like any other link; "Reset all choices" brings it back.

**Points to watch:** the link list grows the settings and the window, so keep the window simple. Descriptions are optional and short (for example 80 characters).

## Suggested order

1. Weather icons in the pop-ups (small, self-contained).
2. Custom links, with the default Wikipedia entry.
3. Canvas: the links can be mirrored later, since they need no network.

## Decided

- Links: as many as fit on the screen. The window scrolls, with a cap of 15 so it stays usable.
- The description is optional and written by the visitor. It is not taken from the site, since sites add unrelated text.
- The Wikipedia link can be removed. It comes back when "Reset all choices" is used.
- Weather icons: done in the hover preview and the full forecast.
- Custom links: built, with Wikipedia as the first default.

## Questions to settle before building


## Permanent links: candidates

Built in, shown as icons in a row at the top of the links window, not removable. Wikipedia is in place, in the browser's language. Candidates for a few more, to choose from:

- **Buienradar** (Dutch rain radar): useful for a Dutch visitor who checks the weather.
- **Windy**: a global weather and wind map.
- **DeepL**: translation, better than most for European languages.
- **OpenStreetMap**: maps without an account.

Pick the ones you want; each one is a single line in `permanentLinks()`.

## Page density: minimal, standard, full

**Idea:** one setting that chooses how much is on the page.

- **Minimal:** clock, date, search and the links icons only. No quote, no Ask AI row, no globe, no weather icon.
- **Standard:** the current default.
- **Full:** everything on, including the time zone list and the weather preview.

**Points to watch:** the presets only switch the existing options; each option stays available on its own in settings.

## Decided

- Wikipedia is a permanent link, not part of the custom list. It follows the browser language and cannot be removed.
- The dot on the links button is removed. The button can be switched off in settings; when it is off, nothing is shown.
