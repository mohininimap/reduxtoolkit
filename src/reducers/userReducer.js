import { createReducer } from "@reduxjs/toolkit"
const initialState={
    name:"Mohini",
    age:22,
    status:"coder"
  }

//   old way
// export default (state=initialState,action)=>{
// if(action.type=='UPDATE_AGE'){
//     return {
//         ...state,
//         age:action.payload
//     }
   
// }
// return state;
// }

// new way

export default createReducer(initialState,(builder)=>{
    builder.addCase('UPDATE_AGE',(state,action)=>{
        state.age=action.payload
    })
})