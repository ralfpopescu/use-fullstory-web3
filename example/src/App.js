import React from 'react'

import { useMyHook } from 'use-fullstory-web3'

const App = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App
