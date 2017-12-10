(function toggleNavModule () {
  /**
  * toggle the nav
  * when in the mobile terminal
  */
  function toggleNav () {
    const NAVS = document.getElementById('navs')
    if (NAVS.classList.contains('in')) {
      NAVS.classList.remove('in')
    } else {
      NAVS.classList.add('in')
    }
  }

  /**
  * hide the nav if click any part of the site
  */
  function hideNav () {
    const NAVS = document.getElementById('navs')
    NAVS.classList.remove('in')
  }

  /**
  * main
  */
  const HTML = document.documentElement
  HTML.addEventListener('click', (e) => {
    const TOGGLE_NAV = document.getElementById('toggle-nav')
    if (e.target === TOGGLE_NAV) {
      toggleNav()
    } else if (!e.target.classList.contains('site-page')) {
      hideNav()
    }
  },
  false)
})()
