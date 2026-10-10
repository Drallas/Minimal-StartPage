<h1 align="center">Minimal-StartPage</h1>

<p align="center">
  A minimal start page with search, a clock, optional weather, links and a light, dark or system theme. Everything beyond the search is switched on in the settings.
</p>

<p align="center">
  <a href="https://drallas.github.io/Minimal-StartPage/"><strong>Open the start page</strong></a>
  &nbsp;·&nbsp;
  <a href="Installation.md"><strong>Install it on your computer</strong></a>
</p>

---

<table>
  <tr>
    <td align="center">
      <img src="assets/screenshot_wallpaper.webp" width="800" alt="Wallpaper mode"/>
      <br/>
      <sub><b>Wallpaper mode</b></sub>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="assets/screenshot_light.png" width="800" alt="Light theme"/>
      <br/>
      <sub><b>Light theme</b></sub>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="assets/screenshot_dark.png" width="800" alt="Dark theme"/>
      <br/>
      <sub><b>Dark theme</b></sub>
    </td>
  </tr>
</table>

## Features

Everything is optional. The settings start with a choice of page: **Minimal** (search, clock, date and a plain Wikipedia button) or **Standard** (the default, with the AI shortcuts and the wallpaper). Each option can still be changed on its own, and when your choices match neither page, the page shows **Personal**. A preset never switches weather or your IP address on, since they send data.

- **Search.** Type a query and press Enter, or click the magnifier. The icon on the left shows the search engine: click it to switch between DuckDuckGo (the default), Kagi, Brave and Google. Your choice is remembered.
- **Clock.** The time sits above the search bar, with the date underneath. Click the time to cycle through 24-hour, 12-hour (AM/PM) and full time with seconds; the colons blink, unless your system asks for reduced motion. Hover over the time to see your time zone and its UTC offset.
- **Time zones.** Optional. A small clock icon above the time opens up to five extra time zones, each with its UTC offset and a day difference when it is not today. Hover over the icon for the list on a computer; tap it to open the list. **Edit time zones** in that window is where you change them.
- **Date.** Hover over the date for the ISO week and the day of the year. Click it to switch between the long form and DD-MM-YYYY. The date follows your browser's language.
- **Quote.** Optional. A short quote from a philosopher or teacher, changing every six hours, in your browser's language. Click it for the next one.
- **Links.** The globe at the top left opens a Links window with the permanent links as icons (Wikipedia, Google, Reuters, Apple, Microsoft, GitHub, Facebook, Instagram, X and Reddit) and your own links below, each with an optional description; up to 15 of your own. **Data beheren** in that window is where you add, order and edit them. Hover the globe to see your own links. By default the globe is a plain Wikipedia link that opens Wikipedia in your browser's language. Turn on **Own links** for the window and your own links. The button can be switched off.
- **AI shortcuts.** Shortcuts below the search bar. The default set is Claude, ChatGPT, Grok and Duck.ai. In the settings you can change them: up to five, in any order, or none at all. The row can be switched off.
- **Weather.** Optional, off by default. Up to five extra places can be added, shown as chips in the forecast window. Typing a city suggests matches, as the time zone box does, so you can pick the right one. The forecast window has an Edit places button that opens the places in Data beheren. The temperature and a small icon sit at the top middle. Hover for a short preview with the next six hours; click for the full forecast: the next six hours, the next seven days, and a link to Windy. The place comes from your IP address or from a city you choose.
- **IP details.** A button in the settings shows the last IP address you asked for, with the city, provider and more. It is checked only when you press the check button, or when the weather uses your IP location.
- **Background.** A wallpaper that can be switched on or off, and a button to hide that switch. A tint slider gives the neutral background a colour; on a phone a button at the bottom left steps through a few colours, and the middle of the slider is the neutral background. The tint can be switched off. The background adapts to light and dark mode.
- **Settings and help.** Open the settings with the gear at the top right, or press `?`. The basic view has the pages (Minimal, Standard) and the privacy note. The Advanced button opens the rest, grouped into Weather, Display, AI shortcuts, Background and Privacy, and its link goes back to the basic settings. The Help button in the settings opens a guide to every feature. Press `Esc` to close.
- **Phones.** The bottom controls sit above the browser's bar, and the layout fits landscape phones too.
- **Hidden details.** A few small details are tucked away in the page. Look closely and explore.

