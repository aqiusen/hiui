
import React, { forwardRef } from 'react'
import { cx, getPrefixCls } from '@hi-ui/classname'
import { __DEV__ } from '@hi-ui/env'
import { IconProps } from '../../@types/props'

const _role = 'icon-sort-descending-outlined'
const _prefix = getPrefixCls(_role)

export const SortDescendingOutlined = forwardRef<SVGSVGElement | null, IconProps>(
  ({ prefixCls = _prefix, role = _role, className, children, style, onClick }, ref) => {
    const cls = cx(prefixCls, className)

    return (
      <svg className={cls} ref={ref} role={role} style={style} onClick={onClick}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" version="1.1"><path d="M456.832 716.501333a42.666667 42.666667 0 0 0-57.621333-2.496l-2.709334 2.496L341.333333 771.669333 341.333333 149.333333a42.666667 42.666667 0 1 0-85.333333 0l0.021333 622.336-55.189333-55.168a42.666667 42.666667 0 0 0-57.621333-2.496l-2.709334 2.496a42.666667 42.666667 0 0 0-2.496 57.621334l2.496 2.709333 128 128 2.176 2.026667 0.341334 0.32-2.517334-2.346667a43.157333 43.157333 0 0 0 8.874667 6.826667A42.496 42.496 0 0 0 298.666667 917.333333h0.64c0.64 0 1.237333-0.042667 1.856-0.064L298.666667 917.333333a43.178667 43.178667 0 0 0 8.938666-0.938666 42.261333 42.261333 0 0 0 18.517334-9.066667l0.192-0.149333c0.853333-0.746667 1.706667-1.536 2.517333-2.346667l128-128a42.666667 42.666667 0 0 0 0-60.330667zM645.269333 433.472l18.474667-54.912h124.437333l17.088 54.485333a21.333333 21.333333 0 0 0 20.352 14.954667h30.698667a21.333333 21.333333 0 0 0 20.096-28.458667L771.904 124.416a21.333333 21.333333 0 0 0-20.096-14.208h-49.642667a21.333333 21.333333 0 0 0-20.096 14.165333l-105.322666 295.125334A21.333333 21.333333 0 0 0 596.842667 448H625.066667a21.333333 21.333333 0 0 0 20.224-14.528z m123.2-113.109333h-85.696l43.52-132.906667 42.176 132.906667zM850.773333 896v-16.917333a21.333333 21.333333 0 0 0-21.333333-21.333334h-155.818667l172.032-215.765333a21.333333 21.333333 0 0 0 4.650667-13.312v-27.797333a21.333333 21.333333 0 0 0-21.333333-21.333334H613.610667a21.333333 21.333333 0 0 0-21.333334 21.333334v17.152a21.333333 21.333333 0 0 0 21.333334 21.333333h148.693333l-169.728 212.544a21.333333 21.333333 0 0 0-4.650667 13.312V896a21.333333 21.333333 0 0 0 21.333334 21.333333h220.16a21.333333 21.333333 0 0 0 21.333333-21.333333z" p-id="45126"></path></svg>
    )
  }
)

if (__DEV__) {
  SortDescendingOutlined.displayName = 'SortDescendingOutlined'
}
  