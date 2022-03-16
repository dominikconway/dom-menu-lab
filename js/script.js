var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
]

let mainEl = document.querySelector('main')

let mainBg = 'var(--main-bg)'

mainEl.style.backgroundColor = mainBg

mainEl.innerHTML = '<h1>SEI Rocks!</h1>'

mainEl.classList.add('flex-ctr')

let topMenuEl = document.getElementById('top-menu')

topMenuEl.style.height = '100%'

let topMenuBg = 'var(--top-menu-bg)'

topMenuEl.style.backgroundColor = topMenuBg

topMenuEl.classList.add('flex-around')

for(let link of menuLinks){
    let a = document.createElement('a')
    a.setAttribute('href', link.href)
    a.innerText = `${link.text}`

    topMenuEl.append(a)
}
//part 2
let subMainEl = document.getElementById('sub-menu')

subMainEl.style.height = '100%'

let subMenuBg = 'var(--sub-menu-bg)'

subMainEl.style.backgroundColor = subMenuBg
console.log('hello')
subMainEl.classList.add('flex-around')

subMainEl.style.position = 'absolute'

subMainEl.style.top = '0'

let topMenuLinks = document.querySelectorAll('a')

let showingSubMenu = false

topMenuEl.addEventListener('click', function (event) {
  event.preventDefault()
  event.stopPropagation()
  if(event.target.tagName !== 'A' ) {
    return}
  console.log(event.target.textContent)
  
})

