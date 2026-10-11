# Built

What is in the page now. The open items are in [PLANNED.md](PLANNED.md), and the reasoning behind choices is in [docs/Decisions.md](docs/Decisions.md).

- Clock: 24-hour, 12-hour and full time with seconds, chosen in Advanced or by clicking the time; the colons stay still. The time in the time zones follows the same choice.
- Date: long or short, chosen in Advanced or by clicking the date. The short date's order follows the browser unless a choice is made (day-month-year, month-day-year or year-month-day). Minimal leaves the date out; Advanced can show it again.
- Time zones: an optional clock icon above the time opens a Time zones window: the local time, up to five zones sorted by UTC offset, and an Edit time zones button that opens the manage panel.
- Weather: optional, off by default. Location from the IP address or a chosen city. Hover preview and full forecast with icons per hour and per day, the local time of the place, and a Windy link.
- IP details: a button in the basic settings. It shows the last address you asked for, with the city, provider and more; a check button looks it up again. Looked up only on request or when weather needs it.
- Links: a globe at the top left opens a Links window with the permanent links as logos in a row (Wikipedia, Google, Apple, Facebook, X, Instagram, Microsoft, GitHub, Reuters) and your own links below; up to 15 of your own. A Data beheren button in that window opens the full manage panel, where your own links are edited. Hovering the globe shows your own links only. The button can be switched off. With Own links off it is a plain Wikipedia button that opens Wikipedia directly; the Minimal page uses that.
- Background: the round button at the bottom right cycles through none and each wallpaper switched on in Data beheren (Background tab). The button at the bottom left changes the colour in steps, on a phone and on a computer; the colour button can be hidden under Show in Advanced.
- Quote on a phone: under the AI shortcuts, not over them.
- Data panel: links, time zones, AI shortcuts and weather places in one panel with four tabs. Each opens on its own tab: the links globe, the time zones clock, and the Manage places button. The Ask AI caption has no link, only a tooltip; the AI shortcuts are edited in Data beheren.
- Weather places: up to five extra places besides your own, shown as chips in the forecast window.
- Settings: a basic view (the pages and the privacy note, with Help) and an Advanced view in groups: Weather, Show, Time format, Date, Search, AI shortcuts, Background and Language. Gear icon, Help guide in six languages, Escape closes the top window. The reset buttons sit beside Back to basic settings and ask first.
- AI shortcuts: a checklist of seven services (Claude, ChatGPT, Grok, Duck.ai, Lumo, Kagi, Meta AI); up to five, your own shortcuts included. Each has a monochrome icon; a shortcut's icon is checked once when it is saved. Links open in a new tab by default.
- Search: opens in the same tab by default; Advanced can open it in a new tab.
- Pages: Minimal (search, clock and the colour button) and Standard (adds the date, Wikipedia, the colour and wallpaper buttons) presets in the settings, plus Personal when the choices match neither. They change only the display options; weather and the IP address are never changed by a preset.
- Limits: links (15), time zones (5), AI shortcuts (5) and weather places (5) each show their count, and adding is greyed out when full.
- Privacy: everything is off by default. Only weather and the IP address send data, and a one-line note sits under the IP-address location option in the advanced settings.
- Phones: the bottom controls sit above the browser's bar; the colour and wallpaper buttons are adjusted for touch.
- Import: a choice between Merge (the default; new items added, links matched by address, existing items kept) and Replace. The import reports how many were added, were already there, or were skipped by a limit.
- Language: a choice in Advanced settings (Automatic, or one of six languages). Automatic follows the browser; a choice reloads the page.
