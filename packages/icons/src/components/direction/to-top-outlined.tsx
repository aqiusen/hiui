
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _role = 'icon-to-top-outlined'
const _prefix = getPrefixCls(_role)

export const ToTopOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M106.666667 149.333333a42.666667 42.666667 0 0 0 42.666666 42.666667h725.333334a42.666667 42.666667 0 1 0 0-85.333333H149.333333a42.666667 42.666667 0 0 0-42.666666 42.666666z m161.834666 435.498667a42.666667 42.666667 0 0 0 57.621334 2.496l2.709333-2.496L469.333333 444.309333V874.666667a42.666667 42.666667 0 1 0 85.333334 0V444.352l140.501333 140.48a42.666667 42.666667 0 0 0 57.621333 2.496l2.709334-2.496a42.666667 42.666667 0 0 0 2.496-57.621333l-2.496-2.709334-213.333334-213.333333-2.176-2.026667a42.922667 42.922667 0 0 0-0.341333-0.32l2.517333 2.346667a43.157333 43.157333 0 0 0-8.874666-6.826667A42.496 42.496 0 0 0 512 298.666667h-0.64l-1.856 0.064L512 298.666667a43.178667 43.178667 0 0 0-8.938667 0.938666 42.261333 42.261333 0 0 0-18.517333 9.066667l-0.192 0.149333c-0.853333 0.746667-1.706667 1.536-2.517333 2.346667l-213.333334 213.333333a42.666667 42.666667 0 0 0 0 60.330667z" p-id="49756"></path></svg>
    )
  }
)

if (__DEV__) {
  ToTopOutlined.displayName = 'ToTopOutlined'
}
  