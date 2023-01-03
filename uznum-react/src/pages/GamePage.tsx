import { Link } from '@tanstack/react-router';

function GamePage() {
  return (
    <div className='text-center m-auto w-3/5 bg-primary h-screen w-screen'>
      <main className='flex flex-col justify-center items-center h-screen'>
        <Link to='/' className='text-white'>
          Back
        </Link>
        <h1 className='text-white text-3xl'>Game Page</h1>
      </main>
    </div>
  );
}

export default GamePage;
