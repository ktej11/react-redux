//any additional info u want to send we use word payload
const redux = require('redux')

const createStore = redux.createStore
const bindActionCreators = redux.bindActionCreators
const combineReducers = redux.combineReducers

const CAKE_ORDERED = 'CAKE_ORDERED'
const CAKE_RESTOCKED = 'CAKE_RESTOCKED'

function orderCake(qty = 1) {
    return {
        type: CAKE_ORDERED,
        payload: qty
    }
}
function restockCake(qty = 1) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty
    }
}

const initialCakeState = {
    numOfCakes: 10
}

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case CAKE_ORDERED:
            return {
                ...state,
                numOfCakes: state.numOfCakes - 1
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numOfCakes: state.numOfCakes + action.payload
            }
        default:
            return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
})

const store = createStore(rootReducer)

console.log('Initial State ', store.getState())
// const unsubscribe =
const unsubscribe = store.subscribe(() => {
    console.log('Updated State ', store.getState())
})

const actions = bindActionCreators(
    { orderCake, restockCake },
    store.dispatch
)

store.dispatch(orderCake())
actions.orderCake()
actions.orderCake()
actions.orderCake()
actions.restockCake(1)

unsubscribe()
