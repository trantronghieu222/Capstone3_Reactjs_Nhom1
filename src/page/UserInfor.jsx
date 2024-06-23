import React from 'react'
import { useSelector } from 'react-redux'

const UserInfor = () => {
  const {arrUser} = useSelector ( state => state.userReducer.arrUser);
  console.log(arrUser);
  return (
    <div className='container'>

    </div>
  )
}

export default UserInfor