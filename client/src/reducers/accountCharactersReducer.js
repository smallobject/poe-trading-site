export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_ACCOUNT_CHARACTERS':
            return action.payload
        default:
            return state;
    }
}