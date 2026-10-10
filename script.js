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
  searchBox.focus()
  clearTimeout(hintTimer)
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

// The date and the week title follow the browser language. Kept here, before the text tables.
const pageLang = (navigator.language || 'en').slice(0, 2).toLowerCase()
const dateLocales = { en: 'en-GB', nl: 'nl-NL', de: 'de-DE', fr: 'fr-FR', es: 'es-ES', zh: 'zh-CN' }
const weekWords = { en: ['Week', 'day', 'of'], nl: ['Week', 'dag', 'van'], de: ['Woche', 'Tag', 'von'], fr: ['Semaine', 'jour', 'sur'], es: ['Semana', 'día', 'de'], zh: ['第', '天，共', '天'] }
const [weekWord, dayWord, ofWord] = weekWords[pageLang] || weekWords.en
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
    : now.toLocaleDateString(dateLocales[pageLang] || 'en-GB', { weekday: 'long', day: 'numeric', month: 'long' })
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
  clockDate.title = `${weekWord} ${isoWeek(now)} · ${dayWord} ${dayOfYear(now)} ${ofWord} ${isLeap(now.getFullYear()) ? 366 : 365}`
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
const settingsButton = document.getElementById('settings-button')
const settings = document.getElementById('settings')
// On a phone the slider is replaced by a button that steps through a few colours, so a tap is enough.
const tintCycle = document.getElementById('tint-cycle')
const TINT_STEPS = [0, 210, 40, 140, 340, 270]
const settingsFields = {
  weather: document.getElementById('set-weather'),
  locIp: document.getElementById('loc-ip'),
  locCity: document.getElementById('loc-city'),
  quote: document.getElementById('set-quote'),
  zones: document.getElementById('set-zones'),
  wallpaper: document.getElementById('set-wallpaper'),
  tint: document.getElementById('set-tint'),
  wallpaperButton: document.getElementById('set-wallpaper-btn'),
  links: document.getElementById('set-links'),
  linksOwn: document.getElementById('set-links-own'),
  askai: document.getElementById('set-askai'),
  preset: document.querySelectorAll('input[name="preset"]'),
  cityForm: document.getElementById('city-form'),
  cityInput: document.getElementById('city-input'),
  cityClear: document.getElementById('city-clear'),
  cityMessage: document.getElementById('city-msg'),
  resetSettings: document.getElementById('reset-settings'),
  resetData: document.getElementById('reset-data'),
}

const readFlag = (key, fallback) => {
  try { return localStorage.getItem(key) === null ? fallback : localStorage.getItem(key) === 'on' } catch { return fallback }
}
const writeKey = (key, value) => { try { localStorage.setItem(key, value) } catch {} }

let weatherOn = readFlag('weather', false)
let quoteOn = readFlag('quote', false)
// The last IP lookup, kept with its time. It is asked for only when the weather needs it, or when the visitor
// checks it in settings; the page does not ask for the display alone.
let lastIpRecord = null
try { lastIpRecord = JSON.parse(localStorage.getItem('lastIp') || 'null') } catch {}
const ipLookup = async (fresh = false) => {
  const info = await fetchCached('ipInfo', 10 * 60e3, 'https://ipapi.co/json/', fresh)
  lastIpRecord = { ip: info.ip, data: info, at: Date.now() }
  writeKey('lastIp', JSON.stringify(lastIpRecord))
  return info
}
const ipValue = document.getElementById('ip-value')
const ipMeta = document.getElementById('ip-meta')
const ipCheck = document.getElementById('ip-check')
const ipStatus = document.getElementById('ip-status')
const ipList = document.getElementById('ip-list')
const ipOpen = document.getElementById('ip-open')
const ipWindow = document.getElementById('ip-window')
// The window shows the last requested address with its time and the fields the lookup returns.
// A field the service left out shows a dash.
const renderIp = () => {
  const rec = lastIpRecord
  const d = rec && rec.data
  ipValue.textContent = rec ? rec.ip : t.ipNone
  ipMeta.textContent = rec ? `${t.ipFieldAt}: ${new Date(rec.at).toLocaleString(uiLang)}` : ''
  ipCheck.textContent = rec ? t.ipCheckAgain : t.ipCheckFirst
  const dash = (v) => (v === undefined || v === null || v === '' ? '—' : String(v))
  const rows = d ? [
    [t.ipFieldPlace, d.city], [t.ipFieldRegion, d.region], [t.ipFieldCountry, d.country_name],
    [t.ipFieldPostal, d.postal], [t.ipFieldProvider, d.org], [t.ipFieldAsn, d.asn], [t.ipFieldNetwork, d.network],
    [t.ipFieldTimezone, d.timezone], [t.ipFieldCoords, d.latitude != null && d.longitude != null ? `${d.latitude}, ${d.longitude}` : '']
  ] : []
  ipList.replaceChildren(...rows.flatMap(([label, value]) => [el('dt', '', label), el('dd', '', dash(value))]))
  ipList.hidden = !d
}
// Checking asks now; the weather follows if it uses the IP address.
const checkIp = async () => {
  ipCheck.disabled = true
  ipStatus.textContent = t.loading
  try {
    await ipLookup(true)
  } catch {
    ipStatus.textContent = t.ipFailed
    ipCheck.disabled = false
    return
  }
  ipStatus.textContent = ''
  ipCheck.disabled = false
  renderIp()
  if (weatherOn && locationMode === 'ip') showWeather()
}
ipCheck.addEventListener('click', checkIp)

