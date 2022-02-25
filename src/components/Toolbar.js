import React from 'react';

export const Toolbar = ({ isExpanded, handleExpanded, isSettingsOpen, handleSettings }) => {

  const fullSize = () => {
    handleExpanded( !isExpanded );

    if ( !isExpanded ) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }

  return (
    <menu className='toolbar-pannel'>
      <ul className='toolbar-menu'>
        <li onClick={ () => handleSettings( !isSettingsOpen ) }>
          { isSettingsOpen ? 'Cerrar ajustes' : 'Ajustes' }
        </li>

        <li onClick={ fullSize }> 
          { isExpanded ? 'Salir de pantalla completa' : 'Pantalla completa' }
        </li>
      </ul>
    </menu>
  );
};
