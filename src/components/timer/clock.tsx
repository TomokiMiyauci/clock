import { h } from 'preact'
import { useEffect, useState } from 'preact/hooks'

import { BaseButton } from '/@/components/base/BaseButton'
export const Clock = () => {
  const INTERVAL = 1000
  const INIT = 60,
    [state, setState] = useState(INIT)

  useEffect(() => {
    const id = setInterval(() => {
      setState(state - 1)
    }, INTERVAL)

    return () => {
      clearInterval(id)
    }
  })

  return (
    <div class="text-red-400 flex flex-col items-center text-6xl">
      <span>{state}</span>
      <BaseButton onClick={() => alert} />
    </div>
  )
}
