import React from 'react'

export * from './basic.stories'

export default {
  title: 'Carousel',
  decorators: [(story: Function) => <div>{story()}</div>],
}
