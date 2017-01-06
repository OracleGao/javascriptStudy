import fetch from 'node-fetch'
import util from 'util' 

export const CONTEXT_REQUEST = 'CONTEXT_REQUEST'
export const CONTEXT_REQUEST_FAILED = 'CONTEXT_REQUEST_FIALED'

export function contextRequest(options) {
  return (dispatch) => fetch(options.url)
         .then(response => response.json())
         .then(json => {
           dispatch({
             type: CONTEXT_REQUEST,
             data: json
           })
         }).catch(error => {
           dispatch({
             type: CONTEXT_REQUEST_FAILED,
             err:{message: error.message,
                  name: error.name,
                  stack: error.stack}
           })
         })
}

