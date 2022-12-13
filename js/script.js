// Task 3.0
let menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];
  
  // Task 1.0
  let mainEl = document.querySelector('main');
  
  // Task 1.1
  mainEl.style.backgroundColor = 'var(--main-bg)';
  
  // Task 1.2
  mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
  
  // Task 1.3
  mainEl.classList.add('flex-ctr');
  
  // Task 2.0
let topMenuEl = document.getElementById('top-menu');
  
  // Task 2.1
  topMenuEl.style.height = '100%'
  
  // Task 2.2
  topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
  
  // Task 2.3
  topMenuEl.classList.add('flex-around');
  
// Task 3.1
  menuLinks.forEach(function(link) {
    var linkEl = document.createElement('a');
    linkEl.setAttribute('href', link.href);
    linkEl.textContent = link.text;
    topMenuEl.appendChild(linkEl);
  });
  