const openIpWindow = () => {
  ipWindow.hidden = false
  ipWindow.querySelector('.settings-panel').focus()
}
const closeIpWindow = () => { ipWindow.hidden = true; ipOpen.focus() }
ipOpen.addEventListener('click', openIpWindow)
document.getElementById('ip-window-close').addEventListener('click', closeIpWindow)
ipWindow.addEventListener('click', (e) => { if (e.target === ipWindow) closeIpWindow() })

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
  en: { show: 'Show weather', hide: 'Hide weather', loading: 'Loading…', unavailable: 'Weather unavailable', noSource: 'Set a city in settings', ip: 'Internet IP', title: 'Settings', hint: 'Press ? to open this panel and Esc to close it.', weather: 'On', lookup: 'Find my city from my IP address', cityLabel: 'Or enter a city', save: 'Save', clearCity: 'Use my IP address instead', notFound: 'City not found', quote: 'Quote', privacy: 'Weather sends your IP address to ipapi.co, or the city you enter to Open-Meteo, and only while weather is on. Nothing else leaves the page.', resetSettings: 'Reset settings', resetData: 'Delete my links, AI shortcuts and places', resetDataConfirm: 'Delete your custom links, AI shortcuts, time zones and your city? This cannot be undone.', close: 'Close', open: 'Settings' },
  nl: { show: 'Toon weer', hide: 'Verberg weer', loading: 'Laden…', unavailable: 'Weer niet beschikbaar', noSource: 'Stel een plaats in bij instellingen', ip: 'Internet-IP', title: 'Instellingen', hint: 'Druk op ? om dit venster te openen en op Esc om het te sluiten.', weather: 'Aan', lookup: 'Mijn plaats zoeken op basis van mijn IP-adres', cityLabel: 'Of vul een plaats in', save: 'Opslaan', clearCity: 'Liever mijn IP-adres gebruiken', notFound: 'Plaats niet gevonden', quote: 'Citaat', privacy: 'Het weer stuurt je IP-adres naar ipapi.co, of de plaats die je invult naar Open-Meteo, en alleen als het weer aanstaat. Er gaat verder niets naar buiten.', resetSettings: 'Instellingen resetten', resetData: 'Eigen links, AI-snelkoppelingen en plaatsen wissen', resetDataConfirm: 'Je eigen links, AI-snelkoppelingen, tijdzones en je stad wissen? Dit kan niet ongedaan worden.', close: 'Sluiten', open: 'Instellingen' },
  de: { show: 'Wetter anzeigen', hide: 'Wetter ausblenden', loading: 'Lädt…', unavailable: 'Wetter nicht verfügbar', noSource: 'Ort in den Einstellungen festlegen', ip: 'Internet-IP', title: 'Einstellungen', hint: 'Drücke ?, um dieses Fenster zu öffnen, und Esc, um es zu schließen.', weather: 'An', lookup: 'Meinen Ort über meine IP-Adresse suchen', cityLabel: 'Oder einen Ort eingeben', save: 'Speichern', clearCity: 'Stattdessen meine IP-Adresse verwenden', notFound: 'Ort nicht gefunden', quote: 'Zitat', privacy: 'Das Wetter sendet deine IP-Adresse an ipapi.co bzw. den eingegebenen Ort an Open-Meteo, und nur wenn das Wetter aktiv ist. Sonst verlässt nichts die Seite.', resetSettings: 'Einstellungen zurücksetzen', resetData: 'Eigene Links, KI-Verknüpfungen und Orte löschen', resetDataConfirm: 'Deine eigenen Links, KI-Verknüpfungen, Zeitzonen und deine Stadt löschen? Das lässt sich nicht rückgängig machen.', close: 'Schließen', open: 'Einstellungen' },
  fr: { show: 'Afficher la météo', hide: 'Masquer la météo', loading: 'Chargement…', unavailable: 'Météo indisponible', noSource: 'Réglez une ville dans les paramètres', ip: 'IP internet', title: 'Paramètres', hint: 'Appuyez sur ? pour ouvrir ce panneau et sur Échap pour le fermer.', weather: 'Activé', lookup: 'Trouver ma ville à partir de mon adresse IP', cityLabel: 'Ou saisissez une ville', save: 'Enregistrer', clearCity: 'Utiliser plutôt mon adresse IP', notFound: 'Ville introuvable', quote: 'Citation', privacy: 'La météo envoie votre adresse IP à ipapi.co, ou la ville saisie à Open-Meteo, et seulement lorsqu’elle est activée. Rien d’autre ne quitte la page.', resetSettings: 'Réinitialiser les réglages', resetData: 'Supprimer mes liens, raccourcis IA et lieux', resetDataConfirm: 'Supprimer vos liens personnels, raccourcis IA, fuseaux et votre ville ? Action irréversible.', close: 'Fermer', open: 'Paramètres' },
  es: { show: 'Mostrar el tiempo', hide: 'Ocultar el tiempo', loading: 'Cargando…', unavailable: 'Tiempo no disponible', noSource: 'Elige una ciudad en los ajustes', ip: 'IP de internet', title: 'Ajustes', hint: 'Pulsa ? para abrir este panel y Esc para cerrarlo.', weather: 'Activado', lookup: 'Buscar mi ciudad a partir de mi IP', cityLabel: 'O introduce una ciudad', save: 'Guardar', clearCity: 'Usar mi IP en su lugar', notFound: 'Ciudad no encontrada', quote: 'Cita', privacy: 'El tiempo envía tu IP a ipapi.co, o la ciudad que escribas a Open-Meteo, y solo mientras esté activado. Nada más sale de la página.', resetSettings: 'Restablecer ajustes', resetData: 'Borrar mis enlaces, accesos de IA y lugares', resetDataConfirm: '¿Borrar tus enlaces propios, accesos de IA, zonas horarias y tu ciudad? No se puede deshacer.', close: 'Cerrar', open: 'Ajustes' },
  zh: { show: '显示天气', hide: '隐藏天气', loading: '加载中…', unavailable: '天气不可用', noSource: '请在设置中填写城市', ip: '互联网 IP', title: '设置', hint: '按 ? 打开此面板，按 Esc 关闭。', weather: '开启', lookup: '根据 IP 地址查找我的城市', cityLabel: '或输入城市', save: '保存', clearCity: '改用我的 IP 地址', notFound: '未找到该城市', quote: '名言', privacy: '开启天气时，页面会把你的 IP 地址发送到 ipapi.co，或把你输入的城市发送到 Open-Meteo。除此之外，页面不会发送任何内容。', resetSettings: '重置设置', resetData: '删除我的链接、AI 快捷方式和地点', resetDataConfirm: '删除你的自定义链接、AI 快捷方式、时区和城市？此操作无法撤销。', close: '关闭', open: '设置' },
}
const forecastText = {
  en: { now: 'Now', hours: 'Next 6 hours', days: 'Next 7 days', feels: 'Feels like', wind: 'Wind', humidity: 'Humidity', more: 'Click for the full forecast', windy: 'Full forecast on Windy', rain: 'Rain' },
  nl: { now: 'Nu', hours: 'Komende 6 uur', days: 'Komende 7 dagen', feels: 'Voelt als', wind: 'Wind', humidity: 'Luchtvochtigheid', more: 'Klik voor de volledige verwachting', windy: 'Volledige verwachting op Windy', rain: 'Regen' },
  de: { now: 'Jetzt', hours: 'Nächste 6 Stunden', days: 'Nächste 7 Tage', feels: 'Gefühlt', wind: 'Wind', humidity: 'Luftfeuchtigkeit', more: 'Klicken für die vollständige Vorhersage', windy: 'Vollständige Vorhersage auf Windy', rain: 'Regen' },
  fr: { now: 'Maintenant', hours: '6 prochaines heures', days: '7 prochains jours', feels: 'Ressenti', wind: 'Vent', humidity: 'Humidité', more: 'Cliquez pour les prévisions complètes', windy: 'Prévisions complètes sur Windy', rain: 'Pluie' },
  es: { now: 'Ahora', hours: 'Próximas 6 horas', days: 'Próximos 7 días', feels: 'Sensación', wind: 'Viento', humidity: 'Humedad', more: 'Haz clic para la previsión completa', windy: 'Previsión completa en Windy', rain: 'Lluvia' },
  zh: { now: '现在', hours: '未来 6 小时', days: '未来 7 天', feels: '体感', wind: '风', humidity: '湿度', more: '点击查看完整预报', windy: '在 Windy 查看完整预报', rain: '降水' },
}
const hourHeads = { en: ['Time', 'Temp', 'Rain', 'Wind'], nl: ['Tijd', 'Temp', 'Regen', 'Wind'], de: ['Zeit', 'Temp.', 'Regen', 'Wind'], fr: ['Heure', 'Temp.', 'Pluie', 'Vent'], es: ['Hora', 'Temp.', 'Lluvia', 'Viento'], zh: ['时间', '气温', '降水', '风'] }
const zonesText = {
  en: { zonesEdit: 'Edit time zones', zonesToggle: 'Time zones', zonesTitle: 'Time zones', zonesLocal: 'This computer', zonesAdd: 'Add a time zone (up to five)', zoneAddBtn: 'Add', zonesEmpty: 'No extra time zones yet.', zonesMax: 'You can show up to five.', zoneNotFound: 'Time zone not found', zoneDuplicate: 'Already in the list', remove: 'Remove', zonesButton: 'Time zones' },
  nl: { zonesEdit: 'Tijdzones bewerken', zonesToggle: 'Tijdzones', zonesTitle: 'Tijdzones', zonesLocal: 'Deze computer', zonesAdd: 'Tijdzone toevoegen (maximaal vijf)', zoneAddBtn: 'Toevoegen', zonesEmpty: 'Nog geen extra tijdzones.', zonesMax: 'Je kunt er maximaal vijf tonen.', zoneNotFound: 'Tijdzone niet gevonden', zoneDuplicate: 'Staat al in de lijst', remove: 'Verwijderen', zonesButton: 'Tijdzones' },
  de: { zonesEdit: 'Zeitzonen bearbeiten', zonesToggle: 'Zeitzonen', zonesTitle: 'Zeitzonen', zonesLocal: 'Dieser Computer', zonesAdd: 'Zeitzone hinzufügen (bis zu fünf)', zoneAddBtn: 'Hinzufügen', zonesEmpty: 'Noch keine zusätzlichen Zeitzonen.', zonesMax: 'Du kannst höchstens fünf anzeigen.', zoneNotFound: 'Zeitzone nicht gefunden', zoneDuplicate: 'Ist schon in der Liste', remove: 'Entfernen', zonesButton: 'Zeitzonen' },
  fr: { zonesEdit: 'Modifier les fuseaux horaires', zonesToggle: 'Fuseaux horaires', zonesTitle: 'Fuseaux horaires', zonesLocal: 'Cet ordinateur', zonesAdd: 'Ajouter un fuseau horaire (cinq maximum)', zoneAddBtn: 'Ajouter', zonesEmpty: 'Aucun fuseau supplémentaire.', zonesMax: 'Vous pouvez en afficher cinq au maximum.', zoneNotFound: 'Fuseau horaire introuvable', zoneDuplicate: 'Déjà dans la liste', remove: 'Supprimer', zonesButton: 'Fuseaux horaires' },
  es: { zonesEdit: 'Editar zonas horarias', zonesToggle: 'Zonas horarias', zonesTitle: 'Zonas horarias', zonesLocal: 'Este equipo', zonesAdd: 'Añadir una zona horaria (máximo cinco)', zoneAddBtn: 'Añadir', zonesEmpty: 'Aún no hay zonas adicionales.', zonesMax: 'Puedes mostrar hasta cinco.', zoneNotFound: 'Zona horaria no encontrada', zoneDuplicate: 'Ya está en la lista', remove: 'Quitar', zonesButton: 'Zonas horarias' },
  zh: { zonesEdit: '编辑时区', zonesToggle: '时区', zonesTitle: '时区', zonesLocal: '本机', zonesAdd: '添加时区（最多五个）', zoneAddBtn: '添加', zonesEmpty: '还没有额外的时区。', zonesMax: '最多显示五个。', zoneNotFound: '未找到该时区', zoneDuplicate: '已在列表中', remove: '移除', zonesButton: '时区' }
}
const ipPrivacy = {'en': 'Checking your IP address asks ipapi.co for it.', 'nl': 'Je IP-adres opvragen vraagt het bij ipapi.co.', 'de': 'Zum Abfragen deiner IP-Adresse wird sie bei ipapi.co angefragt.', 'fr': 'Vérifier votre adresse IP la demande à ipapi.co.', 'es': 'Consultar tu IP también la pide a ipapi.co.', 'zh': '查询 IP 地址时，会向 ipapi.co 请求。'}
const linksText = {
  en: { placesEdit: 'Edit places', askAiTip: 'AI shortcuts', linksEdit: 'Edit links', linksButton: 'Links', linksTitle: 'Links', linksEmpty: 'No links yet.', linkAdd: 'Add link', linkEdit: 'Edit link', lblName: 'Name', lblUrl: 'Address', lblDesc: 'Description (optional)', linkSave: 'Save', linkCancel: 'Cancel', linksFull: 'You can have up to 15 links.', linkInvalid: 'Enter a valid address, for example https://example.com', linkEditBtn: 'Edit', linkRemove: 'Remove' },
  nl: { placesEdit: 'Plaatsen bewerken', askAiTip: 'AI-snelkoppelingen', linksEdit: 'Links bewerken', linksButton: 'Links', linksTitle: 'Links', linksEmpty: 'Nog geen links.', linkAdd: 'Link toevoegen', linkEdit: 'Link bewerken', lblName: 'Naam', lblUrl: 'Adres', lblDesc: 'Beschrijving (optioneel)', linkSave: 'Opslaan', linkCancel: 'Annuleren', linksFull: 'Je kunt maximaal 15 links hebben.', linkInvalid: 'Vul een geldig adres in, bijvoorbeeld https://voorbeeld.nl', linkEditBtn: 'Bewerken', linkRemove: 'Verwijderen' },
  de: { placesEdit: 'Orte bearbeiten', askAiTip: 'KI-Verknüpfungen', linksEdit: 'Links bearbeiten', linksButton: 'Links', linksTitle: 'Links', linksEmpty: 'Noch keine Links.', linkAdd: 'Link hinzufügen', linkEdit: 'Link bearbeiten', lblName: 'Name', lblUrl: 'Adresse', lblDesc: 'Beschreibung (optional)', linkSave: 'Speichern', linkCancel: 'Abbrechen', linksFull: 'Du kannst höchstens 15 Links haben.', linkInvalid: 'Gib eine gültige Adresse ein, zum Beispiel https://beispiel.de', linkEditBtn: 'Bearbeiten', linkRemove: 'Entfernen' },
  fr: { placesEdit: 'Modifier les lieux', askAiTip: 'Raccourcis IA', linksEdit: 'Modifier les liens', linksButton: 'Liens', linksTitle: 'Liens', linksEmpty: 'Aucun lien pour l’instant.', linkAdd: 'Ajouter un lien', linkEdit: 'Modifier le lien', lblName: 'Nom', lblUrl: 'Adresse', lblDesc: 'Description (facultatif)', linkSave: 'Enregistrer', linkCancel: 'Annuler', linksFull: 'Vous pouvez avoir jusqu’à 15 liens.', linkInvalid: 'Saisissez une adresse valide, par exemple https://exemple.fr', linkEditBtn: 'Modifier', linkRemove: 'Supprimer' },
  es: { placesEdit: 'Editar lugares', askAiTip: 'Accesos directos de IA', linksEdit: 'Editar enlaces', linksButton: 'Enlaces', linksTitle: 'Enlaces', linksEmpty: 'Aún no hay enlaces.', linkAdd: 'Añadir enlace', linkEdit: 'Editar enlace', lblName: 'Nombre', lblUrl: 'Dirección', lblDesc: 'Descripción (opcional)', linkSave: 'Guardar', linkCancel: 'Cancelar', linksFull: 'Puedes tener hasta 15 enlaces.', linkInvalid: 'Escribe una dirección válida, por ejemplo https://ejemplo.es', linkEditBtn: 'Editar', linkRemove: 'Quitar' },
  zh: { placesEdit: '编辑地点', askAiTip: 'AI 快捷方式', linksEdit: '编辑链接', linksButton: '链接', linksTitle: '链接', linksEmpty: '还没有链接。', linkAdd: '添加链接', linkEdit: '编辑链接', lblName: '名称', lblUrl: '地址', lblDesc: '说明（可选）', linkSave: '保存', linkCancel: '取消', linksFull: '最多可以添加 15 个链接。', linkInvalid: '请输入有效的地址，例如 https://example.com', linkEditBtn: '编辑', linkRemove: '移除' }
}
const sectionText = {
  en: { secWeather: 'Weather', secLook: 'Show', secPrivacy: 'Privacy', placeTime: 'Local time' },
  nl: { secWeather: 'Weer', secLook: 'Tonen', secPrivacy: 'Privacy', placeTime: 'Lokale tijd' },
  de: { secWeather: 'Wetter', secLook: 'Anzeigen', secPrivacy: 'Datenschutz', placeTime: 'Ortszeit' },
  fr: { secWeather: 'Météo', secLook: 'Afficher', secPrivacy: 'Confidentialité', placeTime: 'Heure locale' },
  es: { secWeather: 'Tiempo', secLook: 'Mostrar', secPrivacy: 'Privacidad', placeTime: 'Hora local' },
  zh: { secWeather: '天气', secLook: '显示', secPrivacy: '隐私', placeTime: '当地时间' }
}
const aiText = {
  en: { aiSec: 'AI shortcuts', aiOn: 'On', aiName: 'Name', aiUrl: 'Address', aiEdit: 'Edit', aiAddTitle: 'Add shortcut', aiEditTitle: 'Edit shortcut', aiSave: 'Save', aiCancel: 'Cancel', aiUp: 'Move up', aiDown: 'Move down', aiRemove: 'Remove', aiMax: 'You can show up to five.', aiInvalid: 'Enter a valid https address' },
  nl: { aiSec: 'AI-snelkoppelingen', aiOn: 'Aan', aiName: 'Naam', aiUrl: 'Adres', aiEdit: 'Bewerken', aiAddTitle: 'Snelkoppeling toevoegen', aiEditTitle: 'Snelkoppeling bewerken', aiSave: 'Opslaan', aiCancel: 'Annuleren', aiUp: 'Omhoog', aiDown: 'Omlaag', aiRemove: 'Verwijderen', aiMax: 'Je kunt er maximaal vijf tonen.', aiInvalid: 'Vul een geldig https-adres in' },
  de: { aiSec: 'KI-Verknüpfungen', aiOn: 'An', aiName: 'Name', aiUrl: 'Adresse', aiEdit: 'Bearbeiten', aiAddTitle: 'Verknüpfung hinzufügen', aiEditTitle: 'Verknüpfung bearbeiten', aiSave: 'Speichern', aiCancel: 'Abbrechen', aiUp: 'Nach oben', aiDown: 'Nach unten', aiRemove: 'Entfernen', aiMax: 'Du kannst höchstens fünf anzeigen.', aiInvalid: 'Gib eine gültige https-Adresse ein' },
  fr: { aiSec: 'Raccourcis IA', aiOn: 'Activé', aiName: 'Nom', aiUrl: 'Adresse', aiEdit: 'Modifier', aiAddTitle: 'Ajouter un raccourci', aiEditTitle: 'Modifier le raccourci', aiSave: 'Enregistrer', aiCancel: 'Annuler', aiUp: 'Monter', aiDown: 'Descendre', aiRemove: 'Supprimer', aiMax: 'Vous pouvez en afficher cinq au maximum.', aiInvalid: 'Saisissez une adresse https valide' },
  es: { aiSec: 'Accesos de IA', aiOn: 'Activado', aiName: 'Nombre', aiUrl: 'Dirección', aiEdit: 'Editar', aiAddTitle: 'Añadir acceso', aiEditTitle: 'Editar acceso', aiSave: 'Guardar', aiCancel: 'Cancelar', aiUp: 'Subir', aiDown: 'Bajar', aiRemove: 'Quitar', aiMax: 'Puedes mostrar hasta cinco.', aiInvalid: 'Escribe una dirección https válida' },
  zh: { aiSec: 'AI 快捷方式', aiOn: '开启', aiName: '名称', aiUrl: '地址', aiEdit: '编辑', aiAddTitle: '添加快捷方式', aiEditTitle: '编辑快捷方式', aiSave: '保存', aiCancel: '取消', aiUp: '上移', aiDown: '下移', aiRemove: '移除', aiMax: '最多显示五个。', aiInvalid: '请输入有效的 https 地址' }
}
const manageText = {
  en: { linkUp: 'Move up', linkDown: 'Move down', manageOpen: 'Manage data', tabLinks: 'Links', tabZones: 'Time zones', tabAi: 'AI', tabWeather: 'Weather', placeLabel: 'Add a city', placeAdd: 'Add', placeOwn: 'Your place', placeNone: 'No place yet', placeLimit: 'You can add up to five cities.', placeDuplicate: 'Already in the list', placeRemove: 'Remove' },
  nl: { linkUp: 'Omhoog', linkDown: 'Omlaag', manageOpen: 'Data beheren', tabLinks: 'Links', tabZones: 'Tijdzones', tabAi: 'AI', tabWeather: 'Weer', placeLabel: 'Een stad toevoegen', placeAdd: 'Toevoegen', placeOwn: 'Je eigen plaats', placeNone: 'Nog geen plaats', placeLimit: 'Je kunt maximaal vijf steden toevoegen.', placeDuplicate: 'Staat al in de lijst', placeRemove: 'Verwijderen' },
  de: { linkUp: 'Nach oben', linkDown: 'Nach unten', manageOpen: 'Daten verwalten', tabLinks: 'Links', tabZones: 'Zeitzonen', tabAi: 'KI', tabWeather: 'Wetter', placeLabel: 'Eine Stadt hinzufügen', placeAdd: 'Hinzufügen', placeOwn: 'Dein Ort', placeNone: 'Noch kein Ort', placeLimit: 'Du kannst höchstens fünf Städte hinzufügen.', placeDuplicate: 'Ist schon in der Liste', placeRemove: 'Entfernen' },
  fr: { linkUp: 'Monter', linkDown: 'Descendre', manageOpen: 'Gérer les données', tabLinks: 'Liens', tabZones: 'Fuseaux', tabAi: 'IA', tabWeather: 'Météo', placeLabel: 'Ajouter une ville', placeAdd: 'Ajouter', placeOwn: 'Votre lieu', placeNone: 'Aucun lieu pour l’instant', placeLimit: 'Vous pouvez ajouter jusqu’à cinq villes.', placeDuplicate: 'Déjà dans la liste', placeRemove: 'Supprimer' },
  es: { linkUp: 'Subir', linkDown: 'Bajar', manageOpen: 'Gestionar datos', tabLinks: 'Enlaces', tabZones: 'Zonas horarias', tabAi: 'IA', tabWeather: 'Tiempo', placeLabel: 'Añadir una ciudad', placeAdd: 'Añadir', placeOwn: 'Tu lugar', placeNone: 'Aún no hay lugar', placeLimit: 'Puedes añadir hasta cinco ciudades.', placeDuplicate: 'Ya está en la lista', placeRemove: 'Quitar' },
  zh: { linkUp: '上移', linkDown: '下移', manageOpen: '管理数据', tabLinks: '链接', tabZones: '时区', tabAi: 'AI', tabWeather: '天气', placeLabel: '添加城市', placeAdd: '添加', placeOwn: '你的地点', placeNone: '还没有地点', placeLimit: '最多添加五个城市。', placeDuplicate: '已在列表中', placeRemove: '移除' }
}
const footerText = {
  en: { pre: 'Vibe coded with', post: 'by Allards', title: 'View the README on GitHub' },
  nl: { pre: 'Gemaakt met', post: 'door Allards', title: 'Bekijk de README op GitHub' },
  de: { pre: 'Gebaut mit', post: 'von Allards', title: 'README auf GitHub ansehen' },
  fr: { pre: 'Créé avec', post: 'par Allards', title: 'Voir le README sur GitHub' },
  es: { pre: 'Hecho con', post: 'por Allards', title: 'Ver el README en GitHub' },
  zh: { pre: '用', post: '由 Allards 制作', title: '在 GitHub 上查看 README' }
}
const dataText = {
  en: { exportData: 'Export data', importData: 'Import data', importInvalid: 'This file is not a Minimal-StartPage export.', importConfirm: 'Replace your current settings and data with the ones in this file?' },
  nl: { exportData: 'Gegevens exporteren', importData: 'Gegevens importeren', importInvalid: 'Dit bestand is geen export van Minimal-StartPage.', importConfirm: 'Je huidige instellingen en gegevens vervangen door die in dit bestand?' },
  de: { exportData: 'Daten exportieren', importData: 'Daten importieren', importInvalid: 'Diese Datei ist kein Export von Minimal-StartPage.', importConfirm: 'Deine aktuellen Einstellungen und Daten durch die in dieser Datei ersetzen?' },
  fr: { exportData: 'Exporter les données', importData: 'Importer les données', importInvalid: 'Ce fichier n’est pas un export de Minimal-StartPage.', importConfirm: 'Remplacer vos réglages et données actuels par ceux de ce fichier ?' },
  es: { exportData: 'Exportar datos', importData: 'Importar datos', importInvalid: 'Este archivo no es una exportación de Minimal-StartPage.', importConfirm: '¿Sustituir tus ajustes y datos actuales por los de este archivo?' },
  zh: { exportData: '导出数据', importData: '导入数据', importInvalid: '此文件不是 Minimal-StartPage 的导出文件。', importConfirm: '用此文件中的设置和数据替换当前的设置和数据？' }
}
const tintCycleText = {
  en: { tintCycle: 'Change colour' }, nl: { tintCycle: 'Kleur wisselen' }, de: { tintCycle: 'Farbe wechseln' },
  fr: { tintCycle: 'Changer la couleur' }, es: { tintCycle: 'Cambiar el color' }, zh: { tintCycle: '切换颜色' }
}
const quoteTitleText = {
  en: { quoteAnother: 'Show another quote' }, nl: { quoteAnother: 'Toon een ander citaat' }, de: { quoteAnother: 'Anderes Zitat anzeigen' },
  fr: { quoteAnother: 'Afficher une autre citation' }, es: { quoteAnother: 'Mostrar otra cita' }, zh: { quoteAnother: '换一条名言' }
}
const ipText = {
  en: { ipNone: 'Not requested yet', ipFailed: 'Could not check', ipWindowTitle: 'IP details', ipCheckFirst: 'Check', ipCheckAgain: 'Check again', ipFieldPlace: 'Place', ipFieldRegion: 'Region', ipFieldCountry: 'Country', ipFieldPostal: 'Postcode', ipFieldProvider: 'Provider', ipFieldAsn: 'AS number', ipFieldNetwork: 'Network', ipFieldTimezone: 'Time zone', ipFieldCoords: 'Coordinates', ipFieldAt: 'Requested' },
  nl: { ipNone: 'Nog niet opgevraagd', ipFailed: 'Niet kunnen controleren', ipWindowTitle: 'IP-gegevens', ipCheckFirst: 'Opvragen', ipCheckAgain: 'Opnieuw opvragen', ipFieldPlace: 'Plaats', ipFieldRegion: 'Regio', ipFieldCountry: 'Land', ipFieldPostal: 'Postcode', ipFieldProvider: 'Provider', ipFieldAsn: 'AS-nummer', ipFieldNetwork: 'Netwerk', ipFieldTimezone: 'Tijdzone', ipFieldCoords: 'Coördinaten', ipFieldAt: 'Opgevraagd' },
  de: { ipNone: 'Noch nicht abgefragt', ipFailed: 'Konnte nicht prüfen', ipWindowTitle: 'IP-Details', ipCheckFirst: 'Abfragen', ipCheckAgain: 'Erneut abfragen', ipFieldPlace: 'Ort', ipFieldRegion: 'Region', ipFieldCountry: 'Land', ipFieldPostal: 'Postleitzahl', ipFieldProvider: 'Anbieter', ipFieldAsn: 'AS-Nummer', ipFieldNetwork: 'Netzwerk', ipFieldTimezone: 'Zeitzone', ipFieldCoords: 'Koordinaten', ipFieldAt: 'Abgefragt' },
  fr: { ipNone: 'Pas encore demandée', ipFailed: 'Vérification impossible', ipWindowTitle: 'Détails de l’IP', ipCheckFirst: 'Vérifier', ipCheckAgain: 'Vérifier à nouveau', ipFieldPlace: 'Lieu', ipFieldRegion: 'Région', ipFieldCountry: 'Pays', ipFieldPostal: 'Code postal', ipFieldProvider: 'Fournisseur', ipFieldAsn: 'Numéro AS', ipFieldNetwork: 'Réseau', ipFieldTimezone: 'Fuseau horaire', ipFieldCoords: 'Coordonnées', ipFieldAt: 'Demandée' },
  es: { ipNone: 'Aún no consultada', ipFailed: 'No se pudo comprobar', ipWindowTitle: 'Detalles de la IP', ipCheckFirst: 'Consultar', ipCheckAgain: 'Consultar de nuevo', ipFieldPlace: 'Lugar', ipFieldRegion: 'Región', ipFieldCountry: 'País', ipFieldPostal: 'Código postal', ipFieldProvider: 'Proveedor', ipFieldAsn: 'Número AS', ipFieldNetwork: 'Red', ipFieldTimezone: 'Zona horaria', ipFieldCoords: 'Coordenadas', ipFieldAt: 'Consultada' },
  zh: { ipNone: '尚未查询', ipFailed: '无法检查', ipWindowTitle: 'IP 详情', ipCheckFirst: '查询', ipCheckAgain: '重新查询', ipFieldPlace: '地点', ipFieldRegion: '地区', ipFieldCountry: '国家', ipFieldPostal: '邮编', ipFieldProvider: '服务商', ipFieldAsn: 'AS 号', ipFieldNetwork: '网络', ipFieldTimezone: '时区', ipFieldCoords: '坐标', ipFieldAt: '查询时间' }
}
const wallText = {
  en: { wallShow: 'Show wallpaper', wallHide: 'Hide wallpaper' },
  nl: { wallShow: 'Achtergrond aanzetten', wallHide: 'Achtergrond uitzetten' },
  de: { wallShow: 'Hintergrund einblenden', wallHide: 'Hintergrund ausblenden' },
  fr: { wallShow: 'Afficher le fond', wallHide: 'Masquer le fond' },
  es: { wallShow: 'Mostrar el fondo', wallHide: 'Ocultar el fondo' },
  zh: { wallShow: '显示壁纸', wallHide: '隐藏壁纸' }
}
const linksOwnText = {
  en: { linksOwn: 'Own links' },
  nl: { linksOwn: 'Eigen links' },
  de: { linksOwn: 'Eigene Links' },
  fr: { linksOwn: 'Liens personnels' },
  es: { linksOwn: 'Enlaces propios' },
  zh: { linksOwn: '自定义链接' }
}
const linkToggleText = {
  en: { linksToggle: 'Links button' },
  nl: { linksToggle: 'Linkknop' },
  de: { linksToggle: 'Link-Schaltfläche' },
  fr: { linksToggle: 'Bouton des liens' },
  es: { linksToggle: 'Botón de enlaces' },
  zh: { linksToggle: '链接按钮' }
}
const disclaimerText = {
  en: { privacy: 'Sends your IP address to outside services.' },
  nl: { privacy: 'Stuurt je IP-adres naar externe diensten.' },
  de: { privacy: 'Sendet deine IP-Adresse an externe Dienste.' },
  fr: { privacy: 'Envoie votre adresse IP à des services externes.' },
  es: { privacy: 'Envía tu IP a servicios externos.' },
  zh: { privacy: '会向外部服务发送你的 IP 地址。' }
}
const wallpaperText = {
  en: { wallpaperToggle: 'Wallpaper', wallpaperButton: 'Wallpaper button' },
  nl: { wallpaperToggle: 'Wallpaper', wallpaperButton: 'Wallpaperknop' },
  de: { wallpaperToggle: 'Wallpaper', wallpaperButton: 'Wallpaper-Schaltfläche' },
  fr: { wallpaperToggle: 'Fond d’écran', wallpaperButton: 'Bouton du fond d’écran' },
  es: { wallpaperToggle: 'Fondo de pantalla', wallpaperButton: 'Botón del fondo' },
  zh: { wallpaperToggle: '壁纸', wallpaperButton: '壁纸按钮' }
}
const tintText = {
  en: { tintToggle: 'Background tint' },
  nl: { tintToggle: 'Achtergrondkleur (schuif)' },
  de: { tintToggle: 'Hintergrundfarbe (Regler)' },
  fr: { tintToggle: 'Teinte du fond (curseur)' },
  es: { tintToggle: 'Tono del fondo (control)' },
  zh: { tintToggle: '背景色调（滑块）' }
}
const bgTitleText = {
  en: { secBackground: 'Background' },
  nl: { secBackground: 'Achtergrond' },
  de: { secBackground: 'Hintergrund' },
  fr: { secBackground: 'Fond' },
  es: { secBackground: 'Fondo' },
  zh: { secBackground: '背景' }
}
const pageText = {
  en: { secPage: 'Page', presetMinimal: 'Minimal', presetStandard: 'Standard', presetCustom: 'Personal' },
  nl: { secPage: 'Pagina', presetMinimal: 'Minimaal', presetStandard: 'Standaard', presetCustom: 'Persoonlijk' },
  de: { secPage: 'Seite', presetMinimal: 'Minimal', presetStandard: 'Standard', presetCustom: 'Persönlich' },
  fr: { secPage: 'Page', presetMinimal: 'Minimal', presetStandard: 'Standard', presetCustom: 'Personnalisé' },
  es: { secPage: 'Página', presetMinimal: 'Mínimo', presetStandard: 'Estándar', presetCustom: 'Personal' },
  zh: { secPage: '页面', presetMinimal: '极简', presetStandard: '标准', presetCustom: '个性化' }
}
const advancedText = {
  en: { advTitle: 'Advanced settings', advancedOpen: 'Advanced', advancedClosed: '← Back to basic settings' },
  nl: { advTitle: 'Geavanceerde instellingen', advancedOpen: 'Geavanceerd', advancedClosed: '← Terug naar basisinstellingen' },
  de: { advTitle: 'Erweiterte Einstellungen', advancedOpen: 'Erweitert', advancedClosed: '← Zurück zu den Grundeinstellungen' },
  fr: { advTitle: 'Réglages avancés', advancedOpen: 'Avancé', advancedClosed: '← Retour aux réglages de base' },
  es: { advTitle: 'Ajustes avanzados', advancedOpen: 'Avanzado', advancedClosed: '← Volver a los ajustes básicos' },
  zh: { advTitle: '高级设置', advancedOpen: '高级', advancedClosed: '← 返回基本设置' }
}
for (const lang of Object.keys(text)) Object.assign(text[lang], linksText[lang], advancedText[lang], pageText[lang], bgTitleText[lang], tintText[lang], wallpaperText[lang], disclaimerText[lang], linkToggleText[lang], linksOwnText[lang], aiText[lang], manageText[lang], dataText[lang], tintCycleText[lang], wallText[lang], quoteTitleText[lang], ipText[lang], sectionText[lang], forecastText[lang], { hourHeads: hourHeads[lang] }, zonesText[lang], { ipPrivacy: ipPrivacy[lang] })
const weatherWording = {
  en: { location: 'Location', locIp: 'My place via IP address', locCity: 'A city I choose', noSource: 'Choose a place', needPlace: 'The weather needs a place: choose your IP address or a city below.' },
  nl: { location: 'Locatie', locIp: 'Mijn plaats via IP-adres', locCity: 'Een stad die ik kies', noSource: 'Kies een plaats', needPlace: 'Het weer heeft een plaats nodig: kies hieronder je IP-adres of een stad.' },
  de: { location: 'Standort', locIp: 'Mein Ort per IP-Adresse', locCity: 'Eine Stadt, die ich wähle', noSource: 'Ort wählen', needPlace: 'Das Wetter braucht einen Ort: wähle unten deine IP-Adresse oder eine Stadt.' },
  fr: { location: 'Position', locIp: 'Ma position via IP', locCity: 'Une ville que je choisis', noSource: 'Choisir un lieu', needPlace: 'La météo a besoin d’un lieu : choisissez ci-dessous votre adresse IP ou une ville.' },
  es: { location: 'Ubicación', locIp: 'Mi lugar por IP', locCity: 'Una ciudad que elijo', noSource: 'Elige un lugar', needPlace: 'El tiempo necesita un lugar: elige abajo tu IP o una ciudad.' },
  zh: { location: '位置', locIp: '通过 IP 地址定位', locCity: '我选择的城市', noSource: '选择地点', needPlace: '天气需要一个地点：请在下方选择你的 IP 地址或一个城市。' },
}
for (const lang of Object.keys(text)) Object.assign(text[lang], weatherWording[lang])
// Help: the settings window's help. The same content as the README, without screenshots.
const helpText = {
  en: { title: 'Help', settings: 'Settings', close: 'Close', sections: [
    ['Search', 'Type and press Enter, or click the magnifier. The icon on the left shows the search engine: click it to switch between DuckDuckGo (the default), Kagi, Brave and Google. Your choice is remembered.'],
    ['Clock', 'Hover over the time to see your time zone. Click the time to cycle through 24-hour, 12-hour and full time with seconds. When time zones are on, the clock icon above the time opens the zones you chose.'],
    ['Date', 'Hover over the date to see the ISO week and the day of the year. Click it to switch between the long form and DD-MM-YYYY.'],
    ['Links', 'The button at the top left opens your links. The icons at the top of that window are permanent. Hovering the button shows your own links. You can add up to 15 links of your own, each with an optional description, and remove or edit them. With Own links off, the button opens Wikipedia directly.'],
    ['Weather', 'Off by default. Turn it on in Settings and choose where to find the weather: your IP address, or a city you pick. Hover over the temperature for a short preview; click it for the full forecast with the next 6 hours and seven days. Up to five more places can be added in Manage, under Weather; choose one in this window to see its forecast.'],
    ['Background', 'The round button at the bottom right turns the wallpaper on or off. The slider at the bottom left tints the background; on a phone, the button there steps through the colours.'],
    ['Settings', 'Open them with the gear at the top right, or press ?. Press Esc to close. Options that depend on another option are greyed out until that one is on. The page presets (Minimal and Standard) sit at the top of the settings. Personal shows when your choices match neither. Advanced lists every option in four groups; its link goes back to the basic settings.'],
    ['Your data', 'Your choices are stored only in this browser. Weather sends your IP address to ipapi.co, or the city you pick to Open-Meteo, and only while weather is on. Showing your IP address uses the same lookup. Nothing else leaves the page. "Reset settings" brings back the defaults. "Delete my links, AI shortcuts and places" removes your own links, AI shortcuts, time zones and city, and nothing else. Extra places send their name to Open-Meteo to find them and fetch their forecast.'],
  ] },
  nl: { title: 'Help', settings: 'Instellingen', close: 'Sluiten', sections: [
    ['Zoeken', 'Typ en druk op Enter, of klik op het vergrootglas. Het icoon links toont de zoekmachine: klik erop om te wisselen tussen DuckDuckGo (de standaard), Kagi, Brave en Google. Je keuze wordt onthouden.'],
    ['Klok', 'Ga met de muis over de tijd om je tijdzone te zien. Klik op de tijd om te wisselen tussen 24 uur, 12 uur en volledige tijd met seconden. Staan de tijdzones aan, dan opent het klokje boven de tijd de zones die je koos.'],
    ['Datum', 'Ga met de muis over de datum om de ISO-week en de dag van het jaar te zien. Klik erop om te wisselen tussen de lange vorm en DD-MM-JJJJ.'],
    ['Links', 'De knop linksboven opent je links. De icoontjes bovenaan dat venster zijn vast. Met de muis over de knop zie je je eigen links. Je kunt er maximaal 15 toevoegen, elk met een optionele beschrijving, en ze bewerken of verwijderen. Staat Eigen links uit, dan opent de knop direct Wikipedia.'],
    ['Weer', 'Standaard uit. Zet het aan in de instellingen en kies waar het weer vandaan komt: je IP-adres, of een stad die je kiest. Ga met de muis over de temperatuur voor een korte voorspelling; klik erop voor de volledige verwachting met de komende 6 uur en zeven dagen. Je kunt in Beheren onder Weer tot vijf extra plaatsen toevoegen; kies er in dit venster een om die voorspelling te zien.'],
    ['Achtergrond', 'De ronde knop rechtsonder zet de wallpaper aan of uit. De schuif linksonder kleurt de achtergrond; op de telefoon wissel je met de knop daar door de kleuren.'],
    ['Instellingen', 'Open ze met het tandwiel rechtsboven, of druk op ?. Druk op Esc om te sluiten. Opties die van een andere optie afhangen, zijn grijs tot die aan staat. Bovenaan staan de paginakeuzes Minimaal en Standaard. Persoonlijk verschijnt als je keuzes bij geen van beide passen. Geavanceerd toont alle opties in vier groepen; de link ernaast brengt je terug naar de basisinstellingen.'],
    ['Je gegevens', 'Je keuzes worden alleen in deze browser bewaard. Het weer stuurt je IP-adres naar ipapi.co, of de stad die je kiest naar Open-Meteo, en alleen als het weer aanstaat. Het tonen van je IP-adres gebruikt dezelfde opzoeking. Er gaat verder niets naar buiten. "Instellingen resetten" zet de standaard terug. "Eigen links, AI-snelkoppelingen en plaatsen wissen" verwijdert alleen je eigen links, AI-snelkoppelingen, tijdzones, je stad en extra plaatsen. Extra plaatsen sturen hun naam naar Open-Meteo om ze te vinden en hun verwachting op te halen.'],
  ] },
  de: { title: 'Hilfe', settings: 'Einstellungen', close: 'Schließen', sections: [
    ['Suche', 'Tippe und drücke Enter, oder klicke auf die Lupe. Das Symbol links zeigt die Suchmaschine: Klick darauf, um zwischen DuckDuckGo (Standard), Kagi, Brave und Google zu wechseln. Deine Wahl wird gespeichert.'],
    ['Uhr', 'Fahre mit der Maus über die Zeit, um deine Zeitzone zu sehen. Ein Klick auf die Zeit wechselt zwischen 24-Stunden-, 12-Stunden- und voller Zeit mit Sekunden. Sind Zeitzonen aktiv, öffnet die Kugel über der Zeit die gewählten Zonen.'],
    ['Datum', 'Fahre mit der Maus über das Datum, um die ISO-Woche und den Tag des Jahres zu sehen. Ein Klick wechselt zwischen langer Form und TT-MM-JJJJ.'],
    ['Links', 'Die Schaltfläche oben links öffnet deine Links. Die Symbole oben im Fenster sind fest. Mit der Maus über der Schaltfläche siehst du deine eigenen Links. Du kannst bis zu 15 eigene Links hinzufügen, mit optionaler Beschreibung, und sie bearbeiten oder entfernen. Ist Eigene Links aus, öffnet die Schaltfläche direkt Wikipedia.'],
    ['Wetter', 'Standardmäßig aus. Schalte es in den Einstellungen ein und wähle, woher das Wetter kommt: deine IP-Adresse oder eine Stadt, die du wählst. Fahre mit der Maus über die Temperatur für eine kurze Vorschau; klicke für die vollständige Vorhersage mit den nächsten 6 Stunden und sieben Tagen. Unter Verwalten, Wetter kannst du bis zu fünf weitere Orte hinzufügen; wähle hier einen aus, um dessen Vorhersage zu sehen.'],
    ['Hintergrund', 'Die runde Schaltfläche unten rechts schaltet das Hintergrundbild ein oder aus. Der Regler unten links färbt den Hintergrund; am Telefon wechselst du mit der Schaltfläche dort die Farben.'],
    ['Einstellungen', 'Öffne sie mit dem Zahnrad oben rechts oder drücke ?. Esc schließt sie. Optionen, die von einer anderen abhängen, sind grau, bis diese eingeschaltet ist. Oben stehen die Seitenvorlagen Minimal und Standard. Persönlich erscheint, wenn deine Auswahl zu keiner passt. Erweitert zeigt alle Optionen in vier Gruppen; der Link führt zurück zu den Grundeinstellungen.'],
    ['Deine Daten', 'Deine Einstellungen werden nur in diesem Browser gespeichert. Das Wetter sendet deine IP-Adresse an ipapi.co bzw. die gewählte Stadt an Open-Meteo, und nur wenn das Wetter aktiv ist. Das Anzeigen deiner IP-Adresse nutzt dieselbe Abfrage. Sonst verlässt nichts die Seite. „Einstellungen zurücksetzen“ stellt die Standards wieder her. „Eigene Links, KI-Verknüpfungen und Orte löschen“ entfernt nur deine eigenen Links, KI-Verknüpfungen, Zeitzonen, deine Stadt und weitere Orte. Zusätzliche Orte senden ihren Namen an Open-Meteo, um sie zu finden und ihre Vorhersage abzurufen.'],
  ] },
  fr: { title: 'Aide', settings: 'Paramètres', close: 'Fermer', sections: [
    ['Recherche', 'Tapez et appuyez sur Entrée, ou cliquez sur la loupe. L’icône à gauche indique le moteur : cliquez dessus pour passer de DuckDuckGo (par défaut) à Kagi, Brave ou Google. Votre choix est mémorisé.'],
    ['Horloge', 'Passez la souris sur l’heure pour voir votre fuseau. Cliquez sur l’heure pour passer de 24 heures à 12 heures, puis à l’heure complète avec les secondes. Si les fuseaux sont activés, l’icône d’horloge au-dessus de l’heure ouvre les fuseaux choisis.'],
    ['Date', 'Passez la souris sur la date pour voir la semaine ISO et le jour de l’année. Cliquez pour passer de la forme longue à JJ-MM-AAAA.'],
    ['Liens', 'Le bouton en haut à gauche ouvre vos liens. Les icônes en haut de cette fenêtre sont permanentes. Survoler le bouton affiche vos propres liens. Vous pouvez en ajouter jusqu’à 15, avec une description facultative, et les modifier ou les supprimer. Si Liens personnels est désactivé, le bouton ouvre directement Wikipédia.'],
    ['Météo', 'Désactivée par défaut. Activez-la dans les paramètres et choisissez d’où vient la météo : votre adresse IP, ou une ville de votre choix. Survolez la température pour un aperçu ; cliquez pour la prévision complète sur 6 heures et sept jours. Vous pouvez ajouter jusqu’à cinq lieux de plus dans Gérer, sous Météo ; choisissez-en un dans cette fenêtre pour voir sa prévision.'],
    ['Fond', 'Le bouton rond en bas à droite active ou désactive le fond d’écran. Le curseur en bas à gauche teinte le fond ; sur téléphone, le bouton à cet endroit fait défiler les couleurs.'],
    ['Paramètres', 'Ouvrez-les avec l’engrenage en haut à droite, ou appuyez sur ?. Échap ferme. Les options qui dépendent d’une autre sont grisées tant que celle-ci n’est pas activée. En haut se trouvent les pages Minimal et Standard. Personnalisé s’affiche si vos choix ne correspondent à aucune. Avancé affiche toutes les options en quatre groupes ; le lien ramène aux réglages de base.'],
    ['Vos données', 'Vos choix ne sont conservés que dans ce navigateur. La météo envoie votre adresse IP à ipapi.co, ou la ville choisie à Open-Meteo, et seulement si la météo est activée. Afficher votre adresse IP utilise la même requête. Rien d’autre ne quitte la page. « Réinitialiser les réglages » rétablit les valeurs par défaut. « Supprimer mes liens, raccourcis IA et lieux » retire seulement vos liens personnels, raccourcis IA, fuseaux, votre ville et les lieux supplémentaires. Les lieux supplémentaires envoient leur nom à Open-Meteo pour les trouver et récupérer leur prévision.'],
  ] },
  es: { title: 'Ayuda', settings: 'Ajustes', close: 'Cerrar', sections: [
    ['Búsqueda', 'Escribe y pulsa Intro, o haz clic en la lupa. El icono de la izquierda muestra el buscador: haz clic para cambiar entre DuckDuckGo (por defecto), Kagi, Brave y Google. Tu elección se recuerda.'],
    ['Reloj', 'Pasa el ratón sobre la hora para ver tu zona horaria. Haz clic en la hora para cambiar entre 24 horas, 12 horas y hora completa con segundos. Si las zonas horarias están activas, el globo sobre la hora abre las zonas que elegiste.'],
    ['Fecha', 'Pasa el ratón sobre la fecha para ver la semana ISO y el día del año. Haz clic para cambiar entre la forma larga y DD-MM-AAAA.'],
    ['Enlaces', 'El botón de arriba a la izquierda abre tus enlaces. Los iconos de la parte superior de esa ventana son fijos. Al pasar el ratón sobre el botón ves tus propios enlaces. Puedes añadir hasta 15, cada uno con una descripción opcional, y editarlos o quitarlos. Con Enlaces propios desactivado, el botón abre Wikipedia directamente.'],
    ['Tiempo', 'Desactivado por defecto. Actívalo en los ajustes y elige de dónde viene: tu IP, o una ciudad que elijas. Pasa el ratón sobre la temperatura para una vista previa; haz clic para la previsión completa de 6 horas y siete días. Puedes añadir hasta cinco lugares más en Gestionar, en Tiempo; elige uno en esta ventana para ver su previsión.'],
    ['Fondo', 'El botón redondo de abajo a la derecha activa o desactiva el fondo. El control de abajo a la izquierda tiñe el fondo; en el móvil, el botón de ahí cambia de color.'],
    ['Ajustes', 'Ábrelos con el engranaje de arriba a la derecha, o pulsa ?. Esc cierra. Las opciones que dependen de otra aparecen en gris hasta que esa esté activa. Arriba están las páginas Mínimo y Estándar. Personal aparece si tus opciones no coinciden con ninguna. Avanzado muestra todas las opciones en cuatro grupos; el enlace vuelve a los ajustes básicos.'],
    ['Tus datos', 'Tus elecciones solo se guardan en este navegador. El tiempo envía tu IP a ipapi.co, o la ciudad que elijas a Open-Meteo, y solo mientras esté activado. Mostrar tu IP usa la misma consulta. Nada más sale de la página. «Restablecer ajustes» devuelve los valores por defecto. «Borrar mis enlaces, accesos de IA y lugares» quita solo tus enlaces propios, accesos de IA, zonas horarias, tu ciudad y los lugares adicionales. Los lugares adicionales envían su nombre a Open-Meteo para encontrarlos y obtener su previsión.'],
  ] },
  zh: { title: '帮助', settings: '设置', close: '关闭', sections: [
    ['搜索', '输入后按 Enter，或点击放大镜。左侧图标显示搜索引擎：点击可在 DuckDuckGo（默认）、Kagi、Brave 和 Google 之间切换。你的选择会被记住。'],
    ['时钟', '把鼠标移到时间上可看到你的时区。点击时间可在 24 小时制、12 小时制和带秒的完整时间之间切换。开启时区后，时间上方的地球图标会打开你选择的时区。'],
    ['日期', '把鼠标移到日期上可看到 ISO 周数和一年中的第几天。点击可在长格式和 DD-MM-YYYY 之间切换。'],
    ['链接', '左上角的按钮打开你的链接。该窗口顶部的图标是固定的。把鼠标移到按钮上可看到你自己的链接。你最多可以添加 15 个链接，每个都可以有可选说明，并可编辑或删除。关闭“自定义链接”后，按钮会直接打开维基百科。'],
    ['天气', '默认关闭。在设置中开启，并选择天气的来源：你的 IP 地址，或你选择的城市。把鼠标移到温度上可看到简短预报；点击可查看未来 6 小时和七天的完整预报。 在“管理”的“天气”中最多可添加五个其他地点；在此窗口中选择一个即可查看其预报。'],
    ['背景', '右下角的圆形按钮可开启或关闭壁纸。左下角的滑块会给背景染色；手机上，那里的按钮可切换颜色。'],
    ['设置', '点击右上角的齿轮打开，或按 ?。按 Esc 关闭。依赖其他选项的选项会变灰，直到那个选项开启。 设置顶部是页面预设：极简和标准。选择与两者都不符时显示“个性化”。“高级”按四组显示全部选项，链接可返回基本设置。'],
    ['你的数据', '你的选择只保存在这个浏览器中。开启天气时，页面会把你的 IP 地址发送到 ipapi.co，或把你选择的城市发送到 Open-Meteo。显示 IP 地址使用同一查询。除此之外，页面不会发送任何内容。“重置设置”会恢复默认值。“删除我的链接、AI 快捷方式和地点”只删除你的自定义链接、AI 快捷方式、时区和城市。 额外地点会把名称发送到 Open-Meteo 以查找位置并获取预报。'],
  ] },
};

