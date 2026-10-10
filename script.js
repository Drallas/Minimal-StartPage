const root = document.documentElement
const searchForm = document.getElementById('searchform')
const searchBox = document.getElementById('search')
const engineButton = document.getElementById('engine')
const clockTime = document.getElementById('time')
const clockDate = document.getElementById('date')
const modeButtons = document.querySelectorAll('[data-theme-value]')


const engines = [
  { name: 'Kagi', url: 'https://kagi.com/search?q=', icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" fill-rule="evenodd" aria-hidden="true"><path d="M14.498 18.392h-5.14c-1.39 0-1.632-1.508-1.39-2.11.12-.302.423-.724.664-1.026a6.81 6.81 0 003.326.845 6.945 6.945 0 006.954-6.935c0-2.05-.907-3.86-2.298-5.186l.181-.181c.363-.362.907-.603 1.451-.543l.847.06V0h-1.451c-1.693 0-3.084 1.025-3.689 2.472a6.83 6.83 0 00-1.934-.301 6.945 6.945 0 00-6.954 6.935c0 1.507.484 2.954 1.33 4.1a1.84 1.84 0 01-.423.302l-.181.18c-1.391 1.327-2.056 3.015-1.693 4.945.181 1.025 1.088 2.11 1.995 2.714.605.422 1.39.603 2.177.603l5.804-.242c.665 0 1.27.302 1.633.905L16.432 24 20 22.794l-.605-1.327a5.425 5.425 0 00-4.897-3.075zm-2.48-12.543c1.814 0 3.326 1.508 3.326 3.317 0 1.809-1.512 3.316-3.325 3.316-1.814 0-3.326-1.507-3.326-3.316 0-1.87 1.451-3.317 3.325-3.317z"></path></svg>` },
  { name: 'Brave', url: 'https://search.brave.com/search?q=', icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" fill-rule="evenodd" aria-hidden="true"><path d="M17.544 2.375c.017-.005 1.844-.5 2.712.361.872.872 1.588 1.642 1.588 1.642l-.565 1.38v-.003.006-.003L22 7.8c-.014.05-2.112 7.983-2.357 8.954-.488 1.924-.819 2.663-2.202 3.638a212.634 212.634 0 01-4.305 2.917c-.41.252-.92.691-1.383.691-.463 0-.974-.439-1.383-.691a213.099 213.099 0 01-4.306-2.917c-1.383-.975-1.72-1.714-2.2-3.632-.246-.977-2.35-8.904-2.364-8.96l.722-2.045-.566-1.383s.722-.764 1.594-1.63c.866-.872 2.712-.36 2.712-.36L8.066 0h7.373l2.105 2.375zm-5.797 12.557c-.138 0-1.04.318-1.762.691l-.457.234c-.487.253-.823.428-.956.506-.168.108-.066.306.09.414.15.103 2.195 1.684 2.394 1.865l.09.078c.186.168.432.391.607.391.174 0 .415-.223.607-.391l.084-.078c.2-.169 2.244-1.756 2.394-1.865.15-.108.258-.3.09-.408-.133-.084-.475-.253-.956-.506h-.006l-.457-.24c-.722-.373-1.623-.691-1.762-.691zm.006-11.276c-.35.02-.694.092-1.023.211l-.378.126c-.493.169-.969.331-1.21.331-.312 0-2.554-.428-2.584-.433 0 0-2.706 3.26-2.706 3.957 0 .577.228.805.504 1.07l.174.175 2.033 2.152.06.067c.204.204.5.498.29.998l-.043.102c-.228.535-.511 1.203-.15 1.876.384.716 1.046 1.19 1.467 1.118.42-.084 1.419-.601 1.78-.841.367-.229 1.52-1.19 1.521-1.551 0-.307-.829-.812-1.238-1.053l-.18-.12-.199-.12c-.367-.229-1.035-.644-1.047-.825-.018-.228-.017-.294.283-.853l.21-.379c.289-.487.602-1.029.536-1.426-.085-.433-.777-.685-1.36-.901l-.21-.078-.613-.229c-.583-.222-1.232-.463-1.34-.511-.145-.073-.11-.132.335-.174l.223-.025c.553-.06 1.582-.168 2.08-.03l.32.09c.564.145 1.25.337 1.316.445l.03.048c.067.09.109.145.037.53l-.121.607c-.15.806-.391 2.069-.421 2.351l-.012.115c-.042.312-.066.529.301.613.438.119.884.206 1.335.259.216 0 .824-.144 1.24-.24l.095-.025c.367-.078.343-.289.3-.602l-.011-.12c-.03-.282-.27-1.54-.42-2.345l-.122-.614c-.072-.384-.024-.439.036-.529l.03-.048c.067-.108.753-.294 1.318-.444l.318-.091c.5-.138 1.528-.03 2.081.03l.216.018c.451.048.493.108.343.18-.11.049-.758.29-1.341.512-.273.108-.547.21-.823.307-.583.216-1.275.468-1.36.907-.066.391.247.939.535 1.42l.21.379c.301.56.308.625.284.854-.012.18-.68.595-1.053.824l-.192.126-.181.108c-.41.247-1.238.758-1.238 1.059 0 .367 1.16 1.316 1.521 1.55.367.235 1.36.758 1.78.836.421.078 1.082-.396 1.467-1.112.36-.673.078-1.335-.15-1.876l-.042-.102c-.21-.5.084-.794.289-1.004l.065-.06 2.02-2.147.181-.181c.271-.265.505-.493.505-1.07 0-.698-2.706-3.957-2.706-3.957-.03.006-2.275.44-2.586.44l.007-.007c-.252 0-.722-.156-1.215-.337l-.379-.12c-.612-.21-1.02-.21-1.022-.21z"></path></svg>` },
  { name: 'Google', url: 'https://www.google.com/search?q=', icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" fill-rule="evenodd" aria-hidden="true"><path d="M23 12.245c0-.905-.075-1.565-.236-2.25h-10.54v4.083h6.186c-.124 1.014-.797 2.542-2.294 3.569l-.021.136 3.332 2.53.23.022C21.779 18.417 23 15.593 23 12.245z"></path><path d="M12.225 23c3.03 0 5.574-.978 7.433-2.665l-3.542-2.688c-.948.648-2.22 1.1-3.891 1.1a6.745 6.745 0 01-6.386-4.572l-.132.011-3.465 2.628-.045.124C4.043 20.531 7.835 23 12.225 23z"></path><path d="M5.84 14.175A6.65 6.65 0 015.463 12c0-.758.138-1.491.361-2.175l-.006-.147-3.508-2.67-.115.054A10.831 10.831 0 001 12c0 1.772.436 3.447 1.197 4.938l3.642-2.763z"></path><path d="M12.225 5.253c2.108 0 3.529.892 4.34 1.638l3.167-3.031C17.787 2.088 15.255 1 12.225 1 7.834 1 4.043 3.469 2.197 7.062l3.63 2.763a6.77 6.77 0 016.398-4.572z"></path></svg>` },
  { name: 'DuckDuckGo', url: 'https://duckduckgo.com/?q=', icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 .984C18.083.984 23.016 5.916 23.016 12S18.084 23.016 12 23.016.984 18.084.984 12C.984 5.917 5.916.984 12 .984zm0 .938C6.434 1.922 1.922 6.434 1.922 12c0 4.437 2.867 8.205 6.85 9.55-.237-.82-.776-2.753-1.6-6.052-1.184-4.741-2.064-8.606 2.379-9.813.047-.011.064-.064.03-.093-.514-.467-1.382-.548-2.233-.38a.06.06 0 0 1-.07-.058c0-.011 0-.023.011-.035.205-.286.572-.507.822-.64a1.843 1.843 0 0 0-.607-.335c-.059-.022-.059-.12-.006-.144.006-.006.012-.012.024-.012 1.749-.233 3.586.292 4.49 1.448.011.011.023.017.035.023 2.968.635 3.509 4.837 3.328 5.998a9.607 9.607 0 0 0 2.346-.576c.746-.286 1.008-.222 1.101-.053.1.193-.018.513-.28.81-.496.567-1.393 1.01-2.974 1.137-.546.044-1.029.024-1.445.006-.789-.035-1.339-.059-1.633.39-.192.298-.041.998 1.487 1.22 1.09.157 2.078.047 2.798-.034.643-.07 1.073-.118 1.172.069.21.402-.996 1.207-3.066 1.224-.158 0-.315-.006-.467-.011-1.283-.065-2.227-.414-2.816-.735a.094.094 0 0 1-.035-.017c-.105-.059-.31.045-.188.267.07.134.444.478 1.004.776-.058.466.087 1.184.338 2l.088-.016c.041-.009.087-.019.134-.025.507-.082.775.012.926.175.717-.536 1.913-1.294 2.03-1.154.583.694.66 2.332.53 2.99-.004.012-.017.024-.04.035-.274.117-1.783-.296-1.783-.511-.059-1.075-.26-1.173-.493-1.225h-.156c.006.006.012.018.018.03l.052.12c.093.257.24 1.063.13 1.26-.112.199-.835.297-1.284.303-.443.006-.543-.158-.637-.408-.07-.204-.103-.675-.103-.95a.857.857 0 0 1 .012-.216c-.134.058-.333.193-.397.281-.017.262-.017.682.123 1.149.07.221-1.518 1.164-1.74.99-.227-.181-.634-1.952-.459-2.67-.187.017-.338.075-.42.191-.367.508.093 2.933.582 3.248.257.169 1.54-.553 2.176-1.095.105.145.305.158.553.158.326-.012.782-.06 1.103-.158.192.45.423.972.613 1.388 4.47-1.032 7.803-5.037 7.803-9.82 0-5.566-4.512-10.078-10.078-10.078zm1.791 5.646c-.42 0-.678.146-.795.332-.023.047.047.094.094.07.14-.075.357-.161.701-.156.328.006.516.09.67.159l.023.01c.041.017.088-.03.059-.065-.134-.18-.332-.35-.752-.35zm-5.078.198a1.24 1.24 0 0 0-.522.082c-.454.169-.67.526-.67.76 0 .051.112.057.141.011.081-.123.21-.31.617-.478.408-.17.73-.146.951-.094.047.012.083-.041.041-.07a.989.989 0 0 0-.558-.211zm5.434 1.423a.651.651 0 0 0-.655.647.652.652 0 0 0 1.307 0 .646.646 0 0 0-.652-.647zm.283.262h.008a.17.17 0 0 1 .17.17c0 .093-.077.17-.17.17a.17.17 0 0 1-.17-.17c0-.09.072-.165.162-.17zm-5.358.076a.752.752 0 0 0-.758.758c0 .42.338.758.758.758s.758-.337.758-.758a.756.756 0 0 0-.758-.758zm.328.303h.01c.112 0 .2.089.2.2 0 .11-.088.197-.2.197a.195.195 0 0 1-.197-.198c0-.107.082-.194.187-.199z"/></svg>` }
]

// DuckDuckGo is the default until the visitor picks another engine.
let engine = engines.findIndex((e) => e.name === 'DuckDuckGo')
try {
  const saved = engines.findIndex((e) => e.name === localStorage.getItem('engine'))
  if (saved >= 0) engine = saved
} catch {}

const showEngine = () => {
  engineButton.innerHTML = engines[engine].icon
  engineButton.title = `Search engine: ${engines[engine].name}. Click to change.`
  engineButton.setAttribute('aria-label', engineButton.title)
}
showEngine()

engineButton.addEventListener('click', () => {
  engine = (engine + 1) % engines.length
  showEngine()
  try { localStorage.setItem('engine', engines[engine].name) } catch {}
  searchBox.focus()
})

// Enter submits the form; preventDefault keeps the page from reloading.
// An empty submit gets a short hint in the field instead of doing nothing.
let hintTimer
searchForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const value = searchBox.value.trim()
  if (value.length > 0) {
    location.href = engines[engine].url + encodeURIComponent(value)
    return
  }
  searchBox.value = ''
  searchBox.placeholder = 'Type something to search'
  searchBox.focus()
  clearTimeout(hintTimer)
  hintTimer = setTimeout(() => { searchBox.placeholder = '' }, 1500)
})

// Clock: click the time to cycle through 24-hour, 12-hour (AM/PM) and full time (with ticking seconds
// and blinking colons). Hover shows the time zone.
const clockModes = ['24', '12', 'full']
let clockMode = '24'
try {
  const saved = localStorage.getItem('clockFormat')
  if (clockModes.includes(saved)) clockMode = saved
} catch {}

// Date: click to switch between the long date and DD-MM-YYYY; hover shows the ISO week and day of the year.
let dateNumeric = false
try { dateNumeric = localStorage.getItem('dateFormat') === 'numeric' } catch {}

const isoWeek = (d) => {
  const t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()))
  const day = t.getUTCDay() || 7
  t.setUTCDate(t.getUTCDate() + 4 - day)
  const yearStart = new Date(Date.UTC(t.getUTCFullYear(), 0, 1))
  return Math.ceil(((t - yearStart) / 864e5 + 1) / 7)
}
// Round, not floor: daylight saving shifts the difference by an hour.
const dayOfYear = (d) => Math.round((new Date(d.getFullYear(), d.getMonth(), d.getDate()) - new Date(d.getFullYear(), 0, 0)) / 864e5)
const isLeap = (y) => (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0

// Each colon is its own element, so the full time can blink it.
const colon = () => Object.assign(document.createElement('span'), { className: 'colon', textContent: ':' })

const updateClock = () => {
  const now = new Date()
  const full = clockMode === 'full'
  const time = now.toLocaleTimeString(
    clockMode === '12' ? 'en-US' : 'en-GB',
    full
      ? { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false }
      : { hour: '2-digit', minute: '2-digit', hour12: clockMode === '12' }
  )
  const date = dateNumeric
    ? [String(now.getDate()).padStart(2, '0'), String(now.getMonth() + 1).padStart(2, '0'), now.getFullYear()].join('-')
    : now.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })
  const offset = -now.getTimezoneOffset()
  const sign = offset >= 0 ? '+' : '-'
  const hh = String(Math.floor(Math.abs(offset) / 60)).padStart(2, '0')
  const mm = String(Math.abs(offset) % 60).padStart(2, '0')
  const zone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Local time'
  if (full) {
    const [hours, minutes, seconds] = time.split(':')
    clockTime.replaceChildren(hours, colon(), minutes, colon(), seconds)
  } else {
    clockTime.textContent = time
  }
  clockTime.dateTime = now.toISOString()
  clockTime.title = `${zone} (UTC${sign}${hh}:${mm})`
  clockDate.textContent = date
  clockDate.title = `Week ${isoWeek(now)} · day ${dayOfYear(now)} of ${isLeap(now.getFullYear()) ? 366 : 365}`
}
updateClock()
// Once a second, so the seconds in full time tick; the other modes only change once a minute.
setInterval(updateClock, 1000)

