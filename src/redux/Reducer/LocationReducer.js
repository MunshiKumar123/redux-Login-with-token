import { FORM_DATA, LOCATION_DATA_GET } from "../type/type"

const INITIAL_STATE = {
    noOfPlants: "",
    noOfOffices: "",
    InNoOfPlants: "",
    InNoOfOffices: "",
    location: []
}


// eslint-disable-next-line import/no-anonymous-default-export
export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case FORM_DATA:
            return {
                ...state, [action.payload.prop]: action.payload.value
            }
        // data get
        case LOCATION_DATA_GET:
            return {
                ...state, location: action.payload
            }
        default:
            return state
    }

}
