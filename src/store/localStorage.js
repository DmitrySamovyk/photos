export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('AppState');
    if ( serializedState === null) {
      return {};
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return {};
  }
};

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('AppState', serializedState);
  } catch (err) {
    // Ignore errors
  }
};