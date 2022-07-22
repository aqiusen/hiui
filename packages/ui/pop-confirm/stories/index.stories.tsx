import React from 'react'
import PopConfirm from '../src'

export * from './basic.stories'
export * from './custom-icon.stories'
export * from './async.stories'

export default {
  title: 'FeedBack/PopConfirm',
  component: PopConfirm,
  decorators: [(story: Function) => <div>{story()}</div>],
}
