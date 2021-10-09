//Background.js
import React from 'react';

const Background = ( { children } ) =>
{
    return (
        <main className="transition-all">
            {children}
        </main>
    )
}

export default Background;