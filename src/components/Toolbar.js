import React, { useEffect } from 'react';
import cog from '../assets/cog.svg';
import expand from '../assets/arrow-expand.svg';
import exit from '../assets/fullscreen-exit.svg';

const fullScreenAvailable = !!document.documentElement.requestFullscreen;

export const Toolbar = ({ isExpanded, handleExpanded, isSettingsOpen, handleSettings }) => {
  const fullSize = () => {
    handleExpanded( !isExpanded );

    if ( !isExpanded ) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

  useEffect(() => {
    document.addEventListener('fullscreenchange', () => {
      if (!document.fullscreenElement) {
        handleExpanded( false );
      }
    });
  }, [handleExpanded]);

  return (
    <menu className='toolbar-pannel'>
      <ul className='toolbar-menu'>
        <li onClick={ () => handleSettings( !isSettingsOpen ) } className="button-img">
          <img src={ cog } alt="Ajustes" title="Ajustes" />
        </li>

        {fullScreenAvailable && (
          <li onClick={ fullSize } className="button-img">
            <img 
              src={ isExpanded ? exit : expand } 
              alt={ isExpanded ? 'Salir de pantalla completa' : 'Pantalla completa' } 
              title={ isExpanded ? 'Salir de pantalla completa' : 'Pantalla completa' }
            />
          </li>
        )}
      </ul>
    </menu>
  );
};
