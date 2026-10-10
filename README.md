<h1 align="center">Minimal-StartPage</h1>

<p align="center">
  A minimal start page with search, a clock, a quote and a light, dark or system theme.
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

- **Search.** Type a query and press Enter, or click the magnifier on the right of the search bar. An empty search shows a short hint instead of doing nothing.
- **Search engine.** The icon on the left of the search bar shows the current engine. DuckDuckGo is the default; click the icon to cycle through Kagi, Brave and Google. Your choice is remembered.
- **Theme.** Follows your system's light or dark setting by default. The icons in the top right switch to a fixed Light or Dark theme, and that choice is remembered too.
- **Clock.** The time sits above the search bar, with the date underneath. Hover over the time to see your time zone and its offset from UTC. Click the time to cycle through 24-hour, 12-hour (AM/PM) and full time, which shows the seconds with blinking colons. The choice is remembered, and the blinking stops if your system asks for reduced motion.
- **Date.** Hover over the date to see the ISO week number and the day of the year. Click the date to switch between the long form and DD-MM-YYYY.
- **Quote.** A short quote from a philosopher or teacher, changing every six hours. There are 50 quotes, shown in your browser's language (English, Dutch, German, French, Spanish or Chinese, falling back to English). Click the quote to see the next one.
- **Shortcuts.** A links button in the top left, with Wikipedia to start with. You can add up to 15 links of your own, with an optional description, and remove Wikipedia if you like. Reset all choices brings it back; and links to Claude, ChatGPT, Grok and Duck.ai below the search bar under the caption "Ask AI".
- **Background.** The wallpaper is on by default. The round button in the bottom right turns it off or on again, and your choice is remembered. Without the wallpaper, the slider in the bottom left gives the background a subtle tint in any hue (drag back to the far left for the neutral look). The background adapts to light and dark mode. On a phone the slider is hidden and the wallpaper button sits just above the browser's bottom bar.
- **Weather.** Off by default. Turn it on in the settings, or click "Show weather" at the top. The temperature and a small icon then sit in the top middle; the icon takes colour on hover. Hover over it for a short preview. Click it for the full forecast: the next 24 hours, the next seven days, and a link to the full forecast on Windy. You can enter a city yourself instead of using your IP address. The details are in [Your data](#your-data).
- **Settings and help.** Press `?` anywhere on the page, or click the gear at the top right, to open the settings. They switch the weather, the links, the quote and the time zones on or off, set the location, and reset all choices. The Help button in that window opens a guide to every feature, without screenshots. Press `Esc` to close.
- **Hidden details.** A few small details are tucked away in the page. Look closely and explore.

## Use it

There are three ways to use it, from easiest to most control. You do not need to install anything for the first one.

1. **Use the online version.** Open [the start page](https://drallas.github.io/Minimal-StartPage/), bookmark it and set it as your homepage. This also works on a phone: in Safari, tap Share and then Add to Home Screen.
2. **Install a copy on your computer.** The page then works offline; only searches and the AI links need an internet connection. Download the files, unzip them, open `index.html` and set it as your homepage. Step-by-step instructions for Windows and macOS are in [Installation.md](Installation.md).
3. **Use Git.** If you already work with Git, clone the repository and pull new changes whenever you like. Details are in [Installation.md](Installation.md).

## Your data

Searches go straight to the search engine you chose. The page only stores your choices for the search engine, theme, wallpaper, clock, date format and weather in your browser.

The weather is off by default. When you turn it on, the page finds your place in one of two ways. By default it sends your IP address to [ipapi.co](https://ipapi.co) to find your approximate city; your IP address is then shown just under the footer. If you turn that lookup off and enter a city instead, only that city name is sent to [Open-Meteo](https://open-meteo.com) to find its coordinates, and no IP address is sent at all. In both cases the coordinates go to Open-Meteo to get the forecast. Responses are kept in your browser for 24 hours (location) and 30 minutes (forecast).

Showing your IP address is a separate choice, off by default, and it works whether or not the weather is on. When it is on, the page asks [ipapi.co](https://ipapi.co) for it and shows it just under the footer; hover over it to see your city, country and provider. Nothing else leaves the page.

## Customise

If you are comfortable editing text files, you can change the page yourself. Use any plain text editor, such as Notepad on Windows or TextEdit on macOS (set it to plain text first).

- **Shortcut links:** edit the links in `index.html`.
- **Search engines:** edit the `engines` list in `script.js`.
- **Colours:** edit the colours in `color.css`.

## Credits

The wallpapers are photos from [Unsplash](https://unsplash.com), used under the Unsplash License.

The Claude, ChatGPT, Grok, Kagi, Brave and Google icons come from [LobeHub Icons](https://github.com/lobehub/lobe-icons) (MIT). The DuckDuckGo icon and the logos of the permanent links (Wikipedia, Google, Apple, Facebook, X, Instagram and GitHub) come from [Simple Icons](https://simpleicons.org) (CC0). Microsoft and Reuters are shown by their names, since their logos are not in the open icon set. The logos are trademarks of their owners. The logos are trademarks of their owners.

The gear icon is from [Feather](https://feathericons.com) (MIT).

## License

Released under the [MIT License](LICENSE). Use, copy, modify and share it however you like. It comes without warranty, and the author is not liable for any damage.
