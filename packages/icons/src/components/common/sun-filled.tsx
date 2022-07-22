
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _prefix = getPrefixCls('icon-sun-filled')

export const SunFilled = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, className, children, size, style: styleProp, ...rest }, ref) => {
    const cls = cx(prefixCls, className)
    const style = { fontSize: size, ...styleProp }

    return (
      <svg className={cls} ref={ref} role="icon" style={style} {...rest}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M512 832a42.666667 42.666667 0 0 1 42.666667 42.666667v42.666666a42.666667 42.666667 0 1 1-85.333334 0v-42.666666a42.666667 42.666667 0 0 1 42.666667-42.666667z m-226.282667-93.717333a42.666667 42.666667 0 0 1 0 60.330666l-30.165333 30.165334a42.666667 42.666667 0 1 1-60.330667-60.330667l30.165334-30.165333a42.666667 42.666667 0 0 1 60.330666 0z m512.896 0l30.165334 30.165333a42.666667 42.666667 0 1 1-60.330667 60.330667l-30.165333-30.165334a42.666667 42.666667 0 1 1 60.330666-60.330666zM512 234.666667c153.173333 0 277.333333 124.16 277.333333 277.333333s-124.16 277.333333-277.333333 277.333333-277.333333-124.16-277.333333-277.333333 124.16-277.333333 277.333333-277.333333zM149.333333 469.333333a42.666667 42.666667 0 1 1 0 85.333334H106.666667a42.666667 42.666667 0 1 1 0-85.333334h42.666666z m768 0a42.666667 42.666667 0 1 1 0 85.333334h-42.666666a42.666667 42.666667 0 1 1 0-85.333334h42.666666zM255.573333 195.2l30.144 30.186667a42.666667 42.666667 0 1 1-60.330666 60.330666L195.221333 255.573333a42.666667 42.666667 0 1 1 60.330667-60.330666z m573.226667 0a42.666667 42.666667 0 0 1 0 60.373333l-30.186667 30.144a42.666667 42.666667 0 1 1-60.330666-60.330666l30.165333-30.165334a42.666667 42.666667 0 0 1 60.330667 0zM512 64a42.666667 42.666667 0 0 1 42.666667 42.666667v42.666666a42.666667 42.666667 0 1 1-85.333334 0V106.666667a42.666667 42.666667 0 0 1 42.666667-42.666667z" p-id="15481"></path></svg>
    )
  }
)

if (__DEV__) {
  SunFilled.displayName = 'SunFilled'
}
  