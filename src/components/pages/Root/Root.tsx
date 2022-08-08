import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'
import { GlobalStyle } from 'styles/GlobalStyle'
import { OrderPageContainer } from 'components/pages/OrderPage'
import { setLocale, setTranslations } from 'react-i18nify'
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
