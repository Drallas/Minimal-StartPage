const root = document.documentElement
const searchForm = document.getElementById('searchform')
const searchBox = document.getElementById('search')
const engineButton = document.getElementById('engine')
const clockTime = document.getElementById('time')
const clockDate = document.getElementById('date')
const modeButtons = document.querySelectorAll('[data-theme-value]')

const quotes = {
  en: [
    { text: "Learning without thought is labour lost; thought without learning is perilous.", by: "Confucius, Analects 2.15" },
    { text: "What you do not wish for yourself, do not impose on others.", by: "Confucius, Analects 15.24" },
    { text: "Hatred is never ended by hatred. It is ended by love.", by: "Buddha, Dhammapada 5" },
    { text: "We are what we think. All that we are arises with our thoughts.", by: "Buddha, Dhammapada 1" },
    { text: "It is not things that disturb us, but our judgements about things.", by: "Epictetus, Enchiridion 5" },
    { text: "You cannot step twice into the same river.", by: "Heraclitus" },
    { text: "The unexamined life is not worth living.", by: "Socrates, Plato's Apology" },
    { text: "The journey of a thousand miles begins with a single step.", by: "Laozi, Tao Te Ching 64" },
    { text: "Those who know do not speak. Those who speak do not know.", by: "Laozi, Tao Te Ching 56" },
    { text: "Know thyself.", by: "Inscription at Delphi" },
  ],
  nl: [
    { text: "Leren zonder nadenken levert niets op; nadenken zonder leren is gevaarlijk.", by: "Confucius, Analecten 2.15" },
    { text: "Wat je zelf niet wilt, doe dat ook een ander niet.", by: "Confucius, Analecten 15.24" },
    { text: "Haat stopt nooit door haat; haat stopt door liefde.", by: "Boeddha, Dhammapada 5" },
    { text: "Wat we denken, dat worden we. Alles wat we zijn, komt voort uit onze gedachten.", by: "Boeddha, Dhammapada 1" },
    { text: "Niet de dingen zelf verontrusten ons, maar onze opvattingen over de dingen.", by: "Epictetus, Handboekje 5" },
    { text: "Je kunt niet twee keer in dezelfde rivier stappen.", by: "Heraclitus" },
    { text: "Een leven zonder onderzoek is het leven niet waard.", by: "Socrates, Plato's Apologie" },
    { text: "Een reis van duizend mijl begint met één stap.", by: "Laozi, Tao Te King 64" },
    { text: "Wie weet, spreekt niet; wie spreekt, weet niet.", by: "Laozi, Tao Te King 56" },
    { text: "Ken uzelf.", by: "Inscriptie in Delphi" },
  ],
  de: [
    { text: "Lernen ohne Nachdenken bleibt vergeblich; Nachdenken ohne Lernen ist gefährlich.", by: "Konfuzius, Gespräche 2.15" },
    { text: "Was du nicht willst, dass man dir tut, das füg auch keinem anderen zu.", by: "Konfuzius, Gespräche 15.24" },
    { text: "Hass endet nie durch Hass. Hass endet durch Liebe.", by: "Buddha, Dhammapada 5" },
    { text: "Was wir denken, das werden wir. Alles, was wir sind, entspringt unseren Gedanken.", by: "Buddha, Dhammapada 1" },
    { text: "Nicht die Dinge selbst beunruhigen uns, sondern unsere Meinungen über die Dinge.", by: "Epiktet, Handbüchlein 5" },
    { text: "Man kann nicht zweimal in denselben Fluss steigen.", by: "Heraklit" },
    { text: "Ein ungeprüftes Leben ist nicht lebenswert.", by: "Sokrates, Platons Apologie" },
    { text: "Die Reise von tausend Meilen beginnt mit einem einzigen Schritt.", by: "Laozi, Daodejing 64" },
    { text: "Wer weiß, spricht nicht; wer spricht, weiß nicht.", by: "Laozi, Daodejing 56" },
    { text: "Erkenne dich selbst.", by: "Inschrift von Delphi" },
  ],
  fr: [
    { text: "Apprendre sans réfléchir est vain ; réfléchir sans apprendre est dangereux.", by: "Confucius, Entretiens 2.15" },
    { text: "Ne fais pas à autrui ce que tu ne voudrais pas qu'on te fasse.", by: "Confucius, Entretiens 15.24" },
    { text: "La haine ne s'apaise jamais par la haine ; elle s'apaise par l'amour.", by: "Bouddha, Dhammapada 5" },
    { text: "Nous sommes ce que nous pensons. Tout ce que nous sommes naît de nos pensées.", by: "Bouddha, Dhammapada 1" },
    { text: "Ce ne sont pas les choses qui nous troublent, mais les jugements que nous portons sur elles.", by: "Épictète, Manuel 5" },
    { text: "On ne se baigne pas deux fois dans le même fleuve.", by: "Héraclite" },
    { text: "Une vie sans examen ne vaut pas la peine d'être vécue.", by: "Socrate, Apologie de Platon" },
    { text: "Le voyage de mille lieues commence par un seul pas.", by: "Lao-tseu, Tao Te King 64" },
    { text: "Celui qui sait ne parle pas ; celui qui parle ne sait pas.", by: "Lao-tseu, Tao Te King 56" },
    { text: "Connais-toi toi-même.", by: "Inscription de Delphes" },
  ],
  es: [
    { text: "Aprender sin reflexionar es inútil; reflexionar sin aprender es peligroso.", by: "Confucio, Analectas 2.15" },
    { text: "Lo que no quieras para ti, no lo hagas a los demás.", by: "Confucio, Analectas 15.24" },
    { text: "El odio nunca se extingue con odio; se extingue con amor.", by: "Buda, Dhammapada 5" },
    { text: "Somos lo que pensamos. Todo lo que somos surge de nuestros pensamientos.", by: "Buda, Dhammapada 1" },
    { text: "No son las cosas las que nos perturban, sino las opiniones que tenemos sobre ellas.", by: "Epicteto, Enquiridión 5" },
    { text: "No puedes bañarte dos veces en el mismo río.", by: "Heráclito" },
    { text: "Una vida sin examen no merece la pena ser vivida.", by: "Sócrates, Apología de Platón" },
    { text: "El viaje de mil millas comienza con un solo paso.", by: "Laozi, Tao Te King 64" },
    { text: "El que sabe no habla; el que habla no sabe.", by: "Laozi, Tao Te King 56" },
    { text: "Conócete a ti mismo.", by: "Inscripción de Delfos" },
  ],
  zh: [
    { text: "学而不思则罔，思而不学则殆。", by: "孔子《论语》2.15" },
    { text: "己所不欲，勿施于人。", by: "孔子《论语》15.24" },
    { text: "恨不以恨止，唯以爱止。", by: "佛陀《法句经》5" },
    { text: "心为法本，心尊心使。", by: "佛陀《法句经》1" },
    { text: "使人烦恼的不是事物本身，而是人对事物的看法。", by: "爱比克泰德《手册》5" },
    { text: "人不能两次踏入同一条河流。", by: "赫拉克利特" },
    { text: "未经审视的人生不值得过。", by: "苏格拉底，柏拉图《申辩篇》" },
    { text: "千里之行，始于足下。", by: "老子《道德经》64" },
    { text: "知者不言，言者不知。", by: "老子《道德经》56" },
    { text: "认识你自己。", by: "德尔斐神庙铭文" },
  ],
}

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

const updateClock = () => {
  const now = new Date()
  const time = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
  const date = now.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })
  clockTime.textContent = time
  clockTime.dateTime = now.toISOString()
  clockDate.textContent = date
}
updateClock()
setInterval(updateClock, 30000)

// A new quote every six hours, so the same one stays put for that window.
const quoteText = document.getElementById('quote-text')
const quoteBy = document.getElementById('quote-by')
const quoteLang = (navigator.language || 'en').slice(0, 2).toLowerCase()
const quoteList = quotes[quoteLang] || quotes.en
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
