import {
  createReactRouter,
  createRouteConfig,
  RouterProvider,
} from '@tanstack/react-router';
import GamePage from './pages/GamePage';
import PlayerStart from './pages/PlayerStart';
import {RegistrationPage} from "./pages/RegistrationPage";

const rootRoute = createRouteConfig();

const indexRoute = rootRoute.createRoute({ path: '/', component: PlayerStart });

const gamePageRoute = rootRoute.createRoute({
  path: '/game',
  component: GamePage,
});

const registrationPageRoute = rootRoute.createRoute({
  path: '/register',
  component: RegistrationPage,
});

const routeConfig = rootRoute.addChildren([indexRoute, gamePageRoute, registrationPageRoute]);

const router = createReactRouter({ routeConfig });

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
