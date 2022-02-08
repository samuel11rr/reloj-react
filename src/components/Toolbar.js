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
          { isSettingsOpen ? 'Close settings' : 'Open settings' }
        </li>

        <li onClick={ fullSize }> 
          { isExpanded ? 'Close' : 'Expand' }
        </li>
      </ul>
    </menu>
  );
};
