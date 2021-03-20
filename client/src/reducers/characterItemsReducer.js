export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_CHARACTER_ITEMS':
            return action.payload
        default:
            return state;
    }
}