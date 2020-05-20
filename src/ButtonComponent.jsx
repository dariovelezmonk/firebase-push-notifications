import React, { useState, useCallback } from 'react';
import { askForPermissionToReceiveNotifications } from './push-notifications';

export const ButtonComponent = () => {
    const [token, setToken] = useState('');
    const onClick = useCallback(async () => {
        const newToken = await askForPermissionToReceiveNotifications();
        setToken(newToken);
    }, []);

    return (
        <>
            <button onClick={onClick}>Get Permission Token</button>
            <div>
                MY SERVICE WORKER TOKEN:
                <p>{token}</p>
            </div>
        </>
    );
};
