'use client';
import React from 'react';

const LoginC = () => {
    return (
        <div>
            <button onClick={ () => console.log('Hello Server, From clientsided typescript <3')}>login</button>
        </div>
    )
}

export default LoginC