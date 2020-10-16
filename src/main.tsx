import '/@/assets/tailwind.css'
import '/@/assets/index.css'

import { h, render } from 'preact'

import { App } from '/@/app'

const el = document.getElementById('app')
if (el) {
  render(<App />, el)
}
