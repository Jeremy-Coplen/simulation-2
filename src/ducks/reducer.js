const UPDATE_NAME = "UPDATE_NAME"
const UPDATE_ADDRESS = "UPDATE_ADDRESS"
const UPDATE_CITY = "UPDATE_CITY"
const UPDATE_STATE = "UPDATE_STATE"
const UPDATE_ZIPCODE = "UPDATE_ZIPCODE"
const UPDATE_IMAGE = "UPDATE_IMAGE"
const UPDATE_MONTHLY_MORTGAGE = "UPDATE_MONTHLY_MORTGAGE"
const UPDATE_DESIRED_RENT = "UPDATE_DESIRED_RENT"
const CANCEL = "CANCEL"

export function updateName(name) {
    return {
        type: UPDATE_NAME,
        payload: name
    }
}

export function updateAddress(address) {
    return {
        type: UPDATE_ADDRESS,
        payload: address
    }
}

export function updateCity(city) {
    return {
        type: UPDATE_CITY,
        payload: city
    }
}

export function updateState(state) {
    return {
        type: UPDATE_STATE,
        payload: state
    }
}

export function updateZipcode(zipcode) {
    return {
        type: UPDATE_ZIPCODE,
        payload: zipcode
    }
}

export function updateImage(image) {
    return {
        type: UPDATE_IMAGE,
        payload: image
    }
}

export function updateMonthlyMortgage(monthlyMortgage) {
    return {
        type: UPDATE_MONTHLY_MORTGAGE,
        payload: monthlyMortgage
    }
}

export function updateDesiredRent(desiredRent) {
    return {
        type: UPDATE_DESIRED_RENT,
        payload: desiredRent
    }
}

export function cancel() {
    return {
        type: CANCEL,
        payload: initialState
    }
}

const initialState = {
    name: "",
    address: "",
    city: "",
    state: "",
    zipcode: "",
    image: "",
    monthlymortgage: "",
    desiredrent: ""
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case UPDATE_NAME: {
            const newName = action.payload
            const newState = Object.assign({}, state, {name: newName})
            return newState
        }
        case UPDATE_ADDRESS: {
            const newAddress = action.payload
            const newState = Object.assign({}, state, {address: newAddress})
            return newState
        }
        case UPDATE_CITY: {
            const newCity = action.payload
            const newState = Object.assign({}, state, {city: newCity})
            return newState
        }
        case UPDATE_STATE: {
            const newValue = action.payload
            const newState = Object.assign({}, state, {state: newValue})
            return newState
        }
        case UPDATE_ZIPCODE: {
            const newZipcode = action.payload
            const newState = Object.assign({}, state, {zipcode: newZipcode})
            return newState
        }
        case UPDATE_IMAGE: {
            const newImage = action.payload
            const newState = Object.assign({}, state, {image: newImage})
            return newState
        }
        case UPDATE_MONTHLY_MORTGAGE: {
            const newMonthlyMortgage = action.payload
            const newState = Object.assign({}, state, {monthlymortgage: newMonthlyMortgage})
            return newState
        }
        case UPDATE_DESIRED_RENT: {
            const newDesiredRent = action.payload
            const newState = Object.assign({}, state, {desiredrent: newDesiredRent})
            return newState
        }
        case CANCEL: {
            const newState = Object.assign({}, action.payload)
            return newState
        }
        default: return state
    }
}

export default reducer