clockDate.addEventListener('click', () => {
  dateNumeric = !dateNumeric
  try { localStorage.setItem('dateFormat', dateNumeric ? 'numeric' : 'long') } catch {}
  updateClock()
})

clockTime.addEventListener('click', () => {
  clockMode = clockModes[(clockModes.indexOf(clockMode) + 1) % clockModes.length]
  try { localStorage.setItem('clockFormat', clockMode) } catch {}
  updateClock()
})

// Weather is off until you turn it on. It finds your place from your IP address (ipapi.co) or from a city
// you enter (Open-Meteo search), then asks Open-Meteo for the forecast. Both send data outside this page.
const weatherButton = document.getElementById('weather-button')
const weatherDetail = document.getElementById('weather-detail')
const ipLine = document.getElementById('ip')
const settingsButton = document.getElementById('settings-button')
const settings = document.getElementById('settings')
const settingsFields = {
  weather: document.getElementById('set-weather'),
  locIp: document.getElementById('loc-ip'),
  locCity: document.getElementById('loc-city'),
  showIp: document.getElementById('set-showip'),
  quote: document.getElementById('set-quote'),
  zones: document.getElementById('set-zones'),
  cityForm: document.getElementById('city-form'),
  cityInput: document.getElementById('city-input'),
  cityClear: document.getElementById('city-clear'),
  cityMessage: document.getElementById('city-msg'),
  reset: document.getElementById('reset-all'),
}

