export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_LEAGUE_ITEM':
            return action.payload.result
        default:
            return state;
    }
}