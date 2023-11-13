import { Header } from './components/Header/index.tsx';
import { Orders } from './components/Orders/index.tsx';
import { GlobalStyles } from './styles/GlobalStyles.ts';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css';

export function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Orders />
      <ToastContainer position='bottom-center' />
    </>
  );
}