const t = text[uiLang] || text.en
const helpCopy = helpText[uiLang] || helpText.en
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
const fetchCached = async (key, maxAge, url, fresh = false) => {
  try {
    const hit = JSON.parse(localStorage.getItem(key) || 'null')
    if (!fresh && hit && Date.now() - hit.at < maxAge) return hit.data
  } catch {}
  const data = await (await fetch(url)).json()
  try { localStorage.setItem(key, JSON.stringify({ at: Date.now(), data })) } catch {}
  return data
}

const weatherRow = (...cells) => {
  const row = document.createElement('div')
  row.className = 'weather-row'
  row.append(...cells.map((cell) => (cell instanceof Node ? cell : Object.assign(document.createElement('span'), { textContent: cell }))))
  return row
}

// A cell with a condition icon before its text, e.g. an hour or the current state.
const iconCell = (key, label, className) => {
  const cell = el('span', className)
  cell.innerHTML = weatherIcon(key)
  cell.append(label)
  return cell
}

// The city you entered wins; otherwise the IP lookup, if you allow it.
const getPlace = async () => {
  if (locationMode === 'city') return city ? { label: `${city.name}, ${city.country}`, latitude: city.latitude, longitude: city.longitude, ip: null } : null
  const info = await ipLookup()
  if (typeof info.latitude !== 'number') return null
  return { label: `${info.city}, ${info.country_name}`, latitude: info.latitude, longitude: info.longitude, ip: info.ip, detail: [`${info.city}, ${info.country_name}`, info.org].filter(Boolean).join(' · ') }
}

