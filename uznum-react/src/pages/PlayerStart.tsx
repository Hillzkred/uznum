import {Link} from '@tanstack/react-router';
import {ChangeEvent, useState} from "react";
import {useSocketIo} from "../hooks/useSocketIo";
import {events} from "uznum-events";

function PlayerStart() {
    const socket = useSocketIo();
    const [playerName, setPlayerName] = useState("");

    const playerNameHandler = (e: ChangeEvent) => {
        if (e.target instanceof HTMLInputElement) {
            setPlayerName(e.target.value);
        }
    }

    const playHandler = () => {
        console.log(playerName);
        socket?.emit(events.GAME_STARTED, playerName);
        return true;
    }
    return (
        <div className='text-center m-auto w-3/5 bg-primary h-screen w-screen'>
            <main className='flex flex-col justify-center items-center h-screen'>
                <h1 className='text-white text-3xl'>What is your name?</h1>
                <div className='pt-5'/>
                <input
                    onChange={playerNameHandler}
                    className='rounded-lg w-96 py-1 text-center text-2xl'
                    type='text'
                />
                <div className='pb-5'/>
                <Link
                    to='/game'
                    onClick={playHandler}
                    className='rounded-lg py-3 text-2xl text-white border-secondary border w-96 hover:bg-secondary duration-300'
                >
                    Play
                </Link>
            </main>
        </div>
    );
}

export default PlayerStart;
