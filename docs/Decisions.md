# Decisions

## Links and lists

- Wikipedia is a permanent link. It follows the browser language and cannot be removed.
- Permanent links are logos where the open icon set has them. Microsoft and Reuters are shown by name.
- Custom links: up to 15, with an optional description written by the visitor, only http and https addresses.
- The hover list shows only the visitor's own links. The permanent ones live in the window.
- The AI shortcuts are a visitor list: up to five, editable, and the row can be switched off.
- Limits are shown only when they are reached, in the add field, as "5 of 5 · full". Below the limit nothing is shown, so the visitor is not nagged.

## Settings

- Settings save straight away; there is no save button.
- A first-visit hint points to the gear and the ? key. It shows only while nothing is stored yet, and goes for good on the first click, the first ? or when settings open.
- The IP address is a button in the basic settings (IP details), not a setting: it is looked up only on request or when the weather needs it.
- Page presets: Minimal and Standard, chosen in the settings. They switch display options only; the IP address is never changed by a preset. Weather is part of the presets only as a switch-off: no preset turns it on, since weather sends the IP address.
- Personal is shown when the choices match neither preset. It is a state, not a choice, so it cannot be clicked.
- Advanced is a button under the presets; its link goes back to the basic settings.
- The resets sit at the bottom of Advanced, under one heading. Both reset buttons have a red frame; Manage data sits beside them without one, because it does not destroy anything.
- Export and import have their own Backup tab, the last one in Manage data, with a short explanation.
- The version and the date of the last change sit at the bottom right of the basic settings.

## Look and buttons

- The background button is a cycle, not an on/off switch: none, then each wallpaper that is switched on. The first press from the default photo goes to none, so the plain page is always one press away.
- The colour is a button on every screen, with the same steps as the phone. The slider is hidden everywhere, so one control does one thing.
- Wallpapers are a list in Data beheren, with a switch each. The photo and the three new ones are on by default; a switch turns one off for good.
- Action buttons with a verb are a darker grey when they can be used, and a lighter, dimmed grey when they cannot. Arrows, pencils and crosses keep their look. Red is used only for the resets.
- The colour in the counters is kept soft: green while there is room, blue with "full" at the limit.
- Dialogs open with the panel focused, not a button, so nothing looks selected.

## Pages and documentation

- The pages start minimal: Minimal has only the search, the clock and the colour button, and Standard is the default for a new visitor. The AI shortcuts and time zones are off there, so their value is found, not forced.
- The README stays short: the top shows the start page; the settings and Manage data pictures are on docs/Screenshots.md, which the README links to.
- The questions people ask go to docs/FAQ.md, which the README links to.
- Screenshots are taken from the page by tests/screenshots.js, so they show the current version and options.

## Versions and releases

- The app shows the release number (1.4, 1.5 …). Between releases, a change gets a third number (1.4.1, 1.4.2 …), set by hand in script.js.
- A published release sets the version and the date in the app, and retakes the screenshots, through .github/workflows/set-version.yml. The page does not ask GitHub for the version at runtime, so nothing extra leaves the page.
- Documentation-only changes do not change the app version.

## Not decided

- TypeScript: deferred until the split of script.js is done. The middle step without a build is JSDoc types with `// @ts-check`, checked in CI.
- Uploading a visitor's own photo: see docs/Wallpapers.md.
