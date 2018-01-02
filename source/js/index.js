/**
 * mian
 */

/**
 * click
 */
const HTML = document.documentElement
HTML.addEventListener('click', (e) => {
  const TOGGLE_NAV = document.getElementById('toggle-nav')
  if (e.target === TOGGLE_NAV) {
    __SheepNav__.toggleNav()
  } else if (!e.target.classList.contains('site-page')) {
    __SheepNav__.hideNav()
  }
},
false)

/**
 * scroll
 */
const NAV = document.getElementById('nav-bar')
window.onscroll = function () {
  let currentTop = HTML.scrollTop || document.body.scrollTop
  if (__SheepScroll__.isScrollDown(currentTop) && __SheepScroll__.isOverHeaderNav(currentTop)) {
    NAV.classList.add('fixed')
    NAV.classList.remove('visible')
  } else if (!__SheepScroll__.isScrollDown(currentTop) && NAV.classList.contains('fixed')) {
    NAV.classList.add('visible')
    if (currentTop === 0) {
      NAV.classList.remove('fixed')
    }
  }
}
