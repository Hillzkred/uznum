import { Link, Outlet } from '@tanstack/react-router';

function Router() {
  return (
    <div>
      <div className='py-1' />
      <ul className='flex flex-row m-auto w-3/5'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <div className='px-1' />
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}

export default Router;
