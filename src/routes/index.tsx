import { createBrowserRouter } from 'react-router-dom';
import { hrRoutes } from '@/modules/hr/routes/hrRoutes';
import Home from '@/pages/Home/Home';
import NotFound from '@/components/NotFound/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  ...hrRoutes,
  // Other module routes will be added here
  
  // Catch-all route for 404
  {
    path: '*',
    element: <NotFound />,
  },
]);
