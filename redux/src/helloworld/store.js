import { createStore, applyMiddleware } from 'redux'
import todoAppCombiner from './reducer'
import { addTodo, toggleTodo } from './actions'
import { contextRequest } from './asyncActions'
import thunk from 'redux-thunk'

let store = createStore(todoAppCombiner, {onGet: 1, addTodo: 1, toggleTodo: 2}, applyMiddleware(thunk))

console.log('init: ' + JSON.stringify(store.getState()))

let unsubscribe = store.subscribe(() => console.log('subscribe: ' + JSON.stringify(store.getState())))

store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(contextRequest({url: 'http://192.168.130.115:21691/tub/v1/data/count'}))
store.dispatch(contextRequest({url: 'http://192.168.130.115:21691/tub/v1/data/count1'}))
store.dispatch(contextRequest({url: 'http://192.168.130.115:21691/tub/v1/data/count/byday'}))
setTimeout(() => unsubscribe(), 20000 )
