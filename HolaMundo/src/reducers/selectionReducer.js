export default (state = null, action) => {
    switch (action.type) {
        case 'select_hotel':
            return action.payload;
        default:
            return state;

    }
};
