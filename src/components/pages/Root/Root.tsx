import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import OrderFormContainer from '../OrderPage'

function Root() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <OrderFormContainer />
      </ThemeProvider>
    </div>
  )
}

export default Root