const readFlag = (key, fallback) => {
  try { return localStorage.getItem(key) === null ? fallback : localStorage.getItem(key) === 'on' } catch { return fallback }
}
const writeKey = (key, value) => { try { localStorage.setItem(key, value) } catch {} }

let weatherOn = readFlag('weather', false)
let quoteOn = readFlag('quote', false)
let showIpOn = readFlag('showIp', false)
let lastIp = null
let lastInfo = ''
// The IP address line under the footer: only when we have one and it is wanted.
const updateIpLine = () => {
  ipLine.textContent = lastIp && showIpOn ? `${t.ip}: ${lastIp}` : ''
  ipLine.title = lastInfo
  ipLine.hidden = !(lastIp && showIpOn)
}
// Showing the IP address is its own choice. It asks ipapi.co, the same service the IP location uses.
const fetchMyIp = async () => {
  if (!showIpOn) {
    lastIp = null
    lastInfo = ''
    updateIpLine()
    return
  }
  try {
    const info = await fetchCached('ipInfo', 24 * 3600e3, 'https://ipapi.co/json/')
    lastIp = info.ip
    lastInfo = [`${info.city}, ${info.country_name}`, info.org].filter(Boolean).join(' · ')
  } catch {
    lastIp = null
    lastInfo = ''
  }
  updateIpLine()
}
let city = null
try { city = JSON.parse(localStorage.getItem('city') || 'null') } catch {}
// 'ip' finds the place from the IP address; 'city' uses the city the visitor entered.
let locationMode = city ? 'city' : 'ip'
try {
  const saved = localStorage.getItem('location')
  if (saved === 'ip' || saved === 'city') locationMode = saved
} catch {}

