
import {WIZARD_FORM_CHANGE, WIZARD_PAGE_CHANGE, WIZARD_CLEANUP, WIZARD_SUBMIT, WIZARD_SUCCESS, WIZARD_FAILURE} from '../Actions/type';

const initialState = {
    createWedding: {
        general: {
            weddingDate: null,
            partnerOne: null,
            partnerTwo: null,
            theme: "sunset",
            slug: null,
            registryLink: null,
        },
        reception: {
            venueName: null, 
            venueStreet: null, 
            venueCity: null, 
            venueState: null, 
            venueCountry: null, 
            venueZipCode: null, 
        },
        ceremony: {
            venueName: null, 
            venueStreet: null, 
            venueCity: null, 
            venueState: null, 
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
            if (action.key === 'general') {
                return {...oldState, createWedding: {...oldState.createWedding, general: {...oldState.createWedding.general, ...action.payload}}};
            } else if (action.key === 'ceremony') {
                return {...oldState, createWedding: {...oldState.createWedding, ceremony: {...oldState.createWedding.ceremony, ...action.payload}}};
            } else {
                return {...oldState, createWedding: {...oldState.createWedding, reception: {...oldState.createWedding.reception, ...action.payload}}};
            }
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
