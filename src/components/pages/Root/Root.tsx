import { setLocale, setTranslations } from 'react-i18nify'
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from 'styled-components'
import { OrderPageContainer } from 'components/pages/OrderPage'
import { GlobalStyle } from 'styles/GlobalStyle'
import { theme } from 'styles/theme'
import { languages } from 'translations'
import 'react-toastify/dist/ReactToastify.css'

// react-i18nify configuration
setTranslations(languages)
setLocale('en')

export function Root() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <OrderPageContainer />
        <ToastContainer
          position='bottom-center'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </ThemeProvider>
    </div>
  )
}
