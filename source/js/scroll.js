(function scrollModule() {
/**
 * determine whether the user are scroll down or not
 * @param {int}
 * @return {boolean}
 */
function isScrollDown(currentTop) {
  let result = currentTop > initTop;
  initTop = currentTop;
  return result
}

/**
 * determine whether the user are scroll over the header-nav
 * @param {int}
 * @return {boolean}
 */
function isOverHeaderNav(currentTop) {
  let height = HEADER_NAV.clientHeight
  return currentTop > height
}
/**
 * main
 */
let initTop = 0;
const HEADER_NAV = document.getElementById('header-nav');
const HEADER_INNER = document.getElementById('header-inner');
let navHeight = HEADER_NAV.clientHeight;
window.onscroll = function() {\
  let currentTop = document.documentElement.scrollTop ||document.body.scrollTop;
  ('header-nav');
  if (isScrollDown(currentTop) && isOverHeaderNav(currentTop)) {
    HEADER_INNER.style.paddingTop = navHeight + 'px';
    HEADER_NAV.classList.add('fixed');
    HEADER_NAV.classList.remove('visible');
  }
  else if (!isScrollDown(currentTop) && HEADER_NAV.classList.contains('fixed')) {
    HEADER_NAV.classList.add('visible');
    if(currentTop == 0) {
      HEADER_NAV.classList.remove('fixed');
      HEADER_INNER.style.paddingTop = 0 + 'px';
    }
  }
}
})();