## Use it

There are three ways to use it, from easiest to most control. You do not need to install anything for the first one.

1. **Use the online version.** Open [the start page](https://drallas.github.io/Minimal-StartPage/), bookmark it and set it as your homepage. This also works on a phone: in Safari, tap Share and then Add to Home Screen.
2. **Install a copy on your computer.** The page then works offline; only searches and the AI links need an internet connection. Download the files, unzip them, open `index.html` and set it as your homepage. Step-by-step instructions for Windows and macOS are in [Installation.md](Installation.md).
3. **Use Git.** If you already work with Git, clone the repository and pull new changes whenever you like. Details are in [Installation.md](Installation.md).

## Your data

Searches go straight to the search engine you chose. The page keeps your choices in your browser only, not on a server. Nothing leaves the page unless you switch on one of these:

- **Weather** sends your IP address to [ipapi.co](https://ipapi.co) to find your city, or the city you choose to [Open-Meteo](https://open-meteo.com) to find its coordinates. The forecast itself comes from Open-Meteo. Only while weather is on.
- **Extra places** on the weather send their name to [Open-Meteo](https://open-meteo.com) to find them. Up to five can be added in the Data panel, under Weather.
- **Your IP address** is only looked up when you press the check button in IP details, or when the weather uses it. It asks [ipapi.co](https://ipapi.co).

In the Advanced settings, **Export data** saves your choices and your own links, AI shortcuts, time zones and places to one JSON file that you keep yourself (for example in iCloud Drive). **Import data** loads that file on another device. Nothing is sent anywhere when you export or import.

Your IP address is looked up again at most every ten minutes, so a VPN change shows after a refresh, and the check button in IP details checks it straight away; forecasts are kept for 30 minutes. "Reset settings" in the settings brings back the defaults. "Delete my links, AI shortcuts and places" removes your own links, AI shortcuts, time zones and city, and asks first.

## Customise

If you are comfortable editing text files, you can change the page yourself. Use any plain text editor, such as Notepad on Windows or TextEdit on macOS (set it to plain text first).

- **Permanent links:** edit `permanentLinks()` in `script.js`.
- **Search engines:** edit the `engines` list in `script.js`.
- **Colours:** edit the colours in `color.css`.

## Documents

Short notes, one topic each:

- [BUILT.md](BUILT.md): what the page does now.
- [PLANNED.md](PLANNED.md): what is still to be built.
- [docs/Decisions.md](docs/Decisions.md): the choices made, and why.
- [docs/Wallpapers.md](docs/Wallpapers.md): the wallpaper set and the upload question.
- [docs/Permanent-links.md](docs/Permanent-links.md): the permanent links and the candidates.
- [Installation.md](Installation.md): how to install a copy.

## Credits

Inspired by [Nimplex/Minimal-StartPage](https://github.com/Nimplex/Minimal-StartPage) by Przemysław Szafraniec. This project is a full rebuild from scratch; it shares the idea of a minimal start page, not its code.

The wallpapers are photos from [Unsplash](https://unsplash.com), used under the Unsplash License.

The weather forecast comes from [Open-Meteo](https://open-meteo.com), licensed under CC BY 4.0.

The Claude, ChatGPT, Grok, Kagi, Brave and Google icons come from [LobeHub Icons](https://github.com/lobehub/lobe-icons) (MIT). The DuckDuckGo icon and the logos of Wikipedia, Google, Apple, Facebook, X, Instagram, GitHub and Reddit come from [Simple Icons](https://simpleicons.org) (CC0). Microsoft and Reuters are shown by their names, since their logos are not in the open icon set. The logos are trademarks of their owners.

The gear icon is from [Feather](https://feathericons.com) (MIT).

## License

Released under the [MIT License](LICENSE). Use, copy, modify and share it however you like. It comes without warranty, and the author is not liable for any damage.
