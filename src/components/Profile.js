import React from 'react';
import { useSelector,useDispatch} from 'react-redux';
const Profile = () => {
    const {name,age,status}=useSelector((state)=>{
        return state;
    })

    const dispatch=useDispatch();

    const updateAge=(age)=>{
   dispatch({type:'UPDATE_AGE',
payload:age
   })
    }
  return (
   <>
   <h2>I am {name}</h2>
   <h2>My age is {age}</h2>
   <h2>My status is {status}</h2>
   <button onClick={()=>{updateAge(26)}}>Update age</button>
   </>
  )
}

export default Profile