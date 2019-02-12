const initState = {
    projects: [
        {
            id: '1',
            title: 'Add commercial to the public account',
            content: 'commercial need to be added to the public account'
        },
        {
            id: '2',
            title: 'Move car to the new garage',
            content: 'Garage repair is done, so I can put my car there'
        },
        {
            id: '3',
            title: 'Sell all the crypto',
            content: 'Analytics said that crypto is not going to make it, so I decided to sell all of it.'
        },
    ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created-project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error ',action.err);
            return state;

        default:
            return state;
    }
};

export default projectReducer;