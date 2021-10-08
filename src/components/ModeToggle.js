import React from 'react';
import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import { ThemeContext } from './ThemeContext';

const ModeToggle = () => {
    const { theme, setTheme } = React.useContext(ThemeContext);

    return (
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className="transition duration-500 ease-in-out rounded-full p-2">
            {theme === 'dark' ? (
            <MoonIcon
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="text-primary dark:text-primary text-2xl cursor-pointer"
            />
            ) : (
              <SunIcon
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="text-primary dark:text-primary text-2xl cursor-pointer"
              />
                )}
        </div>

      </div>
       
    );
};

export default ModeToggle;