const uiLang = (navigator.language || 'en').slice(0, 2).toLowerCase()
const weatherWords = {
  en: { clear: 'Clear', mostly: 'Mostly clear', partly: 'Partly cloudy', cloudy: 'Cloudy', fog: 'Fog', drizzle: 'Drizzle', rain: 'Rain', heavyRain: 'Heavy rain', snow: 'Snow', heavySnow: 'Heavy snow', showers: 'Showers', heavyShowers: 'Heavy showers', storm: 'Thunderstorm' },
  nl: { clear: 'Helder', mostly: 'Overwegend helder', partly: 'Deels bewolkt', cloudy: 'Bewolkt', fog: 'Mist', drizzle: 'Motregen', rain: 'Regen', heavyRain: 'Zware regen', snow: 'Sneeuw', heavySnow: 'Zware sneeuw', showers: 'Buien', heavyShowers: 'Zware buien', storm: 'Onweer' },
  de: { clear: 'Klar', mostly: 'Überwiegend klar', partly: 'Teilweise bewölkt', cloudy: 'Bewölkt', fog: 'Nebel', drizzle: 'Nieselregen', rain: 'Regen', heavyRain: 'Starker Regen', snow: 'Schnee', heavySnow: 'Starker Schnee', showers: 'Schauer', heavyShowers: 'Starke Schauer', storm: 'Gewitter' },
  fr: { clear: 'Dégagé', mostly: 'Plutôt dégagé', partly: 'Partiellement nuageux', cloudy: 'Nuageux', fog: 'Brouillard', drizzle: 'Bruine', rain: 'Pluie', heavyRain: 'Forte pluie', snow: 'Neige', heavySnow: 'Forte neige', showers: 'Averses', heavyShowers: 'Fortes averses', storm: 'Orage' },
  es: { clear: 'Despejado', mostly: 'Mayormente despejado', partly: 'Parcialmente nublado', cloudy: 'Nublado', fog: 'Niebla', drizzle: 'Llovizna', rain: 'Lluvia', heavyRain: 'Lluvia intensa', snow: 'Nieve', heavySnow: 'Nieve intensa', showers: 'Chubascos', heavyShowers: 'Chubascos intensos', storm: 'Tormenta' },
  zh: { clear: '晴', mostly: '大部晴朗', partly: '局部多云', cloudy: '多云', fog: '雾', drizzle: '毛毛雨', rain: '雨', heavyRain: '大雨', snow: '雪', heavySnow: '大雪', showers: '阵雨', heavyShowers: '强阵雨', storm: '雷暴' },
}
const text = {
  en: { show: 'Show weather', hide: 'Hide weather', loading: 'Loading…', unavailable: 'Weather unavailable', noSource: 'Set a city in settings', ip: 'Internet IP', title: 'Settings', hint: 'Press ? to open this panel and Esc to close it.', weather: 'Show weather', lookup: 'Find my city from my IP address', cityLabel: 'Or enter a city', cityPlaceholder: 'For example Utrecht', save: 'Save', clearCity: 'Use my IP address instead', notFound: 'City not found', quote: 'Show the quote', privacy: 'Weather sends your IP address to ipapi.co, or the city you enter to Open-Meteo, and only while weather is on. Nothing else leaves the page.', reset: 'Reset all choices', close: 'Close', open: 'Settings and help' , showIp: 'Show my IP address under the footer'},
  nl: { show: 'Toon weer', hide: 'Verberg weer', loading: 'Laden…', unavailable: 'Weer niet beschikbaar', noSource: 'Stel een plaats in bij instellingen', ip: 'Internet-IP', title: 'Instellingen', hint: 'Druk op ? om dit venster te openen en op Esc om het te sluiten.', weather: 'Weer tonen', lookup: 'Mijn plaats zoeken op basis van mijn IP-adres', cityLabel: 'Of vul een plaats in', cityPlaceholder: 'Bijvoorbeeld Utrecht', save: 'Opslaan', clearCity: 'Liever mijn IP-adres gebruiken', notFound: 'Plaats niet gevonden', quote: 'Citaat tonen', privacy: 'Het weer stuurt je IP-adres naar ipapi.co, of de plaats die je invult naar Open-Meteo, en alleen als het weer aanstaat. Er gaat verder niets naar buiten.', reset: 'Alle keuzes resetten', close: 'Sluiten', open: 'Instellingen en hulp' , showIp: 'Mijn IP-adres onder de footer tonen'},
  de: { show: 'Wetter anzeigen', hide: 'Wetter ausblenden', loading: 'Lädt…', unavailable: 'Wetter nicht verfügbar', noSource: 'Ort in den Einstellungen festlegen', ip: 'Internet-IP', title: 'Einstellungen', hint: 'Drücke ?, um dieses Fenster zu öffnen, und Esc, um es zu schließen.', weather: 'Wetter anzeigen', lookup: 'Meinen Ort über meine IP-Adresse suchen', cityLabel: 'Oder einen Ort eingeben', cityPlaceholder: 'Zum Beispiel Utrecht', save: 'Speichern', clearCity: 'Stattdessen meine IP-Adresse verwenden', notFound: 'Ort nicht gefunden', quote: 'Zitat anzeigen', privacy: 'Das Wetter sendet deine IP-Adresse an ipapi.co bzw. den eingegebenen Ort an Open-Meteo, und nur wenn das Wetter aktiv ist. Sonst verlässt nichts die Seite.', reset: 'Alle Einstellungen zurücksetzen', close: 'Schließen', open: 'Einstellungen und Hilfe' , showIp: 'Meine IP-Adresse unter der Fußzeile anzeigen'},
  fr: { show: 'Afficher la météo', hide: 'Masquer la météo', loading: 'Chargement…', unavailable: 'Météo indisponible', noSource: 'Réglez une ville dans les paramètres', ip: 'IP internet', title: 'Paramètres', hint: 'Appuyez sur ? pour ouvrir ce panneau et sur Échap pour le fermer.', weather: 'Afficher la météo', lookup: 'Trouver ma ville à partir de mon adresse IP', cityLabel: 'Ou saisissez une ville', cityPlaceholder: 'Par exemple Utrecht', save: 'Enregistrer', clearCity: 'Utiliser plutôt mon adresse IP', notFound: 'Ville introuvable', quote: 'Afficher la citation', privacy: 'La météo envoie votre adresse IP à ipapi.co, ou la ville saisie à Open-Meteo, et seulement lorsqu’elle est activée. Rien d’autre ne quitte la page.', reset: 'Réinitialiser tous les choix', close: 'Fermer', open: 'Paramètres et aide' , showIp: 'Afficher mon adresse IP sous le pied de page'},
  es: { show: 'Mostrar el tiempo', hide: 'Ocultar el tiempo', loading: 'Cargando…', unavailable: 'Tiempo no disponible', noSource: 'Elige una ciudad en los ajustes', ip: 'IP de internet', title: 'Ajustes', hint: 'Pulsa ? para abrir este panel y Esc para cerrarlo.', weather: 'Mostrar el tiempo', lookup: 'Buscar mi ciudad a partir de mi IP', cityLabel: 'O introduce una ciudad', cityPlaceholder: 'Por ejemplo Utrecht', save: 'Guardar', clearCity: 'Usar mi IP en su lugar', notFound: 'Ciudad no encontrada', quote: 'Mostrar la cita', privacy: 'El tiempo envía tu IP a ipapi.co, o la ciudad que escribas a Open-Meteo, y solo mientras esté activado. Nada más sale de la página.', reset: 'Restablecer todas las opciones', close: 'Cerrar', open: 'Ajustes y ayuda' , showIp: 'Mostrar mi IP debajo del pie'},
  zh: { show: '显示天气', hide: '隐藏天气', loading: '加载中…', unavailable: '天气不可用', noSource: '请在设置中填写城市', ip: '互联网 IP', title: '设置', hint: '按 ? 打开此面板，按 Esc 关闭。', weather: '显示天气', lookup: '根据 IP 地址查找我的城市', cityLabel: '或输入城市', cityPlaceholder: '例如 乌得勒支', save: '保存', clearCity: '改用我的 IP 地址', notFound: '未找到该城市', quote: '显示名言', privacy: '开启天气时，页面会把你的 IP 地址发送到 ipapi.co，或把你输入的城市发送到 Open-Meteo。除此之外，页面不会发送任何内容。', reset: '重置所有设置', close: '关闭', open: '设置与帮助' , showIp: '在页脚下方显示我的 IP 地址'},
}
const forecastText = {
  en: { now: 'Now', hours: 'Next 24 hours', days: 'Next 7 days', feels: 'Feels like', wind: 'Wind', humidity: 'Humidity', more: 'Click for the full forecast', windy: 'Full forecast on Windy', rain: 'Rain' },
  nl: { now: 'Nu', hours: 'Komende 24 uur', days: 'Komende 7 dagen', feels: 'Voelt als', wind: 'Wind', humidity: 'Luchtvochtigheid', more: 'Klik voor de volledige verwachting', windy: 'Volledige verwachting op Windy', rain: 'Regen' },
  de: { now: 'Jetzt', hours: 'Nächste 24 Stunden', days: 'Nächste 7 Tage', feels: 'Gefühlt', wind: 'Wind', humidity: 'Luftfeuchtigkeit', more: 'Klicken für die vollständige Vorhersage', windy: 'Vollständige Vorhersage auf Windy', rain: 'Regen' },
  fr: { now: 'Maintenant', hours: '24 prochaines heures', days: '7 prochains jours', feels: 'Ressenti', wind: 'Vent', humidity: 'Humidité', more: 'Cliquez pour les prévisions complètes', windy: 'Prévisions complètes sur Windy', rain: 'Pluie' },
  es: { now: 'Ahora', hours: 'Próximas 24 horas', days: 'Próximos 7 días', feels: 'Sensación', wind: 'Viento', humidity: 'Humedad', more: 'Haz clic para la previsión completa', windy: 'Previsión completa en Windy', rain: 'Lluvia' },
  zh: { now: '现在', hours: '未来 24 小时', days: '未来 7 天', feels: '体感', wind: '风', humidity: '湿度', more: '点击查看完整预报', windy: '在 Windy 查看完整预报', rain: '降水' },
}
const hourHeads = { en: ['Time', 'Temp', 'Rain', 'Wind'], nl: ['Tijd', 'Temp', 'Regen', 'Wind'], de: ['Zeit', 'Temp.', 'Regen', 'Wind'], fr: ['Heure', 'Temp.', 'Pluie', 'Vent'], es: ['Hora', 'Temp.', 'Lluvia', 'Viento'], zh: ['时间', '气温', '降水', '风'] }
const zonesText = {
  en: { zonesToggle: 'Show time zones (globe next to the date)', zonesTitle: 'Time zones', zonesLocal: 'This computer', zonesAdd: 'Add a time zone (up to five)', zoneAddBtn: 'Add', zonesEmpty: 'No extra time zones yet.', zonesMax: 'You can show up to five.', zoneNotFound: 'Time zone not found', zoneDuplicate: 'Already in the list', remove: 'Remove', zonesButton: 'Time zones' },
  nl: { zonesToggle: 'Wereldklok tonen (bolletje naast de datum)', zonesTitle: 'Tijdzones', zonesLocal: 'Deze computer', zonesAdd: 'Tijdzone toevoegen (maximaal vijf)', zoneAddBtn: 'Toevoegen', zonesEmpty: 'Nog geen extra tijdzones.', zonesMax: 'Je kunt er maximaal vijf tonen.', zoneNotFound: 'Tijdzone niet gevonden', zoneDuplicate: 'Staat al in de lijst', remove: 'Verwijderen', zonesButton: 'Tijdzones' },
  de: { zonesToggle: 'Zeitzonen anzeigen (Kugel neben dem Datum)', zonesTitle: 'Zeitzonen', zonesLocal: 'Dieser Computer', zonesAdd: 'Zeitzone hinzufügen (bis zu fünf)', zoneAddBtn: 'Hinzufügen', zonesEmpty: 'Noch keine zusätzlichen Zeitzonen.', zonesMax: 'Du kannst höchstens fünf anzeigen.', zoneNotFound: 'Zeitzone nicht gefunden', zoneDuplicate: 'Ist schon in der Liste', remove: 'Entfernen', zonesButton: 'Zeitzonen' },
  fr: { zonesToggle: 'Afficher les fuseaux horaires (globe à côté de la date)', zonesTitle: 'Fuseaux horaires', zonesLocal: 'Cet ordinateur', zonesAdd: 'Ajouter un fuseau horaire (cinq maximum)', zoneAddBtn: 'Ajouter', zonesEmpty: 'Aucun fuseau supplémentaire.', zonesMax: 'Vous pouvez en afficher cinq au maximum.', zoneNotFound: 'Fuseau horaire introuvable', zoneDuplicate: 'Déjà dans la liste', remove: 'Supprimer', zonesButton: 'Fuseaux horaires' },
  es: { zonesToggle: 'Mostrar zonas horarias (globo junto a la fecha)', zonesTitle: 'Zonas horarias', zonesLocal: 'Este equipo', zonesAdd: 'Añadir una zona horaria (máximo cinco)', zoneAddBtn: 'Añadir', zonesEmpty: 'Aún no hay zonas adicionales.', zonesMax: 'Puedes mostrar hasta cinco.', zoneNotFound: 'Zona horaria no encontrada', zoneDuplicate: 'Ya está en la lista', remove: 'Quitar', zonesButton: 'Zonas horarias' },
  zh: { zonesToggle: '显示时区（日期旁的地球图标）', zonesTitle: '时区', zonesLocal: '本机', zonesAdd: '添加时区（最多五个）', zoneAddBtn: '添加', zonesEmpty: '还没有额外的时区。', zonesMax: '最多显示五个。', zoneNotFound: '未找到该时区', zoneDuplicate: '已在列表中', remove: '移除', zonesButton: '时区' }
}
const ipPrivacy = {'en': 'Showing your IP address also asks ipapi.co for it.', 'nl': 'Het tonen van je IP-adres vraagt het ook op bij ipapi.co.', 'de': 'Zum Anzeigen deiner IP-Adresse wird sie ebenfalls bei ipapi.co abgefragt.', 'fr': 'Afficher votre adresse IP la demande aussi à ipapi.co.', 'es': 'Mostrar tu IP también la pide a ipapi.co.', 'zh': '显示 IP 地址时，同样会向 ipapi.co 查询。'}
for (const lang of Object.keys(text)) Object.assign(text[lang], forecastText[lang], { hourHeads: hourHeads[lang] }, zonesText[lang], { ipPrivacy: ipPrivacy[lang] })
const weatherWording = {
  en: { location: 'Location', locIp: 'My IP address (finds my city)', locCity: 'A city I choose', noSource: 'Choose a place', needPlace: 'The weather needs a place: choose your IP address or a city below.' },
  nl: { location: 'Locatie', locIp: 'Mijn IP-adres (zoekt mijn plaats)', locCity: 'Een stad die ik kies', noSource: 'Kies een plaats', needPlace: 'Het weer heeft een plaats nodig: kies hieronder je IP-adres of een stad.' },
  de: { location: 'Standort', locIp: 'Meine IP-Adresse (findet meinen Ort)', locCity: 'Eine Stadt, die ich wähle', noSource: 'Ort wählen', needPlace: 'Das Wetter braucht einen Ort: wähle unten deine IP-Adresse oder eine Stadt.' },
  fr: { location: 'Position', locIp: 'Mon adresse IP (trouve ma ville)', locCity: 'Une ville que je choisis', noSource: 'Choisir un lieu', needPlace: 'La météo a besoin d’un lieu : choisissez ci-dessous votre adresse IP ou une ville.' },
  es: { location: 'Ubicación', locIp: 'Mi IP (busca mi ciudad)', locCity: 'Una ciudad que elijo', noSource: 'Elige un lugar', needPlace: 'El tiempo necesita un lugar: elige abajo tu IP o una ciudad.' },
  zh: { location: '位置', locIp: '我的 IP 地址（查找我的城市）', locCity: '我选择的城市', noSource: '选择地点', needPlace: '天气需要一个地点：请在下方选择你的 IP 地址或一个城市。' },
}
for (const lang of Object.keys(text)) Object.assign(text[lang], weatherWording[lang])
const t = text[uiLang] || text.en
const words = weatherWords[uiLang] || weatherWords.en

