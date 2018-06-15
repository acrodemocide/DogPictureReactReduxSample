export const FETCH_DOG = 'FETCH_DOG';
export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';

// This is our action
// You can think of actions as a message
export const fetchDogAction =  () => (
    { type: FETCH_DOG }
);

export const fetchDogSuccess = (dog) => (
    {
        type: FETCH_DOG_SUCCESS, // The type property is always required
        dog // This property can be anything -- in DealerSocket, we use "Payload," but any name can be used
    }
);

export const fetchDogError = (error) => (
    {
        type: FETCH_DOG_ERROR,
        error
    }
);

export const initialState = {
    fetching: false,
    dog: null,
    error: null
}

// Action will be either fetchDogsuccess or fetchDogError
export function rootReducer(state = initialState, action) {
    switch(action.type) {
        case FETCH_DOG:
            console.log("Redux: FETCH_DOG");
            return {
                ...state,
                fetching: true,
                error: null
            };

        case FETCH_DOG_SUCCESS:
            console.log("Redux: FETCH_DOG_SUCCESS");
            return {
                ...state,
                fetching: false,
                dog: action.dog
            };
        
        case FETCH_DOG_ERROR:
            console.log("Redux: FETCH_DOG_ERROR");
            return {
                ...state,
                fetching: false,
                error: action.error
            }
        
        default:
            return state;
        }
}