const root = document.documentElement
const searchForm = document.getElementById('searchform')
const searchBox = document.getElementById('search')
const engineButton = document.getElementById('engine')
const clock = document.getElementById('clock')
const modeButtons = document.querySelectorAll('[data-theme-value]')

const engines = [
  { name: 'Brave', url: 'https://search.brave.com/search?q=', icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3z"/></svg>` },
  { name: 'Google', url: 'https://www.google.com/search?q=', icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M18.5 9.2A7.5 7.5 0 1 0 19.5 12.5H12"/></svg>` },
  { name: 'DuckDuckGo', url: 'https://duckduckgo.com/?q=', icon: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 5h5a7 7 0 0 1 0 14H7z"/></svg>` }
]

let engine = 0
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

const updateClock = () => {
  const now = new Date()
  const time = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
  const date = now.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })
  clock.textContent = `${date} · ${time}`
  clock.dateTime = now.toISOString()
}
updateClock()
setInterval(updateClock, 30000)

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
