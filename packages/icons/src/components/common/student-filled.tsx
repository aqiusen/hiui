
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _prefix = getPrefixCls('icon-student-filled')

export const StudentFilled = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, className, children, size, style: styleProp, ...rest }, ref) => {
    const cls = cx(prefixCls, className)
    const style = { fontSize: size, ...styleProp }

    return (
      <svg className={cls} ref={ref} role="icon" style={style} {...rest}    viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"  ><path d="M832 525.824v229.44c0 7.466667-1.856 15.018667-5.76 22.229333-6.250667 11.456-17.088 20.650667-30.613333 25.941334l-231.189334 104.128c-33.28 13.013333-71.616 13.013333-104.874666 0l-231.189334-104.128C205.44 794.453333 191.957333 775.210667 192 755.114667V525.824l279.466667 126.741333a98.154667 98.154667 0 0 0 75.861333 2.197334l5.205333-2.197334L832 525.824z" p-id="9716"></path><path d="M552.533333 115.413333l400.085334 181.44a48.810667 48.810667 0 0 1 0 88.96L552.533333 567.232a98.154667 98.154667 0 0 1-81.066666 0L71.381333 385.813333a48.810667 48.810667 0 0 1 0-88.96L471.466667 115.434667a98.154667 98.154667 0 0 1 81.066666 0z" p-id="9717"></path></svg>
    )
  }
)

if (__DEV__) {
  StudentFilled.displayName = 'StudentFilled'
}
  