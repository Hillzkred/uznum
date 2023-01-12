import {useEffect, useState} from 'react';
import io, {Socket} from "socket.io-client";
import config from "config";

export const useSocketIo = () => {
    const [socket, setSocket] = useState<Socket>();

    useEffect(() => {
        const socket = io(config.get("ws.host"));
        setSocket(socket);

        return () => {
            socket.disconnect();
        };
    }, []);

    return socket;
}