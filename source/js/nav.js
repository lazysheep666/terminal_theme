const __SheepNav__ = (function NavModule () {
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

  return {
    hideNav,
    toggleNav
  }
})()