// Open-Meteo weather codes (WMO), grouped.
const weatherKey = (code) => {
  if (code === 0) return 'clear'
  if (code === 1) return 'mostly'
  if (code === 2) return 'partly'
  if (code === 3) return 'cloudy'
  if (code === 45 || code === 48) return 'fog'
  if (code >= 51 && code <= 55) return 'drizzle'
  if (code === 61 || code === 63) return 'rain'
  if (code === 65) return 'heavyRain'
  if (code === 71 || code === 73) return 'snow'
  if (code === 75) return 'heavySnow'
  if (code === 80 || code === 81) return 'showers'
  if (code === 82) return 'heavyShowers'
  if (code >= 95) return 'storm'
  return null
}

// Small outline icons in the page's style. The colour only shows on hover (see style.css).
const cloudPath = 'M7 18h10a4 4 0 0 0 .5-7.97A6 6 0 0 0 6.1 9.2 3.5 3.5 0 0 0 7 18z'
const sunPath = '<circle cx="9" cy="8" r="3"/><path d="M9 2v1M3.5 8h-1M4.6 3.6l.7.7M13.4 3.6l-.7.7"/>'
const weatherIcons = {
  clear: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  mostly: `${sunPath}<path d="M9 19h8a3.5 3.5 0 0 0 .4-6.97A5 5 0 0 0 8 13.5 3 3 0 0 0 9 19z"/>`,
  partly: `${sunPath}<path d="M9 19h8a3.5 3.5 0 0 0 .4-6.97A5 5 0 0 0 8 13.5 3 3 0 0 0 9 19z"/>`,
  cloudy: `<path d="${cloudPath}"/>`,
  fog: '<path d="M4 9h16M6 13h12M4 17h16"/>',
  drizzle: `<path d="${cloudPath}"/><path d="M8 21l.5-1M12 21l.5-1M16 21l.5-1"/>`,
  rain: `<path d="${cloudPath}"/><path d="M8 21l-1 1.5M12 21l-1 1.5M16 21l-1 1.5"/>`,
  heavyRain: `<path d="${cloudPath}"/><path d="M7 21l-1 1.5M11 21l-1 1.5M15 21l-1 1.5M19 21l-1 1.5"/>`,
  snow: `<path d="${cloudPath}"/><path d="M8 20h.01M12 21h.01M16 20h.01"/>`,
  heavySnow: `<path d="${cloudPath}"/><path d="M7 20h.01M10 21h.01M13 20h.01M16 21h.01"/>`,
  showers: `<path d="${cloudPath}"/><path d="M9 21l-1 1.5M15 21l-1 1.5"/>`,
  heavyShowers: `<path d="${cloudPath}"/><path d="M7 21l-1 1.5M11 21l-1 1.5M15 21l-1 1.5M19 21l-1 1.5"/>`,
  storm: `<path d="${cloudPath}"/><path d="M12.5 14.5l-2 3.5h2.5l-1.5 3.5"/>`,
}
const weatherIcon = (key) => `<svg class="weather-icon ${key || 'cloudy'}" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${weatherIcons[key] || weatherIcons.cloudy}</svg>`

// Keeps a response in localStorage for maxAge milliseconds, so a reload does not fetch again.
const fetchCached = async (key, maxAge, url) => {
  try {
    const hit = JSON.parse(localStorage.getItem(key) || 'null')
    if (hit && Date.now() - hit.at < maxAge) return hit.data
  } catch {}
  const data = await (await fetch(url)).json()
  try { localStorage.setItem(key, JSON.stringify({ at: Date.now(), data })) } catch {}
  return data
}

const weatherRow = (...cells) => {
  const row = document.createElement('div')
  row.className = 'weather-row'
  row.append(...cells.map((cell) => Object.assign(document.createElement('span'), { textContent: cell })))
  return row
}

// The city you entered wins; otherwise the IP lookup, if you allow it.
const getPlace = async () => {
  if (locationMode === 'city') return city ? { label: `${city.name}, ${city.country}`, latitude: city.latitude, longitude: city.longitude, ip: null } : null
  const info = await fetchCached('ipInfo', 24 * 3600e3, 'https://ipapi.co/json/')
  if (typeof info.latitude !== 'number') return null
  return { label: `${info.city}, ${info.country_name}`, latitude: info.latitude, longitude: info.longitude, ip: info.ip }
}

// Latest answer, kept so the full forecast can be drawn without asking again.
let current = null

const forecastUrl = (place) => 'https://api.open-meteo.com/v1/forecast' +
  `?latitude=${place.latitude}&longitude=${place.longitude}` +
  '&current=temperature_2m,weather_code,apparent_temperature,wind_speed_10m,relative_humidity_2m' +
  '&hourly=temperature_2m,precipitation_probability,wind_speed_10m,weather_code' +
  '&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max' +
  '&timezone=auto&forecast_days=7&forecast_hours=24'

const el = (tag, className, textContent) => Object.assign(document.createElement(tag), { className: className || '', textContent: textContent ?? '' })

