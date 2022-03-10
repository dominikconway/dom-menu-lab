var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

let mainEl = document.querySelector('main')

backgroundColor: 'mainEl(--main-bg)'

mainEl.textContent = '<h1>SEI Rocks!</h1>'

mainEl.classList.add('flex-ctr')

console.log(mainEl)

let topMenuEl = document.getElementById('top-menu')

topMenuEl.style.height = 100

backgroundColor: 'topMenuEl(--top-menu-bg)'

topMenuEl.classList.add('flex-around')

// Task 3.1
// Iterate over the entire menuLinksarray and for each "link" object:

// Create an <a>element.

// On the new element, add an hrefattribute with its value set to the hrefproperty of the "link" object.

// Set the new element's content to the value of the textproperty of the "link" object.

// Append the new element to the topMenuElelement.


// for(let link of menuLinks){
//     document.createElement('a')
//     link.setAttribute('href', '/about')
// }