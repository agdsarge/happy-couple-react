
import {WIZARD_FORM_CHANGE, WIZARD_PAGE_CHANGE, WIZARD_CLEANUP, WIZARD_SUBMIT, WIZARD_SUCCESS, WIZARD_FAILURE} from '../Actions/type';

const initialState = {
    createWedding: {
        weddingDate: null,
        couple: [{}, {}],
        theme: null,
        fontFamily: null,
        slug: null,
        registryLink: null,
        reception: {
            venueName: null, 
            venueStreet: null, 
            venueCity: null, 
            venueCountry: null, 
            venueZipCode: null, 
        },
        ceremony: {
            venueName: null, 
            venueStreet: null, 
            venueCity: null, 
            venueCountry: null, 
            venueZipCode: null, 
        }
    },
    page: 1,
    totalPages: 3,
    error: null
}

const reducer = (oldState=initialState, action) => {
    switch (action.type) {
        case WIZARD_FORM_CHANGE:
            return {...oldState};
        case WIZARD_PAGE_CHANGE:
            return {...oldState, page: (oldState.page + action.payload)};
        case WIZARD_CLEANUP:
            return initialState;
        case WIZARD_FAILURE:
            return {...oldState, error: action.payload}
        default:
            return oldState;
    }
}

export default reducer;
