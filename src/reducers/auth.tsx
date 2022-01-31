const auth = (state = { auth: false }, action: any) => {
    switch (action.type) {
        case 'SET_AUTH':
            return {
                auth: true,
            };
        case 'UNSET_AUTH':
            return {
                auth: false,
            }
        default:
            return state;
    }
};

export default auth;