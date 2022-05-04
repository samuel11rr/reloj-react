let screenLock;

const screenLockOn = async () => {
  if ( !navigator.wakeLock ) return;

  try {
    screenLock = await navigator.wakeLock.request('screen');
  } catch (error) {
    console.log(error);
  }
}

const screenLockOff = async () => {
  if ( !screenLock ) return;

  await screenLock.release();
  screenLock = null;
}


export const addListeners = () => {
  document.addEventListener('visibilitychange', () => {
    return screenLock !== undefined && document.visibilityState === 'visible'
      ? screenLockOn()
      : screenLockOff();
  });
  
  window.addEventListener('focus', () => screenLockOn());
  window.addEventListener('blur', () => screenLockOff());
}