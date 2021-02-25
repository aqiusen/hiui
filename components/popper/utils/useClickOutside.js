import { useEffect, useCallback, useRef } from 'react'
let eventName = 'click'
const setEventName = (name = 'click') => {
  eventName = name
}
const useClickOutside = (onClickOutside, dom, attachEle) => {
  const element = useRef('')
  const handleOutside = useCallback(
    (e) => {
      const targetElement = typeof dom === 'function' ? dom() : dom
      const el = targetElement || element.current
      if (el) {
        if (attachEle) {
          !(attachEle.contains(e.target) || el.contains(e.target)) && onClickOutside(e)
        } else {
          !el.contains(e.target) && onClickOutside(e)
        }
      }
    },
    [onClickOutside, dom, element]
  )
  useEffect(() => {
    // 使用事件捕获
    document.addEventListener(eventName, handleOutside, true)
    return () => {
      document.removeEventListener(eventName, handleOutside, true)
    }
  }, [eventName, onClickOutside, element])
  return element
}
useClickOutside.setEventName = setEventName
export default useClickOutside
