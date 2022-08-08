import { ThemeProvider } from 'styled-components'
import { OrderPageContainer } from 'components/pages/OrderPage'
import { GlobalStyle } from 'styles/GlobalStyle'
import { theme } from 'styles/theme'

export function Root() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <OrderPageContainer />
      </ThemeProvider>
    </div>
  )
}
