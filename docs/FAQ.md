# Questions and answers

Short answers to what people ask most often. The [README](../README.md) has the list of features.

---

## Do I need an account?

No. The page keeps your choices in your browser. There is no sign-in and no server that stores anything about you.

---

## What leaves the page?

Only what you switch on:

- Weather sends your IP address to ipapi.co, or the city you chose to Open-Meteo.
- Extra weather places send their name to Open-Meteo.
- The IP details button, and nothing else, asks ipapi.co for your address.

Searches go straight to the search engine you chose. The AI links open the AI service you click.

---

## Why is the colour a button and not a slider?

On a phone a slider is hard to grab. The button steps through a few colours in the same order everywhere, and it shows the colour it is on. On a computer it is the same button, so both work the same way.

---

## How do I turn the wallpaper off?

Press the round button at the bottom right until it shows **No background**. You can also switch the wallpaper off in the settings, or leave a single wallpaper switched off in Data beheren, under Background.

---

## Why are there placeholders for the wallpapers?

The real photos are not added yet. The three placeholders are gradients, so the button and the list already work. To use a photo later, give a wallpaper an image in `script.js`; the rest stays the same.

---

## Why does a city show in English?

The city search looks in English and in Dutch, and shows the name that matches what you typed. Typing Keulen gives Keulen, and typing Cologne gives Cologne. Places with one name in both languages, such as Shanghai, show that name.

---

## The forecast shows six hours. Can I see more?

The window shows the next six hours and the next seven days. For the full picture, use the link to Windy at the bottom of the forecast.

---

## Where did my links and places go?

They are only in this browser. Export your data first from the Advanced settings, and import it on another device or after a reset. "Reset settings" brings back the defaults, and "Delete my links, AI shortcuts and places" asks first before it removes your own.

---

## Does it work offline?

Yes, once the files are on your computer. Only searches, the weather, the IP details and the AI links need an internet connection. See [Installation.md](../Installation.md).

---

## Can I change the permanent links or the search engines?

Yes, if you are comfortable editing text files. The [README](../README.md#customise) says where.
