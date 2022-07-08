import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import {OrderPageContainer} from 'components/pages/OrderPage'

export function Root() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <OrderPageContainer />
      </ThemeProvider>
    </div>
  )
}
