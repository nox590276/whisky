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


function App() {
  const router=createBrowserRouter([
    {
      path:'/',
      errorElement:<NotFound/>,
      element:<Root/>,
      children:[
        {path:'/', element:<Home/>},
        {path:'/scotchwhisky', element:<ScotchWhisky/>},
        {path:'/whisky', element:<Whisky/>},
        {path:'/etcbeverage', element:<EtcBeverage/>},
        {path:'/whiskysearch', element:<WhiskySearch/>},
        {path:'/whisky/:productId', element:<ProductDetail/>}
      ]
    }
  ])
  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
