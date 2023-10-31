import { AppContextProvider } from 'contexts/app/AppContextProvider';

import UserRouter from './routers/UserRouter';

// Setting variable for actual page height
// (https://css-tricks.com/the-trick-to-viewport-units-on-mobile/)
const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

const App = () => (
  <main>
    <AppContextProvider>
      <UserRouter />
    </AppContextProvider>
  </main>
);

export default App;
