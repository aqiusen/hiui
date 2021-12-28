
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _role = 'icon-location-outlined'
const _prefix = getPrefixCls(_role)

export const LocationOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M512 85.333333c200.298667 0 362.666667 162.368 362.666667 362.666667 0 130.602667-106.581333 276.8-315.84 444.032l-20.565334 16.256-26.261333 20.522667-26.261333-20.522667-20.565334-16.256C255.893333 724.778667 149.333333 578.602667 149.333333 448c0-200.298667 162.368-362.666667 362.666667-362.666667z m0 85.333334c-153.173333 0-277.333333 124.16-277.333333 277.333333 0 67.818667 45.141333 150.208 136.746666 245.333333l13.738667 14.016 14.4 14.208a1511.872 1511.872 0 0 0 73.045333 66.069334l18.069334 15.146666 21.312 17.429334L533.333333 802.773333l18.090667-15.146666c56.170667-47.786667 102.272-92.928 138.453333-135.253334l11.093334-13.290666c57.365333-70.336 86.613333-132.693333 88.277333-186.176L789.333333 448c0-153.173333-124.16-277.333333-277.333333-277.333333z m0 106.666666a170.666667 170.666667 0 1 1 0 341.333334 170.666667 170.666667 0 0 1 0-341.333334z m0 85.333334a85.333333 85.333333 0 1 0 0 170.666666 85.333333 85.333333 0 0 0 0-170.666666z" p-id="38695"></path></svg>
    )
  }
)

if (__DEV__) {
  LocationOutlined.displayName = 'LocationOutlined'
}
  