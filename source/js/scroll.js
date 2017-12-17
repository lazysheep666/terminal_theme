(function scrollModule () {
  /**
  * determine whether the user are scroll down or not
  * @param {int}
  * @return {boolean}
  */
  function isScrollDown (currentTop) {
    let result = currentTop > initTop
    initTop = currentTop
    return result
  }

  /**
  * determine whether the user are scroll over the header-nav
  * @param {int}
  * @return {boolean}
  */
  function isOverHeaderNav (currentTop) {
    let height = NAV.clientHeight
    return currentTop > height
  }

  /**
  * main
  */
  let initTop = 0
  const NAV = document.getElementById('nav-bar')
  window.onscroll = function () {
    let currentTop = document.documentElement.scrollTop || document.body.scrollTop
    if (isScrollDown(currentTop) && isOverHeaderNav(currentTop)) {
      NAV.classList.add('fixed')
      NAV.classList.remove('visible')
    } else if (!isScrollDown(currentTop) && NAV.classList.contains('fixed')) {
      NAV.classList.add('visible')
      if (currentTop === 0) {
        NAV.classList.remove('fixed')
      }
    }
  }
})()
