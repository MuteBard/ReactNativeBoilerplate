import { combineReducers, createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk'
import TestReducer from './Test.reducer'

const reducer = combineReducers({
    test : TestReducer
})

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(ReduxThunk)
);

export default store


// import { combineReducers} from 'redux';
// import TestReducer from './Test.reducer'

// const reducer = combineReducers({
//     test : TestReducer
// })

// export default reducer