<h1 align="center">Minimal-StartPage</h1>

<p align="center">
  A minimal start page with search, a clock, and a light, dark or system theme.
</p>

<p align="center">
  <a href="https://drallas.github.io/Minimal-StartPage/"><strong>Open the start page</strong></a>
</p>

<p align="center">
  <a href="Installation.md">Installation</a>
</p>

---

<table>
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
- **Clock.** The time sits above the search bar, with the date underneath. Hover over the time to see your time zone and its offset from UTC. Click the time to switch between 24-hour and 12-hour (AM/PM) format.
- **Date.** Hover over the date to see the ISO week number and the day of the year. Click the date to switch between the long form and DD-MM-YYYY.
- **Quote.** A short quote from a philosopher or teacher, changing every six hours. There are 50 quotes, shown in your browser's language (English, Dutch, German, French, Spanish or Chinese, falling back to English). Click the quote to see the next one.
- **Shortcuts.** A Wikipedia link in the top left, and links to Claude, ChatGPT, Grok and Duck.ai below the search bar under the caption "Ask AI".
- **Background.** Quiet controls sit in the bottom corners. The slider on the left gives the background a subtle tint in any hue (drag back to the far left for the neutral look). The circles on the right pick a wallpaper or none. Wallpapers adapt to light and dark mode, and your choice is remembered.
- **Hidden details.** A few small details are tucked away in the page. Look closely and explore.

## Your data

Searches go straight to the search engine you chose. The page only stores your choices for the search engine, theme, clock and date format in your browser. Nothing is sent anywhere else.

## Customise

- **Shortcut links:** edit the links in `index.html`.
- **Search engines:** edit the `engines` list in `script.js`.
- **Colours:** edit the tokens in `color.css`.

## Credits

The wallpapers are photos from [Unsplash](https://unsplash.com), used under the Unsplash License.

The Claude, ChatGPT, Grok, Kagi, Brave and Google icons come from [LobeHub Icons](https://github.com/lobehub/lobe-icons) (MIT). The DuckDuckGo icon comes from [Simple Icons](https://simpleicons.org) (CC0). The logos are trademarks of their owners.

## License

Released under the [MIT License](LICENSE). Use, copy, modify and share it however you like. It comes without warranty, and the author is not liable for any damage.
