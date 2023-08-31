import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Root from './pages/Root';
import NotFound from './components/NotFound';
import ScotchWhisky from './components/ScotchWhisky';
import Whisky from './components/Whisky';
import EtcBeverage from './components/EtcBeverage';
import WhiskySearch from './components/WhiskySearch';
import Home from './components/Home';
import ProductDetail from './pages/ProductDetail';
import './pages/css/reset.css'
import { isMobile } from 'react-device-detect';
import MobileRoot from './pages/mobilePages/MobileRoot';
import { AuthContextProvider } from './context/authContext'
import MobileScotchWhisky from './pages/mobilePages/MobileScotchWhisky';
import MobileWhisky from './pages/mobilePages/MobileWhisky';
import MobileEtcbeverage from './pages/mobilePages/MobileEtcbeverage';
import MobileWhiskySearch from './pages/mobilePages/MobileWhiskySearch';
import MHSelectedWhisky from './pages/mobilePages/MHSelectedWhisky';
import MobileDetailPage from './pages/mobilePages/MobileDetailPage';

function App() {

  let router = null;

  if (isMobile) {
    router = createBrowserRouter([
      {
        path: '/',
        errorElement: <NotFound />,
        element: <MobileRoot />,
        children: [
          { path: '/', element: <MHSelectedWhisky /> },
          { path: '/scotchwhisky', element:<MobileScotchWhisky/> },
          { path: '/whisky', element:<MobileWhisky/> },
          { path: '/etcbeverage', element:<MobileEtcbeverage/> },
          { path: '/whiskysearch/:productId', element:<MobileDetailPage/> },
        ]
      }
    ])
  } else {
    router = createBrowserRouter([
      {
        path: '/',
        errorElement: <NotFound />,
        element: <Root />,
        children: [
          { path: '/', element: <Home /> },
          { path: '/scotchwhisky', element: <ScotchWhisky /> },
          { path: '/whisky', element: <Whisky /> },
          { path: '/etcbeverage', element: <EtcBeverage /> },
          { path: '/whiskysearch', element: <WhiskySearch /> },
          { path: '/whisky/:productId', element: <ProductDetail /> }
        ]
      }
    ])
  }
  return (
    <AuthContextProvider>
       <RouterProvider router={router} />
    </AuthContextProvider>
     
  );
}

export default App;
