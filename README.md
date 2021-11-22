# use-fullstory-web3

> Automatically record web3 events into FullStory

[![NPM](https://img.shields.io/npm/v/use-fullstory-web3.svg)](https://www.npmjs.com/package/use-fullstory-web3) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save use-fullstory-web3
```

## Usage

```tsx
import * as React from 'react'

import { useMyHook } from 'use-fullstory-web3'

const Example = () => {
  const example = useMyHook()
  return (
    <div>
      {example}
    </div>
  )
}
```

## License

MIT © [ralfpopescu](https://github.com/ralfpopescu)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