const showWeather = async () => {
  try {
    const place = await getPlace()
    if (!place) {
      // Greyed-out icon: a click opens settings, where a place can be chosen.
      showIdle(t.noSource)
      current = null
      weatherDetail.replaceChildren()
      return
    }
    const forecast = await fetchCached(`weather:v2:${place.latitude},${place.longitude}`, 30 * 60e3, forecastUrl(place))
    current = { place, forecast }
    const now = forecast.current
    const start = forecast.hourly.time.indexOf(now.time)
    const key = weatherKey(now.weather_code)
    const temperature = `${Math.round(now.temperature_2m)}°`
    const next = forecast.hourly.time.slice(start + 1, start + 7).map((time, i) => weatherRow(
      time.slice(11, 16),
      `${Math.round(forecast.hourly.temperature_2m[start + 1 + i])}°`,
      `${forecast.hourly.precipitation_probability[start + 1 + i]}%`
    ))
    weatherButton.innerHTML = `${weatherIcon(key)}<span>${temperature}</span>`
    weatherButton.setAttribute('aria-label', `${key ? words[key] : ''} ${temperature}`.trim())
    weatherDetail.replaceChildren(
      el('div', 'preview-title', place.label),
      weatherRow(key ? words[key] : '', temperature, ''),
      ...next,
      el('div', 'preview-hint', t.more)
    )
  } catch {
    weatherButton.textContent = t.unavailable
    current = null
    weatherDetail.replaceChildren()
  }
}

const renderForecast = () => {
  if (!current) return
  const { place, forecast } = current
  const now = forecast.current
  const key = weatherKey(now.weather_code)
  const temp = (v) => `${Math.round(v)}°`
  const section = (title, nodes) => {
    const s = el('section', 'forecast-section')
    s.append(el('h3', '', title), ...nodes)
    return s
  }
  const nowIcon = el('span', 'forecast-icon')
  nowIcon.innerHTML = weatherIcon(key)
  const nowRow = el('div', 'forecast-now')
  nowRow.append(nowIcon, el('span', 'forecast-temp', temp(now.temperature_2m)), el('span', 'forecast-word', key ? words[key] : ''))
  const meta = el('div', 'forecast-meta', `${t.feels} ${temp(now.apparent_temperature)} · ${t.wind} ${Math.round(now.wind_speed_10m)} km/h · ${t.humidity} ${now.relative_humidity_2m}%`)

  const start = forecast.hourly.time.indexOf(now.time)
  const hourHeader = el('div', 'forecast-row forecast-head')
  hourHeader.append(...t.hourHeads.map((label) => el('span', '', label)))
  const hourRows = [hourHeader, ...forecast.hourly.time.slice(start + 1, start + 25).map((time, i) => {
    const row = el('div', 'forecast-row')
    const j = start + 1 + i
    row.append(
      el('span', '', time.slice(11, 16)),
      el('span', '', temp(forecast.hourly.temperature_2m[j])),
      el('span', '', `${forecast.hourly.precipitation_probability[j]}%`),
      el('span', '', `${Math.round(forecast.hourly.wind_speed_10m[j])} km/h`)
    )
    return row
  })]

  const dayRows = forecast.daily.time.map((iso, i) => {
    const row = el('div', 'forecast-row forecast-day')
    const dayKey = weatherKey(forecast.daily.weather_code[i])
    const icon = el('span', 'forecast-icon')
    icon.innerHTML = weatherIcon(dayKey)
    const label = new Date(`${iso}T12:00:00`).toLocaleDateString(uiLang, { weekday: 'short', day: 'numeric', month: 'short' })
    row.append(
      el('span', '', label),
      icon,
      el('span', '', `${temp(forecast.daily.temperature_2m_min[i])} / ${temp(forecast.daily.temperature_2m_max[i])}`),
      el('span', '', `${t.rain} ${forecast.daily.precipitation_probability_max[i]}%`)
    )
    return row
  })

  document.getElementById('forecast-title').textContent = place.label
  document.getElementById('forecast-body').replaceChildren(
    section(t.now, [nowRow, meta]),
    section(t.hours, hourRows),
    section(t.days, dayRows)
  )
  const link = document.getElementById('forecast-link')
  link.textContent = t.windy
  link.href = `https://www.windy.com/?${place.latitude},${place.longitude},8`
}

// Weather off: only a faint icon stays in the top bar, and it opens settings.
const showIdle = (label = t.show) => {
  weatherButton.classList.add('idle')
  weatherButton.innerHTML = weatherIcon(null)
  weatherButton.setAttribute('aria-label', label)
  weatherButton.title = label
}

const hideWeather = () => {
  showIdle()
  weatherButton.setAttribute('aria-expanded', 'false')
  weatherDetail.replaceChildren()
  weatherDetail.classList.remove('open')
  current = null
}

const hasSource = () => (locationMode === 'city' ? !!city : true)

// The settings say when weather is on but has no place to look up.
const updateWeatherHint = () => {
  const hint = document.getElementById('weather-hint')
  hint.textContent = t.needPlace
  hint.hidden = !(weatherOn && !hasSource())
  // The IP lookup and city belong to the weather, so they are off while it is.
  document.querySelectorAll('#weather-sub input, #weather-sub button').forEach((el) => { el.disabled = !weatherOn })
}

const setWeather = (on) => {
  weatherOn = on
  writeKey('weather', on ? 'on' : 'off')
  updateWeatherHint()
  if (on) {
    weatherButton.classList.remove('idle')
    weatherButton.removeAttribute('title')
    weatherButton.textContent = t.loading
    showWeather()
  } else {
    hideWeather()
  }
  settingsFields.weather.checked = on
}

let forecastFrom = null
const forecastDialog = document.getElementById('forecast')

const openForecast = () => {
  if (!current) return
  renderForecast()
  forecastFrom = document.activeElement
  forecastDialog.hidden = false
  document.getElementById('forecast-close').focus()
}

const closeForecast = () => {
  forecastDialog.hidden = true
  if (forecastFrom && forecastFrom.focus) forecastFrom.focus()
}

weatherButton.addEventListener('click', () => {
  if (!weatherOn || !hasSource()) {
    openSettings()
    return
  }
  openForecast()
})

// Clicking the preview, including its hint line, opens the full forecast.
weatherDetail.addEventListener('click', openForecast)

document.getElementById('forecast-close').addEventListener('click', closeForecast)
forecastDialog.addEventListener('click', (e) => { if (e.target === forecastDialog) closeForecast() })

// Settings and help: a floating panel, opened with ? and closed with Escape.
const openedFrom = { el: null }
const isTyping = (el) => !!el && el.matches && el.matches('input, textarea, select, [contenteditable="true"]')

const applySettingsText = () => {
  document.getElementById('settings-title').textContent = t.title
  document.getElementById('settings-hint').textContent = t.hint
  document.getElementById('lbl-weather').textContent = t.weather
  document.getElementById('lbl-location').textContent = t.location
  document.getElementById('lbl-loc-ip').textContent = t.locIp
  document.getElementById('lbl-loc-city').textContent = t.locCity
  document.getElementById('lbl-showip').textContent = t.showIp
  document.getElementById('lbl-city').textContent = t.cityLabel
  settingsFields.cityInput.placeholder = t.cityPlaceholder
  document.getElementById('city-save').textContent = t.save
  settingsFields.cityClear.textContent = t.clearCity
  document.getElementById('lbl-quote').textContent = t.quote
  document.getElementById('lbl-zones').textContent = t.zonesToggle
  document.getElementById('zones-title').textContent = t.zonesTitle
  document.getElementById('zone-label').textContent = t.zonesAdd
  document.getElementById('zone-add-btn').textContent = t.zoneAddBtn
  document.getElementById('zones-close').setAttribute('aria-label', t.close)
  zonesButton.setAttribute('aria-label', t.zonesButton)
  zonesButton.title = t.zonesButton
  document.getElementById('privacy').textContent = `${t.privacy} ${t.ipPrivacy}`
  settingsFields.reset.textContent = t.reset
  document.getElementById('settings-close').setAttribute('aria-label', t.close)
  document.getElementById('forecast-close').setAttribute('aria-label', t.close)
  settingsButton.setAttribute('aria-label', t.open)
  settingsButton.title = t.open
}

