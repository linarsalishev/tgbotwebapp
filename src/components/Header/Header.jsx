import React from 'react';
import { useTelegram } from '.../Button/Button';

const header = () => {


    const {user, onClose} = useTelegram();

    return (
        <div>

            <button onClick={onClose}>Закрыть</button>
            <span className={'username'}> {user?.username} </span>

        </div>
    );
};

export default header;