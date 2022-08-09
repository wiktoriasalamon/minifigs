import { setLocale, setTranslations } from 'react-i18nify'
import { ThemeProvider } from 'styled-components'
import { OrderPageContainer } from 'components/pages/OrderPage'
import { GlobalStyle } from 'styles/GlobalStyle'
import { theme } from 'styles/theme'
import { languages } from 'translations'

// react-i18nify configuration
setTranslations(languages)
setLocale('en')

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
