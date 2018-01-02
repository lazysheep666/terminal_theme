const __SheepScroll__ = (function scrollModule () {
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
    const NAV = document.getElementById('nav-bar')
    let height = NAV.clientHeight
    return currentTop > height
  }

  let initTop = 0

  return {
    isScrollDown,
    isOverHeaderNav
  }
})()
