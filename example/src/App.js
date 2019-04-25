import React from 'react'

import { useMyHook } from '@devhammed/use-cookie'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
