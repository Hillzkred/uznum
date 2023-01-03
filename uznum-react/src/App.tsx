import {
  createReactRouter,
  createRouteConfig,
  RouterProvider,
} from '@tanstack/react-router';
import Router from './components/Router';
import About from './pages/About';
import Home from './pages/Home';

const rootRoute = createRouteConfig({
  component: Router,
});

const indexRoute = rootRoute.createRoute({ path: '/', component: Home });

const aboutRoute = rootRoute.createRoute({ path: '/about', component: About });

const routeConfig = rootRoute.addChildren([indexRoute, aboutRoute]);

const router = createReactRouter({ routeConfig });

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