// Latest answer, kept so the full forecast can be drawn without asking again.
let current = null
// Extra places next to the own one: five at most, shown as chips in the forecast window.
const PLACE_LIMIT = 5
let extraPlaces = []
try {
  const saved = JSON.parse(localStorage.getItem('weatherPlaces') || 'null')
  if (Array.isArray(saved)) extraPlaces = saved.filter((p) => p && typeof p.label === 'string' && typeof p.latitude === 'number' && typeof p.longitude === 'number').slice(0, PLACE_LIMIT)
} catch {}
const savePlaces = () => writeKey('weatherPlaces', JSON.stringify(extraPlaces))
// The place shown in the forecast window: null for the own place, otherwise { place, forecast }.
let viewed = null
let viewIndex = 0

const forecastUrl = (place) => 'https://api.open-meteo.com/v1/forecast' +
  `?latitude=${place.latitude}&longitude=${place.longitude}` +
  '&current=temperature_2m,weather_code,apparent_temperature,wind_speed_10m,relative_humidity_2m' +
  '&hourly=temperature_2m,precipitation_probability,wind_speed_10m,weather_code' +
  '&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max' +
  '&timezone=auto&forecast_days=7&forecast_hours=8'

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
      iconCell(weatherKey(forecast.hourly.weather_code[start + 1 + i]), time.slice(11, 16), 'hour-cell'),
      `${Math.round(forecast.hourly.temperature_2m[start + 1 + i])}°`,
      `${forecast.hourly.precipitation_probability[start + 1 + i]}%`
    ))
    weatherButton.innerHTML = `${weatherIcon(key)}<span>${temperature}</span>`
    weatherButton.setAttribute('aria-label', `${key ? words[key] : ''} ${temperature}`.trim())
    weatherDetail.replaceChildren(
      el('div', 'preview-title', place.label),
      weatherRow(iconCell(key, key ? words[key] : '', 'now-cell'), temperature, ''),
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
  const shown = viewed || current
  if (!shown) return
  const { place, forecast } = shown
  renderPlaceChips()
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
  const hourRows = [hourHeader, ...forecast.hourly.time.slice(start + 1, start + 7).map((time, i) => {
    const row = el('div', 'forecast-row')
    const j = start + 1 + i
    row.append(
      iconCell(weatherKey(forecast.hourly.weather_code[j]), time.slice(11, 16), 'hour-cell'),
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
  // The location options belong to the weather, so they are off while it is.
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
  viewed = null
  viewIndex = 0
  renderForecast()
  forecastFrom = document.activeElement
  forecastDialog.hidden = false
  forecastDialog.querySelector('.settings-panel').focus()
}

const closeForecast = () => {
  forecastDialog.hidden = true
  if (forecastFrom && forecastFrom.focus) forecastFrom.focus()
}
document.getElementById('forecast-edit').addEventListener('click', () => {
  closeForecast()
  openManage('weather')
})

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

// The forecast of an extra place is fetched the same way as the own one, and cached the same way.
const loadPlace = (place) => fetchCached(`weather:v2:${place.latitude},${place.longitude}`, 30 * 60e3, forecastUrl(place))
const choosePlace = async (index) => {
  viewIndex = index
  viewed = null
  if (index > 0) {
    const place = extraPlaces[index - 1]
    try {
      viewed = { place, forecast: await loadPlace(place) }
    } catch {
      viewIndex = 0
    }
  }
  renderForecast()
}
const renderPlaceChips = () => {
  sortPlaces()
  const box = document.getElementById('forecast-places')
  if (!weatherOn || !current || extraPlaces.length === 0) {
    box.replaceChildren()
    return
  }
  box.replaceChildren(...[current.place.label, ...extraPlaces.map((place) => place.label)].map((label, index) => {
    const chip = el('button', 'place-chip', label)
    chip.type = 'button'
    chip.setAttribute('aria-pressed', String(index === viewIndex))
    chip.addEventListener('click', () => choosePlace(index))
    return chip
  }))
}

// Extra places in time-zone order, the same order as the time zones: earliest UTC offset first.
const sortPlaces = () => {
  const now = new Date()
  extraPlaces.sort((a, b) => utcOffset(a.timezone || 'UTC', now) - utcOffset(b.timezone || 'UTC', now) || a.label.localeCompare(b.label))
}

// The weather tab: the own place, and the extra places with a remove button each.
const renderPlaces = () => {
  sortPlaces()
  document.getElementById('weather-own').textContent = `${t.placeOwn}: ${current ? current.place.label : t.placeNone}`
  document.getElementById('place-list').replaceChildren(...extraPlaces.map((place, index) => {
    const row = document.createElement('li')
    row.append(el('span', '', place.label))
    row.append(aiButton(t.placeRemove, '×', () => {
      extraPlaces = extraPlaces.filter((_, i) => i !== index)
      if (viewIndex === index + 1) choosePlace(0)
      savePlaces()
      renderPlaces()
      renderPlaceChips()
    }))
    return row
  }))
}
const placeMsg = document.getElementById('place-msg')
// City suggestions while typing, the same kind of lookup the time zone box does. Only the typed name is sent.
// Results are ranked by population, so the big city wins a shared name; the region tells apart the rest.
// The region is shown only when it adds something: 'Shanghai Shi' under Shanghai is left out.
const cityLabel = (r) => [r.name, r.admin1 && !r.name.toLowerCase().includes(r.admin1.toLowerCase()) ? r.admin1 : '', r.country].filter(Boolean).join(', ')
const fetchCities = async (query, count, language) => (await (await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=${count}&language=${language}&format=json`)).json()).results || []
const geocode = async (query, count) => {
  let results = await fetchCities(query, count, uiLang)
  if (!results.length && uiLang !== 'en') results = await fetchCities(query, count, 'en')
  return results.sort((x, y) => (y.population || 0) - (x.population || 0))
}
const suggestCities = (input, datalist, hits) => {
  let timer = null
  input.addEventListener('input', () => {
    clearTimeout(timer)
    const query = input.value.trim()
    if (query.length < 2) { datalist.replaceChildren(); return }
    timer = setTimeout(async () => {
      try {
        const results = (await geocode(query, 10)).slice(0, 5)
        hits.clear()
        for (const r of results) hits.set(cityLabel(r), r)
        datalist.replaceChildren(...results.map((r) => Object.assign(document.createElement('option'), { value: cityLabel(r) })))
      } catch {
        datalist.replaceChildren()
      }
    }, 300)
  })
}
const placeHits = new Map()
suggestCities(document.getElementById('place-input'), document.getElementById('place-options'), placeHits)
const cityHits = new Map()
suggestCities(settingsFields.cityInput, document.getElementById('city-options'), cityHits)

document.getElementById('place-form').addEventListener('submit', async (e) => {
  e.preventDefault()
  const input = document.getElementById('place-input')
  const name = input.value.trim()
  if (!name) return
  if (extraPlaces.length >= PLACE_LIMIT) { placeMsg.textContent = t.placeLimit; return }
  try {
    const hit = placeHits.get(name) || (await geocode(name, 10))[0]
    if (!hit) { placeMsg.textContent = t.notFound; return }
    const place = { label: cityLabel(hit), latitude: hit.latitude, longitude: hit.longitude, timezone: hit.timezone || 'UTC' }
    if (extraPlaces.some((p) => p.label === place.label)) { placeMsg.textContent = t.placeDuplicate; return }
    extraPlaces = [...extraPlaces, place]
    sortPlaces()
    savePlaces()
    input.value = ''
    placeMsg.textContent = ''
    renderPlaces()
  } catch {
    placeMsg.textContent = t.unavailable
  }
})
const manageOpenButton = document.getElementById('manage-open')
manageOpenButton.addEventListener('click', () => openManage(manageTab))

// Settings and help: a floating panel, opened with ? and closed with Escape.
const openedFrom = { el: null }
const isTyping = (el) => !!el && el.matches && el.matches('input, textarea, select, [contenteditable="true"]')

const applySettingsText = () => {
  document.getElementById('settings-title').textContent = document.getElementById('advanced').hidden ? t.title : t.advTitle
  document.getElementById('settings-hint').textContent = t.hint
  document.getElementById('lbl-weather').textContent = t.weather
  document.getElementById('lbl-location').textContent = t.location
  document.getElementById('help-open').textContent = helpCopy.title
  document.getElementById('sec-weather').textContent = t.secWeather
  document.getElementById('sec-look').textContent = t.secLook
  document.getElementById('lbl-loc-ip').textContent = t.locIp
  document.getElementById('lbl-loc-city').textContent = t.locCity
  document.getElementById('ip-window-title').textContent = t.ipWindowTitle
  document.getElementById('ip-open').textContent = t.ipWindowTitle
  document.getElementById('ip-window-close').setAttribute('aria-label', t.close)
  document.getElementById('links-window-title').textContent = t.linksTitle
  document.getElementById('links-window-close').setAttribute('aria-label', t.close)
  document.getElementById('links-manage').textContent = t.linksEdit
  document.getElementById('ask-ai-caption').title = t.askAiTip
  document.getElementById('forecast-edit').textContent = t.placesEdit
  document.getElementById('zones-window-title').textContent = t.zonesTitle
  document.getElementById('zones-window-close').setAttribute('aria-label', t.close)
  document.getElementById('zones-manage').textContent = t.zonesEdit
  renderIp()
  document.getElementById('lbl-city').textContent = t.cityLabel
  document.getElementById('city-save').textContent = t.save
  settingsFields.cityClear.textContent = t.clearCity
  document.getElementById('lbl-quote').textContent = t.quote
  document.getElementById('lbl-zones').textContent = t.zonesToggle
  document.getElementById('lbl-wallpaper').textContent = t.wallpaperToggle
  document.getElementById('sec-bg').textContent = t.secBackground
  document.querySelector('.presets').setAttribute('aria-label', t.secPage)
  document.getElementById('lbl-preset-minimal').textContent = t.presetMinimal
  document.getElementById('lbl-preset-standard').textContent = t.presetStandard
  document.getElementById('lbl-preset-custom').textContent = t.presetCustom
  document.getElementById('sec-ai').textContent = t.aiSec
  document.getElementById('lbl-askai').textContent = t.aiOn
  document.getElementById('ai-name').setAttribute('aria-label', t.aiName)
  document.getElementById('ai-url').setAttribute('aria-label', t.aiUrl)
  document.getElementById('manage-open').textContent = t.manageOpen
  document.getElementById('manage-title').textContent = t.manageOpen
  document.getElementById('ai-save').textContent = t.aiSave
  document.getElementById('ai-cancel').textContent = t.aiCancel
  document.getElementById('ai-form-title').textContent = t.aiAddTitle
  document.getElementById('lbl-ai-name').textContent = t.aiName
  document.getElementById('lbl-ai-url').textContent = t.aiUrl
  document.getElementById('lbl-tint').textContent = t.tintToggle
  document.getElementById('lbl-wallpaper-btn').textContent = t.wallpaperButton
  document.getElementById('lbl-links').textContent = t.linksToggle
  document.getElementById('advanced-toggle').textContent = advancedToggle.getAttribute('aria-expanded') === 'true' ? t.advancedClosed : t.advancedOpen
  tintCycle.setAttribute('aria-label', t.tintCycle)
  document.getElementById('quote').title = t.quoteAnother
  tintCycle.title = t.tintCycle
  const foot = footerText[uiLang] || footerText.en
  document.getElementById('foot-pre').textContent = foot.pre
  document.getElementById('foot-post').textContent = foot.post
  document.getElementById('foot-link').title = foot.title
  document.getElementById('lbl-links-own').textContent = t.linksOwn
  document.getElementById('zone-label').textContent = t.zonesAdd
  document.getElementById('zone-add-btn').textContent = t.zoneAddBtn
  document.getElementById('manage-close').setAttribute('aria-label', t.close)
  document.getElementById('tab-links').textContent = t.tabLinks
  document.getElementById('tab-zones').textContent = t.tabZones
  document.getElementById('tab-ai').textContent = t.tabAi
  document.getElementById('tab-weather').textContent = t.tabWeather
  document.getElementById('lbl-place').textContent = t.placeLabel
  document.getElementById('place-add').textContent = t.placeAdd
  labelLinksButton()
  document.getElementById('lbl-link-name').textContent = t.lblName
  document.getElementById('lbl-link-url').textContent = t.lblUrl
  document.getElementById('lbl-link-desc').textContent = t.lblDesc
  zonesButton.setAttribute('aria-label', t.zonesButton)
  zonesButton.title = t.zonesButton
  document.getElementById('privacy').textContent = t.privacy
  settingsFields.resetSettings.textContent = t.resetSettings
  document.getElementById('export-data').textContent = t.exportData
  document.getElementById('import-data').textContent = t.importData
  settingsFields.resetData.textContent = t.resetData
  document.getElementById('settings-close').setAttribute('aria-label', t.close)
  document.getElementById('forecast-close').setAttribute('aria-label', t.close)
  settingsButton.setAttribute('aria-label', t.open)
  settingsButton.title = t.open
}

const syncSettings = () => {
  settingsFields.weather.checked = weatherOn
  settingsFields.locIp.checked = locationMode === 'ip'
  settingsFields.locCity.checked = locationMode === 'city'
  settingsFields.quote.checked = quoteOn
  renderIp()
  settingsFields.zones.checked = zonesOn
  settingsFields.wallpaper.checked = wallpaperOn
  settingsFields.tint.checked = tintOn
  settingsFields.wallpaperButton.checked = wallpaperButtonOn
  settingsFields.links.checked = linksOn
  settingsFields.linksOwn.checked = linksOwn
  settingsFields.askai.checked = askaiOn
  settingsFields.preset.forEach((radio) => { radio.checked = radio.value === matchPreset() })
  settingsFields.cityClear.hidden = !city
  updateWeatherHint()
  settingsFields.cityMessage.textContent = ''
}

// Advanced options: the page presets and the disclaimer are the basic view; the rest opens from a link.
const advancedToggle = document.getElementById('advanced-toggle')
const advancedBlock = document.getElementById('advanced')
const basicPages = [document.querySelector('.presets')]
const setAdvanced = (open) => {
  advancedBlock.hidden = !open
  basicPages.forEach((el) => { el.hidden = open })
  advancedBlock.closest('.settings-panel').classList.toggle('is-wide', open)
  advancedToggle.setAttribute('aria-expanded', String(open))
  advancedToggle.textContent = open ? t.advancedClosed : t.advancedOpen
  document.getElementById('settings-title').textContent = open ? t.advTitle : t.title
  // Data beheren and IP details live in the basic view only; one place is enough.
  manageOpenButton.hidden = open
  ipOpen.hidden = open
}
advancedToggle.addEventListener('click', () => setAdvanced(advancedBlock.hidden))

const openSettings = () => {
  openedFrom.el = document.activeElement
  setAdvanced(false)
  syncSettings()
  settings.hidden = false
  settings.querySelector('.settings-panel').focus()
}

const closeSettings = () => {
  settings.hidden = true
  setAdvanced(false)
  if (openedFrom.el && openedFrom.el.focus) openedFrom.el.focus()
}

settingsButton.addEventListener('click', openSettings)

// Help: the same guide as the README, opened from the settings window. Escape closes it.
const helpWindow = document.getElementById('help')
const helpBody = document.getElementById('help-body')
let helpFrom = null
const renderHelp = () => {
  document.getElementById('help-title').textContent = helpCopy.title
  document.getElementById('help-close').setAttribute('aria-label', helpCopy.close)
  helpBody.replaceChildren(...helpCopy.sections.map(([heading, body]) => {
    const section = el('section', 'help-section')
    section.append(el('h3', '', heading), el('p', '', body))
    return section
  }))
}
const openHelp = () => {
  helpFrom = document.activeElement
  renderHelp()
  helpWindow.hidden = false
  helpWindow.querySelector('.settings-panel').focus()
}
const closeHelp = () => {
  helpWindow.hidden = true
  if (helpFrom && helpFrom.focus) helpFrom.focus()
}
document.getElementById('help-open').addEventListener('click', openHelp)
document.getElementById('help-close').addEventListener('click', closeHelp)
helpWindow.addEventListener('click', (e) => { if (e.target === helpWindow) closeHelp() })
document.getElementById('settings-close').addEventListener('click', closeSettings)
settings.addEventListener('click', (e) => { if (e.target === settings) closeSettings() })

document.addEventListener('keydown', (e) => {
  const open = [helpWindow, ipWindow, linksWindow, zonesWindow, forecastDialog, manageWindow, settings].find((d) => !d.hidden) || null
  if (!open) {
    if (e.key === '?' && !isTyping(e.target) && !e.ctrlKey && !e.metaKey && !e.altKey) {
      e.preventDefault()
      openSettings()
    }
    return
  }
  if (e.key === 'Escape') {
    if (open === helpWindow) closeHelp()
    else if (open === ipWindow) closeIpWindow()
    else if (open === linksWindow) closeLinks()
    else if (open === zonesWindow) closeZones()
    else if (open === forecastDialog) closeForecast()
    else if (open === manageWindow) closeManage()
    else if (!advancedBlock.hidden) setAdvanced(false)
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

// Wallpaper on or off, and whether its button shows, from settings.
settingsFields.wallpaper.addEventListener('change', () => {
  wallpaperOn = settingsFields.wallpaper.checked
  applyWallpaper(wallpaperOn)
  writeKey('wallpaper', wallpaperOn ? 'on' : 'off')
})
settingsFields.wallpaperButton.addEventListener('change', () => {
  wallpaperButtonOn = settingsFields.wallpaperButton.checked
  wallpaperToggle.hidden = !wallpaperButtonOn
  writeKey('wallpaperButton', wallpaperButtonOn ? 'on' : 'off')
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
  if (!zonesOn && manageTab === 'zones' && !manageWindow.hidden) closeManage()
  if (!zonesOn && !zonesWindow.hidden) closeZones()
})

// Ask AI links below the search bar.
let askaiOn = readFlag('askai', true)
const askAi = document.getElementById('ask-ai')
settingsFields.askai.addEventListener('change', () => {
  askaiOn = settingsFields.askai.checked
  writeKey('askai', askaiOn ? 'on' : 'off')
  renderAskAi()
})

// Pages: presets for how much is on the page. They only switch the display options; weather and the
// IP address are never changed by a preset, since they send data.
const presets = {
  minimal: { quote: false, links: true, linksOwn: false, zones: false, askai: false, wallpaper: false, wallpaperButton: false, tint: false },
  standard: { quote: false, links: true, linksOwn: false, zones: false, askai: true, wallpaper: true, wallpaperButton: true, tint: true },
}
// Weather and the IP display are off in both presets, so choosing one never starts a lookup.
// Weather is not part of the presets at all.
const currentState = () => ({ quote: quoteOn, links: linksOn, linksOwn: linksOwn, zones: zonesOn, askai: askaiOn, wallpaper: wallpaperOn, wallpaperButton: wallpaperButtonOn, tint: tintOn })
// The preset that matches the current choices: only the keys a preset names are compared.
const matchPreset = () => {
  const now = currentState()
  return Object.keys(presets).find((name) => Object.keys(presets[name]).every((key) => now[key] === presets[name][key])) || 'custom'
}
// Each option is changed through its own switch, so the same handlers and storage run as when clicked.
// Personal: the last mixed choices are kept, so switching to a page and back restores them.
const readPersonal = () => {
  try { return JSON.parse(localStorage.getItem('personalState') || 'null') } catch { return null }
}
const keepPersonal = () => {
  if (matchPreset() === 'custom') writeKey('personalState', JSON.stringify(currentState()))
}
const applyPreset = (name) => {
  const choice = name === 'custom' ? readPersonal() : presets[name]
  if (!choice) return syncSettings()
  keepPersonal()
  Object.keys(choice).forEach((key) => {
    const field = key === 'wallpaper' ? settingsFields.wallpaper : settingsFields[key === 'wallpaperButton' ? 'wallpaperButton' : key]
    field.checked = choice[key]
    field.dispatchEvent(new Event('change'))
  })
  writeKey('preset', name)
  syncSettings()
}
settingsFields.preset.forEach((radio) => radio.addEventListener('change', () => applyPreset(radio.value)))
// Changing an option in the advanced view can make a preset match or stop matching, so the page radio follows it.
advancedBlock.addEventListener('change', () => {
  keepPersonal()
  settingsFields.preset.forEach((radio) => { radio.checked = radio.value === matchPreset() })
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
    const hit = cityHits.get(name) || (await geocode(name, 10))[0]
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

// Two resets: the settings go back to the defaults; the personal data (own links, AI shortcuts, a city and
// the time zones) is deleted only when asked. Both reload the page so every part starts from storage.
const clearKeys = (keys) => {
  try {
    keys.forEach((key) => localStorage.removeItem(key))
    Object.keys(localStorage).filter((key) => key.startsWith('weather:')).forEach((key) => localStorage.removeItem(key))
  } catch {}
}
const personalKeys = ['links', 'askAiList', 'city', 'zones', 'location', 'weatherPlaces', 'personalState']
settingsFields.resetSettings.addEventListener('click', () => {
  clearKeys(['personalState', 'engine', 'theme', 'clockFormat', 'dateFormat', 'wallpaper', 'hue', 'weather', 'location', 'quote', 'ipInfo', 'timeZones', 'linksOn', 'linksOwn', 'wallpaperButton', 'tint', 'askai', 'preset'])
  location.reload()
})
settingsFields.resetData.addEventListener('click', () => {
  if (!confirm(t.resetDataConfirm)) return
  clearKeys(personalKeys)
  location.reload()
})

// Export and import: one JSON file with the settings and the personal data. Caches are left out.
// The file is for the user to keep (for example in iCloud Drive) and open on another device.
const EXPORT_SETTINGS = ['engine', 'theme', 'clockFormat', 'dateFormat', 'wallpaper', 'hue', 'weather', 'location', 'quote', 'timeZones', 'linksOn', 'linksOwn', 'wallpaperButton', 'tint', 'askai', 'preset', 'personalState']
const EXPORT_DATA = ['links', 'askAiList', 'city', 'zones', 'weatherPlaces']
// The export is a real link with a download name, so every browser treats the click as the user's download.
// Export: the file is made in the click and saved through a fresh download link, which is the pattern Safari
// on both iPhone and Mac handles as a normal download. The address is released after a while.
document.getElementById('export-data').addEventListener('click', (e) => {
  e.preventDefault()
  const payload = { app: 'Minimal-StartPage', version: 1, exported: new Date().toISOString(), settings: {}, data: {} }
  EXPORT_SETTINGS.forEach((key) => { const value = localStorage.getItem(key); if (value !== null) payload.settings[key] = value })
  EXPORT_DATA.forEach((key) => { try { const value = localStorage.getItem(key); if (value !== null) payload.data[key] = JSON.parse(value) } catch {} })
  const url = URL.createObjectURL(new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' }))
  const link = document.createElement('a')
  link.href = url
  link.download = 'minimal-startpage.json'
  document.body.append(link)
  link.click()
  link.remove()
  setTimeout(() => URL.revokeObjectURL(url), 40000)
})
const importFile = document.getElementById('import-file')
document.getElementById('import-data').addEventListener('click', () => importFile.click())
importFile.addEventListener('change', async () => {
  const file = importFile.files[0]
  importFile.value = ''
  if (!file) return
  let payload = null
  try { payload = JSON.parse(await file.text()) } catch {}
  if (!payload || payload.app !== 'Minimal-StartPage' || typeof payload.settings !== 'object' || typeof payload.data !== 'object') {
    alert(t.importInvalid)
    return
  }
  if (!confirm(t.importConfirm)) return
  clearKeys([...EXPORT_SETTINGS, ...EXPORT_DATA])
  Object.entries(payload.settings).forEach(([key, value]) => { if (EXPORT_SETTINGS.includes(key) && typeof value === 'string') writeKey(key, value) })
  Object.entries(payload.data).forEach(([key, value]) => { if (EXPORT_DATA.includes(key)) writeKey(key, JSON.stringify(value)) })
  location.reload()
})

// Older visits may still have a stored greeting name; remove it.
try { localStorage.removeItem('greetName') } catch {}

// Time zones: optional. A small globe next to the date opens a window with up to five extra zones.
const zonesButton = document.getElementById('zones-button')
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
// Read from the zone's wall-clock parts, which older Safari versions support (the longOffset name is not).
const utcOffset = (zone, now) => {
  const parts = Object.fromEntries(new Intl.DateTimeFormat('en-US', { timeZone: zone, hourCycle: 'h23', year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' }).formatToParts(now).map((part) => [part.type, Number(part.value)]))
  const wallClock = Date.UTC(parts.year, parts.month - 1, parts.day, parts.hour, parts.minute, parts.second)
  return Math.round((wallClock - (now.getTime() - now.getMilliseconds())) / 60000)
}
// The chosen zones, ordered from the earliest offset (-12) to the latest (+14).
const sortedZones = (now) => [...zones].sort((a, b) => utcOffset(a, now) - utcOffset(b, now) || cityOf(a).localeCompare(cityOf(b)))
const zoneClock = (zone, now) => now.toLocaleTimeString(clockMode === '12' ? 'en-US' : 'en-GB', { timeZone: zone, hour: '2-digit', minute: '2-digit', hour12: clockMode === '12' })
// Whole days between the local date and the date in the other zone, read from calendar dates.
const dayDifference = (zone, now) => {
  const ymd = (tz) => new Intl.DateTimeFormat('en-CA', { timeZone: tz, year: 'numeric', month: '2-digit', day: '2-digit' }).format(now)
  return Math.round((Date.parse(ymd(zone)) - Date.parse(ymd(localZone))) / 864e5)
}
const dayWordFor = (diff) => (diff === 0 ? '' : new Intl.RelativeTimeFormat(uiLang, { numeric: 'auto' }).format(diff, 'day'))

// The hover preview under the globe, like the weather preview: the chosen zones at a glance.
const zonesPreview = document.getElementById('zones-preview')
const renderPreview = () => {
  if (!zonesOn || !zones.length) {
    zonesPreview.replaceChildren()
    return
  }
  const now = new Date()
  zonesPreview.replaceChildren(...sortedZones(now).map((zone) => {
    const row = weatherRow(zoneName(zone), zoneTag(zone, now), zoneClock(zone, now), dayWordFor(dayDifference(zone, now)))
    row.classList.add('zone-line')
    return row
  }))
}

const zoneRows = (now, editable) => sortedZones(now).map((zone) => {
  const row = el('div', 'zone-row')
  row.append(zoneName(zone), zoneTag(zone, now), el('span', 'zone-time', zoneClock(zone, now)), el('span', 'zone-day', dayWordFor(dayDifference(zone, now))))
  if (editable) {
    const remove = Object.assign(document.createElement('button'), { type: 'button', className: 'zone-remove', textContent: '×' })
    remove.setAttribute('aria-label', `${t.remove} ${cityOf(zone)}`)
    remove.dataset.zone = zone
    row.append(remove)
  }
  return row
})
const renderZones = () => {
  const now = new Date()
  zonesLocalLine.textContent = `${t.zonesLocal}: ${cityOf(localZone)} ${zoneClock(localZone, now)} · ${utcLabel(localZone, now)}`
  const rows = zoneRows(now, true)
  zonesList.replaceChildren(...(rows.length ? rows : [el('p', 'zones-empty', t.zonesEmpty)]))
  const full = zones.length >= 5
  renderPreview()
  zoneInput.disabled = full
  zoneAddButton.disabled = full
  zoneMsg.textContent = full ? t.zonesMax : ''
}

const saveZones = () => writeKey('zones', JSON.stringify(zones))
// A short label such as UTC+1 or UTC−5:30, shown small next to the zone name.
const utcLabel = (zone, now) => {
  const minutes = utcOffset(zone, now)
  if (minutes === 0) return 'UTC'
  const abs = Math.abs(minutes)
  const clock = `${Math.floor(abs / 60)}${abs % 60 ? `:${String(abs % 60).padStart(2, '0')}` : ''}`
  return `UTC${minutes > 0 ? '+' : '−'}${clock}`
}
const zoneName = (zone) => el('span', 'zone-name', cityOf(zone))
const zoneTag = (zone, now) => el('span', 'zone-tag', utcLabel(zone, now))

// One panel for the links, time zones, AI shortcuts and weather places. Each opens on its own tab.
const manageWindow = document.getElementById('manage')
const manageTabs = [...manageWindow.querySelectorAll('.manage-tab-button')]
const manageSections = [...manageWindow.querySelectorAll('.manage-section')]
let manageTab = 'links'
let manageFrom = null
const showManageTab = (tab) => {
  manageTab = tab
  manageTabs.forEach((button) => {
    const on = button.dataset.tab === tab
    button.setAttribute('aria-selected', String(on))
    button.tabIndex = on ? 0 : -1
  })
  manageSections.forEach((section) => { section.hidden = section.dataset.tab !== tab })
  if (tab === 'links') resetLinkForm()
  if (tab === 'zones') renderZones()
  if (tab === 'ai') resetAiForm()
  if (tab === 'weather') renderPlaces()
}
const openManage = (tab) => {
  manageFrom = document.activeElement
  showManageTab(tab)
  manageWindow.hidden = false
  manageWindow.querySelector('.settings-panel').focus()
}
const closeManage = () => {
  manageWindow.hidden = true
  if (manageFrom && manageFrom.focus) manageFrom.focus()
}
manageTabs.forEach((button, index) => {
  button.addEventListener('click', () => showManageTab(button.dataset.tab))
  // Arrow keys move between the tabs, as the tab pattern expects; Home and End jump to the ends.
  button.addEventListener('keydown', (e) => {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key]
    let next = null
    if (step) next = (index + step + manageTabs.length) % manageTabs.length
    else if (e.key === 'Home') next = 0
    else if (e.key === 'End') next = manageTabs.length - 1
    if (next === null) return
    e.preventDefault()
    manageTabs[next].focus()
    showManageTab(manageTabs[next].dataset.tab)
  })
})
document.getElementById('manage-close').addEventListener('click', closeManage)
manageWindow.addEventListener('click', (e) => { if (e.target === manageWindow) closeManage() })

const zonesWindow = document.getElementById('zones-window')
const zonesWindowList = document.getElementById('zones-window-list')
const zonesLocalWindow = document.getElementById('zones-local-window')
const renderZonesWindow = () => {
  const now = new Date()
  zonesLocalWindow.textContent = `${t.zonesLocal}: ${cityOf(localZone)} ${zoneClock(localZone, now)} · ${utcLabel(localZone, now)}`
  const rows = zoneRows(now, false)
  zonesWindowList.replaceChildren(...(rows.length ? rows : [el('p', 'zones-empty', t.zonesEmpty)]))
}
const openZones = () => {
  renderZonesWindow()
  zonesWindow.hidden = false
  zonesWindow.querySelector('.settings-panel').focus()
}
const closeZones = () => { zonesWindow.hidden = true; zonesButton.focus() }
document.getElementById('zones-window-close').addEventListener('click', closeZones)
zonesWindow.addEventListener('click', (e) => { if (e.target === zonesWindow) closeZones() })
document.getElementById('zones-manage').addEventListener('click', () => {
  zonesWindow.hidden = true
  openManage('zones')
})
zonesButton.addEventListener('click', openZones)
zonesPreview.addEventListener('click', openZones)
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
  if (!manageWindow.hidden && manageTab === 'zones') renderZones()
}, 1000)

// Links. Permanent links are built in: Wikipedia, in the browser's language. They cannot be removed.
// Custom links are added by the visitor, up to 15. The whole links button can be switched off in settings.
const linksButton = document.getElementById('links-button')
const linksButtonIcon = linksButton.innerHTML
// Own links off: the button is a plain Wikipedia link with its logo, and the label says so.
const labelLinksButton = () => {
  const label = linksOwn ? t.linksButton : 'Wikipedia'
  linksButton.setAttribute('aria-label', label)
  linksButton.title = label
}
const linksPreview = document.getElementById('links-preview')
const linksIcons = document.getElementById('links-window-icons')
const linksOwnBox = document.getElementById('links-own')
const linksWindow = document.getElementById('links-window')
const linksList = document.getElementById('links-list')
const linkForm = document.getElementById('link-form')
const linkName = document.getElementById('link-name')
const linkUrl = document.getElementById('link-url')
const linkDesc = document.getElementById('link-desc')
const linkMsg = document.getElementById('link-msg')
const linkCancel = document.getElementById('link-cancel')
const linkSave = document.getElementById('link-save')
const linkFormTitle = document.getElementById('link-form-title')
const LINK_LIMIT = 15

// Only http and https addresses are accepted, so nothing like javascript: can be stored.
const safeUrl = (value) => {
  try {
    const url = new URL(value)
    return url.protocol === 'https:' || url.protocol === 'http:'
  } catch {
    return false
  }
}
const hostOf = (value) => {
  try { return new URL(value).host } catch { return '' }
}

// The Wikipedia edition follows the browser language, with English as the fallback.
const wikiCode = ['nl', 'de', 'fr', 'es', 'zh'].includes(uiLang) ? uiLang : 'en'
const brandIcons = {
  wikipedia: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.09 13.119c-.936 1.932-2.217 4.548-2.853 5.728-.616 1.074-1.127.931-1.532.029-1.406-3.321-4.293-9.144-5.651-12.409-.251-.601-.441-.987-.619-1.139-.181-.15-.554-.24-1.122-.271C.103 5.033 0 4.982 0 4.898v-.455l.052-.045c.924-.005 5.401 0 5.401 0l.051.045v.434c0 .119-.075.176-.225.176l-.564.031c-.485.029-.727.164-.727.436 0 .135.053.33.166.601 1.082 2.646 4.818 10.521 4.818 10.521l.136.046 2.411-4.81-.482-1.067-1.658-3.264s-.318-.654-.428-.872c-.728-1.443-.712-1.518-1.447-1.617-.207-.023-.313-.05-.313-.149v-.468l.06-.045h4.292l.113.037v.451c0 .105-.076.15-.227.15l-.308.047c-.792.061-.661.381-.136 1.422l1.582 3.252 1.758-3.504c.293-.64.233-.801.111-.947-.07-.084-.305-.22-.812-.24l-.201-.021c-.052 0-.098-.015-.145-.051-.045-.031-.067-.076-.067-.129v-.427l.061-.045c1.247-.008 4.043 0 4.043 0l.059.045v.436c0 .121-.059.178-.193.178-.646.03-.782.095-1.023.439-.12.186-.375.589-.646 1.039l-2.301 4.273-.065.135 2.792 5.712.17.048 4.396-10.438c.154-.422.129-.722-.064-.895-.197-.172-.346-.273-.857-.295l-.42-.016c-.061 0-.105-.014-.152-.045-.043-.029-.072-.075-.072-.119v-.436l.059-.045h4.961l.041.045v.437c0 .119-.074.18-.209.18-.648.03-1.127.18-1.443.421-.314.255-.557.616-.736 1.067 0 0-4.043 9.258-5.426 12.339-.525 1.007-1.053.917-1.503-.031-.571-1.171-1.773-3.786-2.646-5.71l.053-.036z"/></svg>',
  google: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>',
  apple: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z"/></svg>',
  x: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>',
  dw: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.143 5.182A6.854 6.854 0 0 0 12 7.493a6.855 6.855 0 0 0-5.143-2.311C3.07 5.182 0 8.234 0 12c0 3.766 3.07 6.818 6.857 6.818A6.855 6.855 0 0 0 12 16.507a6.854 6.854 0 0 0 5.143 2.311C20.929 18.818 24 15.766 24 12c0-3.766-3.07-6.818-6.857-6.818zm-6.04 10.05a5.349 5.349 0 0 1-4.246 2.086c-2.954 0-5.348-2.38-5.348-5.318 0-2.937 2.394-5.318 5.348-5.318 1.731 0 3.27.818 4.247 2.087A5.274 5.274 0 0 1 12.206 12a5.274 5.274 0 0 1-1.102 3.231zm8.88-.641h-1.608l-1.049-2.549-1.025 2.549h-1.605l-1.661-5.182h1.833l.779 2.602.972-2.602h1.434l.973 2.602.778-2.602h1.841zM7.058 9.273H4.083v5.454h2.975c1.534 0 3.107-.878 3.107-2.727 0-1.768-1.434-2.727-3.107-2.727zm-.161 3.874H5.729v-2.318h1.168c1.062 0 1.44.59 1.44 1.159.001.561-.375 1.159-1.44 1.159z"/></svg>'
}
// Permanent links: recognisable logos (Simple Icons, CC0). Grouped: reference, tech, then social. The Wikipedia edition follows the browser language.
// Reuters is the news link, shown by its name: no Reuters logo is in the open icon set.
const wikipediaIcon = '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.09 13.119c-.936 1.932-2.217 4.548-2.853 5.728-.616 1.074-1.127.931-1.532.029-1.406-3.321-4.293-9.144-5.651-12.409-.251-.601-.441-.987-.619-1.139-.181-.15-.554-.24-1.122-.271C.103 5.033 0 4.982 0 4.898v-.455l.052-.045c.924-.005 5.401 0 5.401 0l.051.045v.434c0 .119-.075.176-.225.176l-.564.031c-.485.029-.727.164-.727.436 0 .135.053.33.166.601 1.082 2.646 4.818 10.521 4.818 10.521l.136.046 2.411-4.81-.482-1.067-1.658-3.264s-.318-.654-.428-.872c-.728-1.443-.712-1.518-1.447-1.617-.207-.023-.313-.05-.313-.149v-.468l.06-.045h4.292l.113.037v.451c0 .105-.076.15-.227.15l-.308.047c-.792.061-.661.381-.136 1.422l1.582 3.252 1.758-3.504c.293-.64.233-.801.111-.947-.07-.084-.305-.22-.812-.24l-.201-.021c-.052 0-.098-.015-.145-.051-.045-.031-.067-.076-.067-.129v-.427l.061-.045c1.247-.008 4.043 0 4.043 0l.059.045v.436c0 .121-.059.178-.193.178-.646.03-.782.095-1.023.439-.12.186-.375.589-.646 1.039l-2.301 4.273-.065.135 2.792 5.712.17.048 4.396-10.438c.154-.422.129-.722-.064-.895-.197-.172-.346-.273-.857-.295l-.42-.016c-.061 0-.105-.014-.152-.045-.043-.029-.072-.075-.072-.119v-.436l.059-.045h4.961l.041.045v.437c0 .119-.074.18-.209.18-.648.03-1.127.18-1.443.421-.314.255-.557.616-.736 1.067 0 0-4.043 9.258-5.426 12.339-.525 1.007-1.053.917-1.503-.031-.571-1.171-1.773-3.786-2.646-5.71l.053-.036z"/></svg>'
const microsoftIcon = '<svg class="wide" viewBox="0 0 60 24" fill="currentColor" aria-hidden="true"><text x="30" y="17" text-anchor="middle" font-family="Segoe UI, Arial, sans-serif" font-size="12" font-weight="600">Microsoft</text></svg>'
const reutersIcon = '<svg class="wide" viewBox="0 0 60 24" fill="currentColor" aria-hidden="true"><text x="30" y="17" text-anchor="middle" font-family="Georgia, serif" font-size="13" font-weight="700">Reuters</text></svg>'
const permanentLinks = () => [
  { title: 'Wikipedia', url: `https://${wikiCode}.wikipedia.org/`, description: '', icon: wikipediaIcon },
  { title: 'Google', url: 'https://www.google.com/', description: '', icon: brandIcons.google },
  { title: 'Reuters', url: 'https://www.reuters.com/', description: '', icon: reutersIcon },
  { title: 'Apple', url: 'https://www.apple.com/', description: '', icon: brandIcons.apple },
  { title: 'Microsoft', url: 'https://www.microsoft.com/', description: '', icon: microsoftIcon },
  { title: 'GitHub', url: 'https://github.com/', description: '', icon: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>' },
  { title: 'Facebook', url: 'https://www.facebook.com/', description: '', icon: brandIcons.facebook },
  { title: 'Instagram', url: 'https://www.instagram.com/', description: '', icon: brandIcons.instagram },
  { title: 'X', url: 'https://x.com/', description: '', icon: brandIcons.x },
  { title: 'Reddit', url: 'https://www.reddit.com/', description: '', icon: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.373 0 0 5.373 0 12c0 3.314 1.343 6.314 3.515 8.485l-2.286 2.286C.775 23.225 1.097 24 1.738 24H12c6.627 0 12-5.373 12-12S18.627 0 12 0Zm4.388 3.199c1.104 0 1.999.895 1.999 1.999 0 1.105-.895 2-1.999 2-.946 0-1.739-.657-1.947-1.539v.002c-1.147.162-2.032 1.15-2.032 2.341v.007c1.776.067 3.4.567 4.686 1.363.473-.363 1.064-.58 1.707-.58 1.547 0 2.802 1.254 2.802 2.802 0 1.117-.655 2.081-1.601 2.531-.088 3.256-3.637 5.876-7.997 5.876-4.361 0-7.905-2.617-7.998-5.87-.954-.447-1.614-1.415-1.614-2.538 0-1.548 1.255-2.802 2.803-2.802.645 0 1.239.218 1.712.585 1.275-.79 2.881-1.291 4.64-1.365v-.01c0-1.663 1.263-3.034 2.88-3.207.188-.911.993-1.595 1.959-1.595Zm-8.085 8.376c-.784 0-1.459.78-1.506 1.797-.047 1.016.64 1.429 1.426 1.429.786 0 1.371-.369 1.418-1.385.047-1.017-.553-1.841-1.338-1.841Zm7.406 0c-.786 0-1.385.824-1.338 1.841.047 1.017.634 1.385 1.418 1.385.785 0 1.473-.413 1.426-1.429-.046-1.017-.721-1.797-1.506-1.797Zm-3.703 4.013c-.974 0-1.907.048-2.77.135-.147.015-.241.168-.183.305.483 1.154 1.622 1.964 2.953 1.964 1.33 0 2.47-.81 2.953-1.964.057-.137-.037-.29-.184-.305-.863-.087-1.795-.135-2.769-.135Z"/></svg>' },
]
const isPermanent = (url) => permanentLinks().some((link) => link.url === url)
const isValidLink = (link) => !!link && typeof link.title === 'string' && typeof link.url === 'string' && safeUrl(link.url) && !isPermanent(link.url)

let links = []
try {
  const saved = JSON.parse(localStorage.getItem('links') || 'null')
  if (Array.isArray(saved)) links = saved.filter(isValidLink).slice(0, LINK_LIMIT)
} catch {}
let linksOn = readFlag('linksOn', true)
let linksOwn = readFlag('linksOwn', false)
let editing = null

const saveLinks = () => writeKey('links', JSON.stringify(links))

// A link as a row in the preview or the window. Link text is set with textContent, never as HTML.
const linkAnchor = (link, withDescription) => {
  const anchor = Object.assign(document.createElement('a'), { href: link.url, target: '_blank', rel: 'noopener', className: 'link-main' })
  anchor.append(el('span', 'link-title', link.title))
  const detail = [hostOf(link.url), withDescription ? link.description : ''].filter(Boolean).join(' · ')
  if (detail) anchor.append(el('small', '', detail))
  return anchor
}

const renderLinks = () => {
  linksButton.hidden = !linksOn
  linksButton.innerHTML = linksOwn ? linksButtonIcon : wikipediaIcon
  labelLinksButton()
  linksPreview.hidden = !linksOwn
  settingsFields.linksOwn.disabled = !linksOn
  // The hover list shows only the links the visitor added; the permanent ones live in the window.
  linksPreview.replaceChildren(...links.map((link) => linkAnchor(link, false)))

  // Permanent links as a row of icons at the top of the window.
  linksIcons.replaceChildren(...permanentLinks().map((link) => {
    const icon = Object.assign(document.createElement('a'), { href: link.url, target: '_blank', rel: 'noopener', className: 'link-icon', title: link.title })
    icon.setAttribute('aria-label', link.title)
    icon.innerHTML = link.icon
    return icon
  }))

  const rows = links.map((link, index) => {
    const row = el('div', 'link-row')
    const edit = el('button', 'icon-btn', '✎')
    edit.type = 'button'
    edit.title = t.linkEditBtn
    edit.setAttribute('aria-label', t.linkEditBtn)
    edit.dataset.edit = String(index)
    const remove = el('button', 'icon-btn', '×')
    remove.type = 'button'
    remove.title = t.linkRemove
    remove.setAttribute('aria-label', t.linkRemove)
    remove.dataset.remove = String(index)
    const up = el('button', 'icon-btn', '↑')
    up.type = 'button'
    up.title = t.linkUp
    up.setAttribute('aria-label', t.linkUp)
    up.disabled = index === 0
    up.dataset.index = String(index)
    up.dataset.step = '-1'
    const down = el('button', 'icon-btn', '↓')
    down.type = 'button'
    down.title = t.linkDown
    down.setAttribute('aria-label', t.linkDown)
    down.disabled = index === links.length - 1
    down.dataset.index = String(index)
    down.dataset.step = '1'
    const actions = el('div', 'link-actions')
    actions.append(up, down, edit, remove)
    row.append(linkAnchor(link, true), actions)
    return row
  })
  linksList.replaceChildren(...(rows.length ? rows : [el('p', 'zones-empty', t.linksEmpty)]))
  const ownRows = links.map((link) => {
    const row = Object.assign(document.createElement('a'), { href: link.url, target: '_blank', rel: 'noopener', className: 'own-link' })
    row.append(link.title)
    if (link.description) row.append(el('span', 'own-desc', link.description))
    return row
  })
  linksOwnBox.replaceChildren(...(ownRows.length ? ownRows : [el('p', 'zones-empty', t.linksEmpty)]))

  const full = links.length >= LINK_LIMIT && editing === null
  linkName.disabled = full
  linkUrl.disabled = full
  linkDesc.disabled = full
  linkSave.disabled = full
  linkMsg.textContent = full ? t.linksFull : ''
}

const resetLinkForm = () => {
  editing = null
  linkForm.reset()
  linkFormTitle.textContent = t.linkAdd
  linkSave.textContent = t.linkSave
  linkCancel.hidden = true
  linkMsg.textContent = ''
  renderLinks()
}

linkForm.addEventListener('submit', (e) => {
  e.preventDefault()
  // A bare host such as example.com gets https:// in front of it.
  let url = linkUrl.value.trim()
  if (url && !/^[a-z][a-z0-9+.-]*:\/\//i.test(url)) url = `https://${url}`
  if (!safeUrl(url) || isPermanent(url)) {
    linkMsg.textContent = t.linkInvalid
    return
  }
  const link = {
    title: linkName.value.trim() || hostOf(url),
    url,
    description: linkDesc.value.trim().slice(0, 120),
  }
  if (editing !== null) links[editing] = link
  else if (links.length < LINK_LIMIT) links = [...links, link]
  saveLinks()
  resetLinkForm()
})

linkCancel.addEventListener('click', resetLinkForm)

linksList.addEventListener('click', (e) => {
  const { edit, remove, index, step } = e.target.dataset
  if (step !== undefined) {
    const next = Number(index) + Number(step)
    const moved = [...links]
    ;[moved[Number(index)], moved[next]] = [moved[next], moved[Number(index)]]
    links = moved
    saveLinks()
    if (editing !== null) resetLinkForm()
    renderLinks()
  } else if (edit !== undefined) {
    const link = links[Number(edit)]
    editing = Number(edit)
    linkName.value = link.title
    linkUrl.value = link.url
    linkDesc.value = link.description || ''
    linkFormTitle.textContent = t.linkEdit
    linkSave.textContent = t.linkSave
    linkCancel.hidden = false
    renderLinks()
    linkName.focus()
  } else if (remove !== undefined) {
    links = links.filter((_, index) => index !== Number(remove))
    saveLinks()
    if (editing !== null) resetLinkForm()
    renderLinks()
  }
})

const openLinks = () => {
  linksWindow.hidden = false
  linksWindow.querySelector('.settings-panel').focus()
}
const closeLinks = () => { linksWindow.hidden = true; linksButton.focus() }
document.getElementById('links-window-close').addEventListener('click', closeLinks)
linksWindow.addEventListener('click', (e) => { if (e.target === linksWindow) closeLinks() })
document.getElementById('links-manage').addEventListener('click', () => {
  linksWindow.hidden = true
  openManage('links')
})
linksButton.addEventListener('click', () => {
  if (!linksOwn) return window.open(permanentLinks()[0].url, '_blank', 'noopener')
  openLinks()
})

// The links button can be switched off in settings; the window closes with it.
settingsFields.links.addEventListener('change', () => {
  linksOn = settingsFields.links.checked
  writeKey('linksOn', linksOn ? 'on' : 'off')
  if (!linksOn && manageTab === 'links' && !manageWindow.hidden) closeManage()
  if (!linksOn && !linksWindow.hidden) closeLinks()
  renderLinks()
})
settingsFields.linksOwn.addEventListener('change', () => {
  linksOwn = settingsFields.linksOwn.checked
  writeKey('linksOwn', linksOwn ? 'on' : 'off')
  renderLinks()
})
renderLinks()

// AI shortcuts below the search bar. Five at most; the visitor can change, reorder or remove them.
const ASK_AI_LIMIT = 5
const askAiIcons = {
  "claude": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"currentColor\" fill-rule=\"evenodd\" aria-hidden=\"true\"><path d=\"M4.709 15.955l4.72-2.647.08-.23-.08-.128H9.2l-.79-.048-2.698-.073-2.339-.097-2.266-.122-.571-.121L0 11.784l.055-.352.48-.321.686.06 1.52.103 2.278.158 1.652.097 2.449.255h.389l.055-.157-.134-.098-.103-.097-2.358-1.596-2.552-1.688-1.336-.972-.724-.491-.364-.462-.158-1.008.656-.722.881.06.225.061.893.686 1.908 1.476 2.491 1.833.365.304.145-.103.019-.073-.164-.274-1.355-2.446-1.446-2.49-.644-1.032-.17-.619a2.97 2.97 0 01-.104-.729L6.283.134 6.696 0l.996.134.42.364.62 1.414 1.002 2.229 1.555 3.03.456.898.243.832.091.255h.158V9.01l.128-1.706.237-2.095.23-2.695.08-.76.376-.91.747-.492.584.28.48.685-.067.444-.286 1.851-.559 2.903-.364 1.942h.212l.243-.242.985-1.306 1.652-2.064.73-.82.85-.904.547-.431h1.033l.76 1.129-.34 1.166-1.064 1.347-.881 1.142-1.264 1.7-.79 1.36.073.11.188-.02 2.856-.606 1.543-.28 1.841-.315.833.388.091.395-.328.807-1.969.486-2.309.462-3.439.813-.042.03.049.061 1.549.146.662.036h1.622l3.02.225.79.522.474.638-.079.485-1.215.62-1.64-.389-3.829-.91-1.312-.329h-.182v.11l1.093 1.068 2.006 1.81 2.509 2.33.127.578-.322.455-.34-.049-2.205-1.657-.851-.747-1.926-1.62h-.128v.17l.444.649 2.345 3.521.122 1.08-.17.353-.608.213-.668-.122-1.374-1.925-1.415-2.167-1.143-1.943-.14.08-.674 7.254-.316.37-.729.28-.607-.461-.322-.747.322-1.476.389-1.924.315-1.53.286-1.9.17-.632-.012-.042-.14.018-1.434 1.967-2.18 2.945-1.726 1.845-.414.164-.717-.37.067-.662.401-.589 2.388-3.036 1.44-1.882.93-1.086-.006-.158h-.055L4.132 18.56l-1.13.146-.487-.456.061-.746.231-.243 1.908-1.312-.006.006z\"></svg>",
  "chatgpt": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"currentColor\" fill-rule=\"evenodd\" aria-hidden=\"true\"><path d=\"M9.205 8.658v-2.26c0-.19.072-.333.238-.428l4.543-2.616c.619-.357 1.356-.523 2.117-.523 2.854 0 4.662 2.212 4.662 4.566 0 .167 0 .357-.024.547l-4.71-2.759a.797.797 0 00-.856 0l-5.97 3.473zm10.609 8.8V12.06c0-.333-.143-.57-.429-.737l-5.97-3.473 1.95-1.118a.433.433 0 01.476 0l4.543 2.617c1.309.76 2.189 2.378 2.189 3.948 0 1.808-1.07 3.473-2.76 4.163zM7.802 12.703l-1.95-1.142c-.167-.095-.239-.238-.239-.428V5.899c0-2.545 1.95-4.472 4.591-4.472 1 0 1.927.333 2.712.928L8.23 5.067c-.285.166-.428.404-.428.737v6.898zM12 15.128l-2.795-1.57v-3.33L12 8.658l2.795 1.57v3.33L12 15.128zm1.796 7.23c-1 0-1.927-.332-2.712-.927l4.686-2.712c.285-.166.428-.404.428-.737v-6.898l1.974 1.142c.167.095.238.238.238.428v5.233c0 2.545-1.974 4.472-4.614 4.472zm-5.637-5.303l-4.544-2.617c-1.308-.761-2.188-2.378-2.188-3.948A4.482 4.482 0 014.21 6.327v5.423c0 .333.143.571.428.738l5.947 3.449-1.95 1.118a.432.432 0 01-.476 0zm-.262 3.9c-2.688 0-4.662-2.021-4.662-4.519 0-.19.024-.38.047-.57l4.686 2.71c.286.167.571.167.856 0l5.97-3.448v2.26c0 .19-.07.333-.237.428l-4.543 2.616c-.619.357-1.356.523-2.117.523zm5.899 2.83a5.947 5.947 0 005.827-4.756C22.287 18.339 24 15.84 24 13.296c0-1.665-.713-3.282-1.998-4.448.119-.5.19-.999.19-1.498 0-3.401-2.759-5.947-5.946-5.947-.642 0-1.26.095-1.88.31A5.962 5.962 0 0010.205 0a5.947 5.947 0 00-5.827 4.757C1.713 5.447 0 7.945 0 10.49c0 1.666.713 3.283 1.998 4.448-.119.5-.19 1-.19 1.499 0 3.401 2.759 5.946 5.946 5.946.642 0 1.26-.095 1.88-.309a5.96 5.96 0 004.162 1.713z\"></svg>",
  "grok": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"currentColor\" fill-rule=\"evenodd\" aria-hidden=\"true\"><path d=\"M9.27 15.29l7.978-5.897c.391-.29.95-.177 1.137.272.98 2.369.542 5.215-1.41 7.169-1.951 1.954-4.667 2.382-7.149 1.406l-2.711 1.257c3.889 2.661 8.611 2.003 11.562-.953 2.341-2.344 3.066-5.539 2.388-8.42l.006.007c-.983-4.232.242-5.924 2.75-9.383.06-.082.12-.164.179-.248l-3.301 3.305v-.01L9.267 15.292M7.623 16.723c-2.792-2.67-2.31-6.801.071-9.184 1.761-1.763 4.647-2.483 7.166-1.425l2.705-1.25a7.808 7.808 0 00-1.829-1A8.975 8.975 0 005.984 5.83c-2.533 2.536-3.33 6.436-1.962 9.764 1.022 2.487-.653 4.246-2.34 6.022-.599.63-1.199 1.259-1.682 1.925l7.62-6.815\"></svg>",
  "duck": "<svg width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"currentColor\" aria-hidden=\"true\"><path d=\"M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 .984C18.083.984 23.016 5.916 23.016 12S18.084 23.016 12 23.016.984 18.084.984 12C.984 5.917 5.916.984 12 .984zm0 .938C6.434 1.922 1.922 6.434 1.922 12c0 4.437 2.867 8.205 6.85 9.55-.237-.82-.776-2.753-1.6-6.052-1.184-4.741-2.064-8.606 2.379-9.813.047-.011.064-.064.03-.093-.514-.467-1.382-.548-2.233-.38a.06.06 0 0 1-.07-.058c0-.011 0-.023.011-.035.205-.286.572-.507.822-.64a1.843 1.843 0 0 0-.607-.335c-.059-.022-.059-.12-.006-.144.006-.006.012-.012.024-.012 1.749-.233 3.586.292 4.49 1.448.011.011.023.017.035.023 2.968.635 3.509 4.837 3.328 5.998a9.607 9.607 0 0 0 2.346-.576c.746-.286 1.008-.222 1.101-.053.1.193-.018.513-.28.81-.496.567-1.393 1.01-2.974 1.137-.546.044-1.029.024-1.445.006-.789-.035-1.339-.059-1.633.39-.192.298-.041.998 1.487 1.22 1.09.157 2.078.047 2.798-.034.643-.07 1.073-.118 1.172.069.21.402-.996 1.207-3.066 1.224-.158 0-.315-.006-.467-.011-1.283-.065-2.227-.414-2.816-.735a.094.094 0 0 1-.035-.017c-.105-.059-.31.045-.188.267.07.134.444.478 1.004.776-.058.466.087 1.184.338 2l.088-.016c.041-.009.087-.019.134-.025.507-.082.775.012.926.175.717-.536 1.913-1.294 2.03-1.154.583.694.66 2.332.53 2.99-.004.012-.017.024-.04.035-.274.117-1.783-.296-1.783-.511-.059-1.075-.26-1.173-.493-1.225h-.156c.006.006.012.018.018.03l.052.12c.093.257.24 1.063.13 1.26-.112.199-.835.297-1.284.303-.443.006-.543-.158-.637-.408-.07-.204-.103-.675-.103-.95a.857.857 0 0 1 .012-.216c-.134.058-.333.193-.397.281-.017.262-.017.682.123 1.149.07.221-1.518 1.164-1.74.99-.227-.181-.634-1.952-.459-2.67-.187.017-.338.075-.42.191-.367.508.093 2.933.582 3.248.257.169 1.54-.553 2.176-1.095.105.145.305.158.553.158.326-.012.782-.06 1.103-.158.192.45.423.972.613 1.388 4.47-1.032 7.803-5.037 7.803-9.82 0-5.566-4.512-10.078-10.078-10.078zm1.791 5.646c-.42 0-.678.146-.795.332-.023.047.047.094.094.07.14-.075.357-.161.701-.156.328.006.516.09.67.159l.023.01c.041.017.088-.03.059-.065-.134-.18-.332-.35-.752-.35zm-5.078.198a1.24 1.24 0 0 0-.522.082c-.454.169-.67.526-.67.76 0 .051.112.057.141.011.081-.123.21-.31.617-.478.408-.17.73-.146.951-.094.047.012.083-.041.041-.07a.989.989 0 0 0-.558-.211zm5.434 1.423a.651.651 0 0 0-.655.647.652.652 0 0 0 1.307 0 .646.646 0 0 0-.652-.647zm.283.262h.008a.17.17 0 0 1 .17.17c0 .093-.077.17-.17.17a.17.17 0 0 1-.17-.17c0-.09.072-.165.162-.17zm-5.358.076a.752.752 0 0 0-.758.758c0 .42.338.758.758.758s.758-.337.758-.758a.756.756 0 0 0-.758-.758zm.328.303h.01c.112 0 .2.089.2.2 0 .11-.088.197-.2.197a.195.195 0 0 1-.197-.198c0-.107.082-.194.187-.199z\"/></svg>"
}
const defaultAskAi = [
  { key: 'claude', title: 'Claude', url: 'https://claude.ai/' },
  { key: 'chatgpt', title: 'ChatGPT', url: 'https://chatgpt.com/' },
  { key: 'grok', title: 'Grok', url: 'https://grok.com/' },
  { key: 'duck', title: 'Duck.ai', url: 'https://duck.ai/' },
]
let askAiList = defaultAskAi.map((item) => ({ ...item }))
try {
  const saved = JSON.parse(localStorage.getItem('askAiList') || 'null')
  if (Array.isArray(saved)) askAiList = saved.filter((item) => item && typeof item.title === 'string' && safeUrl(item.url)).slice(0, ASK_AI_LIMIT)
} catch {}
const askAiRow = document.getElementById('ask-ai-list')
const aiList = document.getElementById('ai-list')
const aiForm = document.getElementById('ai-form')
const aiName = document.getElementById('ai-name')
const aiUrl = document.getElementById('ai-url')
const aiMsg = document.getElementById('ai-msg')

const saveAskAi = () => {
  writeKey('askAiList', JSON.stringify(askAiList))
  renderAskAi()
}

const aiButton = (label, glyph, onClick, disabled = false) => {
  const button = Object.assign(document.createElement('button'), { type: 'button', textContent: glyph, disabled })
  button.setAttribute('aria-label', label)
  button.title = label
  button.addEventListener('click', onClick)
  return button
}

const renderAskAi = () => {
  askAi.hidden = !askaiOn
  askAiRow.hidden = askAiList.length === 0
  askAiRow.replaceChildren(...askAiList.map((item) => {
    const link = Object.assign(document.createElement('a'), { href: item.url })
    link.title = item.title
    link.setAttribute('aria-label', item.title)
    if (askAiIcons[item.key]) link.innerHTML = askAiIcons[item.key]
    else link.textContent = item.title
    const li = document.createElement('li')
    li.append(link)
    return li
  }))
  aiList.replaceChildren(...askAiList.map((item, index) => {
    const row = document.createElement('li')
    row.append(el('span', '', item.title))
    const move = (step) => () => {
      const next = [...askAiList]
      ;[next[index], next[index + step]] = [next[index + step], next[index]]
      askAiList = next
      saveAskAi()
    }
    row.append(
      aiButton(t.aiUp, '↑', move(-1), index === 0),
      aiButton(t.aiDown, '↓', move(1), index === askAiList.length - 1),
      aiButton(t.aiEdit, '✎', () => startAiEdit(index)),
      aiButton(t.aiRemove, '×', () => { askAiList = askAiList.filter((_, i) => i !== index); if (aiEditing === index) resetAiForm(); saveAskAi() }),
    )
    return row
  }))
}

let aiEditing = null
const resetAiForm = () => {
  aiEditing = null
  aiForm.reset()
  document.getElementById('ai-form-title').textContent = t.aiAddTitle
  document.getElementById('ai-cancel').hidden = true
  aiMsg.textContent = ''
}
const startAiEdit = (index) => {
  const item = askAiList[index]
  aiEditing = index
  aiName.value = item.title
  aiUrl.value = item.url
  document.getElementById('ai-form-title').textContent = t.aiEditTitle
  document.getElementById('ai-cancel').hidden = false
  aiMsg.textContent = ''
  renderAskAi()
  aiName.focus()
}
document.getElementById('ai-cancel').addEventListener('click', resetAiForm)
aiForm.addEventListener('submit', (e) => {
  e.preventDefault()
  // A bare host such as example.com gets https:// in front of it.
  let url = aiUrl.value.trim()
  if (url && !/^[a-z][a-z0-9+.-]*:\/\//i.test(url)) url = `https://${url}`
  if (!safeUrl(url)) { aiMsg.textContent = t.aiInvalid; return }
  const title = aiName.value.trim() || hostOf(url)
  if (aiEditing !== null) {
    askAiList = askAiList.map((item, i) => (i === aiEditing ? { ...item, title, url } : item))
  } else {
    if (askAiList.length >= ASK_AI_LIMIT) { aiMsg.textContent = t.aiMax; return }
    askAiList = [...askAiList, { key: '', title, url }]
  }
  resetAiForm()
  saveAskAi()
})


renderAskAi()
root.toggleAttribute('data-quote-off', !quoteOn)
applySettingsText()
updateWeatherHint()
renderIp()
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
  wallpaperToggle.title = on ? t.wallHide : t.wallShow
  wallpaperToggle.setAttribute('aria-label', wallpaperToggle.title)
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

// The wallpaper button itself can be hidden in settings; the wallpaper keeps its last state.
let wallpaperButtonOn = true
try {
  const saved = localStorage.getItem('wallpaperButton')
  if (saved) wallpaperButtonOn = saved === 'on'
} catch {}
wallpaperToggle.hidden = !wallpaperButtonOn

// Background tint: a hue from the slider; zero keeps the neutral monochrome look.
const hueSlider = document.getElementById('hue')

// The tint can be switched off in settings: the background is then neutral, and the slider is hidden.
let tintOn = readFlag('tint', true)
// The slider's middle (180) is the neutral background; the ends are the colours. Storage keeps the colour
// hue, so the middle is hue 0 and the slider value is the hue turned by 180 degrees.
const hueOf = (slider) => (Number(slider) + 180) % 360
const sliderOf = (hue) => (Number(hue) + 180) % 360
const applyHue = (value) => {
  const slider = Number(value)
  const hue = hueOf(slider)
  const neutral = slider === 180
  hueSlider.value = slider
  hueSlider.hidden = !tintOn
  tintCycle.hidden = !tintOn
  tintCycle.style.setProperty('--dot', !neutral && tintOn ? `hsl(${hue} 40% 55%)` : 'var(--color-fg-2)')
  if (!neutral && tintOn) {
    root.dataset.tint = ''
    root.style.setProperty('--hue', hue)
  } else {
    delete root.dataset.tint
    root.style.removeProperty('--hue')
  }
}

try { applyHue(sliderOf(localStorage.getItem('hue') || 0)) } catch { applyHue(180) }
tintCycle.addEventListener('click', () => {
  const index = Math.max(TINT_STEPS.indexOf(hueOf(hueSlider.value)), 0)
  const next = TINT_STEPS[(index + 1) % TINT_STEPS.length]
  applyHue(sliderOf(next))
  try { localStorage.setItem('hue', String(next)) } catch {}
})

// Settings: the tint on or off. The chosen hue is kept for when it is switched back on.
settingsFields.tint.addEventListener('change', () => {
  tintOn = settingsFields.tint.checked
  writeKey('tint', tintOn ? 'on' : 'off')
  applyHue(hueSlider.value)
})

hueSlider.addEventListener('input', () => {
  applyHue(hueSlider.value)
  try { localStorage.setItem('hue', String(hueOf(hueSlider.value))) } catch {}
})
