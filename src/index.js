import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducers'

import App from './container/App'

const store = createStore(
    reducer, 
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

console.log(store.getState())
store.subscribe( () => console.log(store.getState()))

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)