const syncSettings = () => {
  settingsFields.weather.checked = weatherOn
  settingsFields.locIp.checked = locationMode === 'ip'
  settingsFields.locCity.checked = locationMode === 'city'
  settingsFields.showIp.checked = showIpOn
  settingsFields.quote.checked = quoteOn
  settingsFields.zones.checked = zonesOn
  settingsFields.cityClear.hidden = !city
  updateWeatherHint()
  settingsFields.cityMessage.textContent = ''
}

const openSettings = () => {
  openedFrom.el = document.activeElement
  syncSettings()
  settings.hidden = false
  settingsFields.weather.focus()
}

const closeSettings = () => {
  settings.hidden = true
  if (openedFrom.el && openedFrom.el.focus) openedFrom.el.focus()
}

settingsButton.addEventListener('click', openSettings)
document.getElementById('settings-close').addEventListener('click', closeSettings)
settings.addEventListener('click', (e) => { if (e.target === settings) closeSettings() })

document.addEventListener('keydown', (e) => {
  const zonesWindow = document.getElementById('zones')
  const open = [forecastDialog, zonesWindow, settings].find((d) => !d.hidden) || null
  if (!open) {
    if (e.key === '?' && !isTyping(e.target) && !e.ctrlKey && !e.metaKey && !e.altKey) {
      e.preventDefault()
      openSettings()
    }
    return
  }
  if (e.key === 'Escape') {
    if (open === forecastDialog) closeForecast()
    else if (open === zonesWindow) closeZones()
    else closeSettings()
    return
  }
  if (e.key === 'Tab') {
    // Keep keyboard focus inside the open panel.
    const items = [...open.querySelectorAll('button, input, a[href]')].filter((item) => !item.hidden && !item.disabled)
    const first = items[0]
    const last = items[items.length - 1]
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus() }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus() }
  }
})

settingsFields.weather.addEventListener('change', () => setWeather(settingsFields.weather.checked))

settingsFields.showIp.addEventListener('change', () => {
  showIpOn = settingsFields.showIp.checked
  writeKey('showIp', showIpOn ? 'on' : 'off')
  fetchMyIp()
})

// Choosing a location: the IP address or the city. Either one refreshes the weather when it is on.
const setLocation = (mode) => {
  locationMode = mode
  writeKey('location', mode)
  updateWeatherHint()
  if (weatherOn) showWeather()
}
settingsFields.locIp.addEventListener('change', () => setLocation('ip'))
settingsFields.locCity.addEventListener('change', () => setLocation('city'))

settingsFields.zones.addEventListener('change', () => {
  zonesOn = settingsFields.zones.checked
  writeKey('timeZones', zonesOn ? 'on' : 'off')
  applyZonesVisibility()
  if (!zonesOn && !zonesDialog.hidden) closeZones()
})

settingsFields.quote.addEventListener('change', () => {
  quoteOn = settingsFields.quote.checked
  writeKey('quote', quoteOn ? 'on' : 'off')
  root.toggleAttribute('data-quote-off', !quoteOn)
})

