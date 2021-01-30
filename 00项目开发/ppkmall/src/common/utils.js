export function debounce(func, delay) {
    let timer = null
    // 防抖函数
    return function (...args) {
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => {
        func.apply(this, args)
      }, delay)
    }
  }
  