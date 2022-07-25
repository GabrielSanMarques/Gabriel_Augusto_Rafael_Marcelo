import { globalCss } from '@stitches/react'
import { AppRoutes } from './Routes'

const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  body: {
    fontFamily: '$helvetica',
    height: '100%',
  },
})

function App() {
  globalStyles();
  return (
    <div>
      <AppRoutes />
    </div>
  )
}

export default App
