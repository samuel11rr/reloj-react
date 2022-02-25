const defaultSettings = {
  limit: null,
  showSeconds: true
}


export const previousSettings = () => {
  return JSON.parse( localStorage.getItem('settings') ) || defaultSettings;
}


export const saveLimit = (limit = null) => {
  const settings = {
    ...previousSettings(),
    limit,
  }

  return saveSettings(settings);
}


export const removeLimit = () => {
  return saveSettings({
    ...previousSettings(),
    limit: null
  });
}


export const saveSecondsStatus = (value = true) => {
  return saveSettings({
    ...previousSettings(),
    showSeconds: value
  });
}


const saveSettings = (settings) => {
  const strSettings = JSON.stringify(settings);
  localStorage.setItem('settings', strSettings);
}
