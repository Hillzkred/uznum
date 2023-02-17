import {
    RootRoute,
    Route,
    Router,
    RouterProvider,
} from '@tanstack/react-router';
import GamePage from './pages/GamePage';
import PlayerStart from './pages/PlayerStart';
import {RegistrationPage} from "./pages/RegistrationPage";
import Nav from "./components/Nav";

const rootRoute = new RootRoute({
    component: Nav
});

const indexRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/',
    component: PlayerStart
});

const gamePageRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/game',
    component: GamePage,
});

const registrationPageRoute = new Route({
    getParentRoute: () => rootRoute,
    path: '/register',
    component: RegistrationPage,
});

const routeTree = rootRoute.addChildren([indexRoute, gamePageRoute, registrationPageRoute]);

const router = new Router({routeTree});

function App() {
    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
