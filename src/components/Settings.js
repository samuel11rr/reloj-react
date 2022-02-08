import React from 'react';

export const Settings = ({ isSettingsOpen, handleSettings }) => {
  return (
    <aside className='settings-panel'>
      <div className='settings-header'>
        <span> Settings panel </span>
        <button onClick={ () => handleSettings( !isSettingsOpen ) } >
          Close
        </button>
      </div>

      Show seconds: true
    </aside>
  );
};
