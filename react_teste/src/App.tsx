import { createBrowserRouter } from 'react-router-dom'
import Login from './pages/Login';
import Produtos from './pages/Produtos';
 
const router = createBrowserRouter([
  {
    path: '/',
    element: <Login/>
  },
  {
    path: '/produtos',
    element: <Produtos/>
  },
])

export { router };