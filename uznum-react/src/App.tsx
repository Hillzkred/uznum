import {
  createReactRouter,
  createRouteConfig,
  RouterProvider,
} from '@tanstack/react-router';
import Router from './components/Router';
import GamePage from './pages/GamePage';
import PlayerStart from './pages/PlayerStart';

const rootRoute = createRouteConfig();

const indexRoute = rootRoute.createRoute({ path: '/', component: PlayerStart });

const gamePageRoute = rootRoute.createRoute({
  path: '/game',
  component: GamePage,
});

const routeConfig = rootRoute.addChildren([indexRoute, gamePageRoute]);

const router = createReactRouter({ routeConfig });

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