settingsFields.cityForm.addEventListener('submit', async (e) => {
  e.preventDefault()
  const name = settingsFields.cityInput.value.trim()
  if (!name) return
  try {
    const found = await (await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(name)}&count=1&language=${uiLang}&format=json`)).json()
    const hit = found.results && found.results[0]
    if (!hit) {
      settingsFields.cityMessage.textContent = t.notFound
      return
    }
    city = { name: hit.name, country: hit.country, latitude: hit.latitude, longitude: hit.longitude }
    updateWeatherHint()
    writeKey('city', JSON.stringify(city))
    locationMode = 'city'
    writeKey('location', 'city')
    settingsFields.locCity.checked = true
    settingsFields.cityClear.hidden = false
    settingsFields.cityMessage.textContent = ''
    settingsFields.cityInput.value = ''
    setWeather(true)
  } catch {
    settingsFields.cityMessage.textContent = t.unavailable
  }
})

settingsFields.cityClear.addEventListener('click', () => {
  city = null
  try { localStorage.removeItem('city') } catch {}
  locationMode = 'ip'
  writeKey('location', 'ip')
  settingsFields.locIp.checked = true
  updateWeatherHint()
  settingsFields.cityClear.hidden = true
  if (weatherOn) showWeather()
})

settingsFields.reset.addEventListener('click', () => {
  try {
    const keys = ['engine', 'theme', 'clockFormat', 'dateFormat', 'wallpaper', 'hue', 'weather', 'location', 'showIp', 'quote', 'city', 'ipInfo', 'timeZones', 'zones']
    keys.forEach((key) => localStorage.removeItem(key))
    Object.keys(localStorage).filter((key) => key.startsWith('weather:')).forEach((key) => localStorage.removeItem(key))
  } catch {}
  location.reload()
})

// Time zones: optional. A small globe next to the date opens a window with up to five extra zones.
const zonesButton = document.getElementById('zones-button')
const zonesDialog = document.getElementById('zones')
const zonesList = document.getElementById('zones-list')
const zoneInput = document.getElementById('zone-input')
const zoneMsg = document.getElementById('zone-msg')
const zoneOptions = document.getElementById('zone-options')
const zoneAddButton = document.getElementById('zone-add-btn')
const zonesLocalLine = document.getElementById('zones-local')
let zonesOn = readFlag('timeZones', false)
const localZone = Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC'
const zoneNames = (() => {
  try { return Intl.supportedValuesOf('timeZone') } catch { return ['Europe/Amsterdam', 'Europe/London', 'America/New_York', 'America/Los_Angeles', 'Asia/Tokyo', 'Australia/Sydney'] }
})()
const zoneAliases = {
  beijing: 'Asia/Shanghai',
  peking: 'Asia/Shanghai',
  mumbai: 'Asia/Kolkata',
  'new delhi': 'Asia/Kolkata',
  saigon: 'Asia/Ho_Chi_Minh',
  'ho chi minh city': 'Asia/Ho_Chi_Minh',
}
let zones = []
try { zones = (JSON.parse(localStorage.getItem('zones') || '[]') || []).filter((z) => zoneNames.includes(z)).slice(0, 5) } catch {}

const cityOf = (zone) => zone.split('/').pop().replace(/_/g, ' ')
// The zone's offset from UTC in minutes, e.g. -300 for New York in winter.
const utcOffset = (zone, now) => {
  const name = new Intl.DateTimeFormat('en-US', { timeZone: zone, timeZoneName: 'longOffset' }).formatToParts(now).find((part) => part.type === 'timeZoneName').value
  const match = /GMT([+-])(\d{2}):(\d{2})/.exec(name)
  return match ? (match[1] === '-' ? -1 : 1) * (Number(match[2]) * 60 + Number(match[3])) : 0
}
// The chosen zones, ordered from the earliest offset (-12) to the latest (+14).
const sortedZones = (now) => [...zones].sort((a, b) => utcOffset(a, now) - utcOffset(b, now) || cityOf(a).localeCompare(cityOf(b)))
const zoneClock = (zone, now) => now.toLocaleTimeString(clockMode === '12' ? 'en-US' : 'en-GB', { timeZone: zone, hour: '2-digit', minute: '2-digit', hour12: clockMode === '12' })
// Whole days between the local date and the date in the other zone, read from calendar dates.
const dayDifference = (zone, now) => {
  const ymd = (tz) => new Intl.DateTimeFormat('en-CA', { timeZone: tz, year: 'numeric', month: '2-digit', day: '2-digit' }).format(now)
  return Math.round((Date.parse(ymd(zone)) - Date.parse(ymd(localZone))) / 864e5)
}
const dayWord = (diff) => (diff === 0 ? '' : new Intl.RelativeTimeFormat(uiLang, { numeric: 'auto' }).format(diff, 'day'))

// The hover preview under the globe, like the weather preview: the chosen zones at a glance.
const zonesPreview = document.getElementById('zones-preview')
const renderPreview = () => {
  if (!zonesOn || !zones.length) {
    zonesPreview.replaceChildren()
    return
  }
  const now = new Date()
  zonesPreview.replaceChildren(...sortedZones(now).map((zone) => {
    const row = weatherRow(cityOf(zone), zoneClock(zone, now), dayWord(dayDifference(zone, now)))
    row.classList.add('zone-line')
    return row
  }))
}

const renderZones = () => {
  const now = new Date()
  zonesLocalLine.textContent = `${t.zonesLocal}: ${cityOf(localZone)} ${zoneClock(localZone, now)}`
  const rows = sortedZones(now).map((zone) => {
    const row = el('div', 'zone-row')
    const remove = Object.assign(document.createElement('button'), { type: 'button', className: 'zone-remove', textContent: '×' })
    remove.setAttribute('aria-label', `${t.remove} ${cityOf(zone)}`)
    remove.dataset.zone = zone
    row.append(el('span', '', cityOf(zone)), el('span', '', zoneClock(zone, now)), el('span', 'zone-day', dayWord(dayDifference(zone, now))), remove)
    return row
  })
  zonesList.replaceChildren(...(rows.length ? rows : [el('p', 'zones-empty', t.zonesEmpty)]))
  const full = zones.length >= 5
  renderPreview()
  zoneInput.disabled = full
  zoneAddButton.disabled = full
  zoneMsg.textContent = full ? t.zonesMax : ''
}

const saveZones = () => writeKey('zones', JSON.stringify(zones))

const openZones = () => {
  zonesFrom = document.activeElement
  renderZones()
  zonesDialog.hidden = false
  document.getElementById('zones-close').focus()
}

let zonesFrom = null
const closeZones = () => {
  zonesDialog.hidden = true
  if (zonesFrom && zonesFrom.focus) zonesFrom.focus()
}

zonesButton.addEventListener('click', openZones)
zonesPreview.addEventListener('click', openZones)
document.getElementById('zones-close').addEventListener('click', closeZones)
zonesDialog.addEventListener('click', (e) => { if (e.target === zonesDialog) closeZones() })
zonesList.addEventListener('click', (e) => {
  if (!e.target.dataset.zone) return
  zones = zones.filter((z) => z !== e.target.dataset.zone)
  saveZones()
  renderZones()
})

document.getElementById('zone-form').addEventListener('submit', (e) => {
  e.preventDefault()
  const typed = zoneInput.value.trim().toLowerCase()
  if (!typed) return
  // Some cities share a zone with another city (Beijing is in Asia/Shanghai), so they are listed here too.
  const match = zoneAliases[typed] ||
    zoneNames.find((z) => z.toLowerCase() === typed.replace(/ /g, '_')) ||
    zoneNames.find((z) => cityOf(z).toLowerCase() === typed)
  if (!match) {
    zoneMsg.textContent = t.zoneNotFound
    return
  }
  if (zones.includes(match)) {
    zoneMsg.textContent = t.zoneDuplicate
    return
  }
  zones = [...zones, match]
  saveZones()
  zoneInput.value = ''
  renderZones()
})

zoneOptions.replaceChildren(...[...zoneNames.map(cityOf), ...Object.keys(zoneAliases).map((name) => name.replace(/\b\w/g, (c) => c.toUpperCase()))].map((value) => Object.assign(document.createElement('option'), { value })))

const applyZonesVisibility = () => {
  zonesButton.hidden = !zonesOn
  renderPreview()
}
applyZonesVisibility()
// The window ticks along with the clock while it is open.
setInterval(() => {
  renderPreview()
  if (!zonesDialog.hidden) renderZones()
}, 1000)

root.toggleAttribute('data-quote-off', !quoteOn)
applySettingsText()
updateWeatherHint()
fetchMyIp()
if (weatherOn) weatherButton.textContent = t.loading
else showIdle()
if (weatherOn) showWeather()

// A new quote every six hours, so the same one stays put for that window.
const quoteText = document.getElementById('quote-text')
const quoteBy = document.getElementById('quote-by')
const quotes = window.QUOTES
const quoteLang = (navigator.language || 'en').slice(0, 2).toLowerCase()
const translated = quotes[quoteLang] || []
const quoteList = quotes.en.map((q, i) => translated[i] || q)

// Wikipedia in the browser's language; English when there is no edition for it.
const wikiLang = ['nl', 'de', 'fr', 'es', 'zh'].includes(quoteLang) ? quoteLang : 'en'
document.getElementById('wikipedia').href = `https://${wikiLang}.wikipedia.org/`
// Clicking the quote steps to the next one; the six-hour rotation keeps going from there.
let quoteOffset = 0
const showQuote = () => {
  const sixHours = Math.floor(Date.now() / (6 * 3600 * 1000))
  const current = quoteList[(sixHours + quoteOffset) % quoteList.length]
  quoteText.textContent = `“${current.text}”`
  quoteBy.textContent = current.by
}
showQuote()
setInterval(showQuote, 60000)
document.getElementById('quote').addEventListener('click', () => {
  quoteOffset += 1
  showQuote()
})

const showTheme = () => {
  const stored = root.dataset.theme || 'auto'
  modeButtons.forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.themeValue === stored))
  })
}

modeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const value = button.dataset.themeValue
    if (value === 'auto') {
      delete root.dataset.theme
      try { localStorage.removeItem('theme') } catch {}
    } else {
      root.dataset.theme = value
      try { localStorage.setItem('theme', value) } catch {}
    }
    showTheme()
  })
})
showTheme()

window.onload = () => {
  document.getElementsByTagName('body')[0].removeAttribute('class')
}

// Wallpaper mode: one photo, on or off. Remembered in localStorage.
const wallpaper = document.getElementById('wallpaper')
const wallpaperToggle = document.getElementById('wallpaper-toggle')
// Local copies in three sizes, so a phone does not download the largest one.
const wallpaperSizes = [
  { width: 800, url: 'assets/wallpaper-800.jpg' },
  { width: 1280, url: 'assets/wallpaper-1280.jpg' },
  { width: 2000, url: 'assets/wallpaper-2000.jpg' },
]
const wantedWidth = window.innerWidth * (window.devicePixelRatio || 1)
const wallpaperUrl = (wallpaperSizes.find((s) => s.width >= wantedWidth) || wallpaperSizes[wallpaperSizes.length - 1]).url

const applyWallpaper = (on) => {
  wallpaper.style.backgroundImage = on ? `url("${wallpaperUrl}")` : ''
  root.toggleAttribute('data-wallpaper-on', on)
  wallpaperToggle.setAttribute('aria-pressed', String(on))
  wallpaperToggle.title = on ? 'Hide wallpaper' : 'Show wallpaper'
}

// On by default; a saved choice ('on' or 'off') overrides it.
let wallpaperOn = true
try {
  const saved = localStorage.getItem('wallpaper')
  if (saved) wallpaperOn = saved === 'on'
} catch {}
applyWallpaper(wallpaperOn)

wallpaperToggle.addEventListener('click', () => {
  wallpaperOn = !wallpaperOn
  applyWallpaper(wallpaperOn)
  try { localStorage.setItem('wallpaper', wallpaperOn ? 'on' : 'off') } catch {}
})

// Background tint: a hue from the slider; zero keeps the neutral monochrome look.
const hueSlider = document.getElementById('hue')

const applyHue = (value) => {
  const hue = Number(value)
  hueSlider.value = hue
  if (hue > 0) {
    root.dataset.tint = ''
    root.style.setProperty('--hue', hue)
  } else {
    delete root.dataset.tint
    root.style.removeProperty('--hue')
  }
}

try { applyHue(localStorage.getItem('hue') || 0) } catch { applyHue(0) }

hueSlider.addEventListener('input', () => {
  applyHue(hueSlider.value)
  try { localStorage.setItem('hue', hueSlider.value) } catch {}
})
