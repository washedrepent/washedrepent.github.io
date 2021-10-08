//Background.js
import React from 'react';

const Background = ( { children } ) =>
{
    return (
       
        <body className="bg-primary transition-all">
            {children}
        </body>
    )
}

export default Background;