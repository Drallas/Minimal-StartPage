<h1 align="center">Minimal-StartPage</h1>

<p align="center">
  A minimal start page with search, a clock, and a light, dark or system theme.
</p>

<p align="center">
  <a href="Installation.md">Installation</a>
</p>

---

<table>
  <tr>
    <td align="center">
      <img src="assets/screenshot_dark.png" width="800" alt="Dark theme"/>
      <br/>
      <sub><b>Dark theme</b></sub>
    </td>
  </tr>
  <tr>
    <td align="center">
      <img src="assets/screenshot_light.png" width="800" alt="Light theme"/>
      <br/>
      <sub><b>Light theme</b></sub>
    </td>
  </tr>
</table>

## Features

- **Search.** Type a query and press Enter, or click the magnifier on the right of the search bar. An empty search shows a short hint instead of doing nothing.
- **Search engine.** The icon on the left of the search bar shows the current engine (Brave, Google or DuckDuckGo). Click it to cycle to the next one. Your choice is remembered.
- **Theme.** Follows your system's light or dark setting by default. The icons in the top right switch to a fixed Light or Dark theme, and that choice is remembered too. Choose the monitor icon to go back to following the system.
- **Clock.** The date and time sit at the top of the page.
- **Shortcuts.** A Wikipedia link in the top left, and links to Claude, ChatGPT and Grok below the search bar.

## Your data

Searches go straight to the search engine you chose. The page only stores two settings in your browser: the search engine and the theme. Nothing is sent anywhere else.

## Customise

- **Shortcut links:** edit the links in `index.html`.
- **Search engines:** edit the `engines` list in `script.js`.
- **Colours:** edit the tokens in `color.css`.

## Credits

The Claude, ChatGPT and Grok icons come from [LobeHub Icons](https://github.com/lobehub/lobe-icons) (MIT). The logos are trademarks of their owners.

## License

Released under the [MIT License](LICENSE). Use, copy, modify and share it however you like. It comes without warranty, and the author is not liable for any damage.
