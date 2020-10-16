import { Fragment, h } from 'preact'

import { AppFooter } from '/@/components/app/AppFooter'
import { Clock } from '/@/components/timer/clock'
export const App = () => {
  return (
    <>
      <div class="container">
        <Clock />
      </div>
      <AppFooter />
    </>
  )
}
