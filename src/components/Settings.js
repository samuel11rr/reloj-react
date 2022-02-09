import React from 'react';

export const Settings = ({ isSettingsOpen, handleSettings, showSeconds, handleShowSeconds }) => {
  return (
    <aside className='settings-panel'>
      <div className='settings-header'>
        <span> Settings panel </span>
        <button onClick={ () => handleSettings( !isSettingsOpen ) } >
          Close
        </button>
      </div>

      <div>
        <input type="checkbox" id="show-seconds" checked={ showSeconds } onChange={ () => handleShowSeconds( !showSeconds ) } />
        <label htmlFor="show-seconds"> Show seconds </label>
      </div>
    </aside>
  );
};
