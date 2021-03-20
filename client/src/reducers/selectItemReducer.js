export default (selectedItem = null, action) => {
  if (action.type === 'SELECT_ITEM') {
    return action.payload;
  }
  return selectedItem;
};
