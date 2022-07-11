import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'
import { GlobalStyle } from 'styles/GlobalStyle'
import { OrderPageContainer } from 'components/pages/OrderPage'

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
