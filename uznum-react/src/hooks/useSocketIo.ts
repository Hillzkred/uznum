import {useEffect, useState} from 'react';
import io, {Socket} from "socket.io-client";
import {websocketHost} from "../default.config";

export const useSocketIo = () => {
    const [socket, setSocket] = useState<Socket>();

    useEffect(() => {
        const socket = io(websocketHost);
        setSocket(socket);

        return () => {
            socket.disconnect();
        };
    }, []);

    return socket;
}