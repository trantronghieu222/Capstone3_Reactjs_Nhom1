import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUserActionAsync } from '../redux/reducers/UserReducer';

const UserInfor = () => {
  
  const { arrUser } = useSelector(state => state.userReducer.arrUser);
  // console.log(arrUser);

  const dispatch = useDispatch(

    useEffect (() => {
      const ActionAsync = getAllUserActionAsync
      dispatch(ActionAsync)

    },[])
  )
  return (
    <div className='container'>
      <h3> User Information</h3>
      <table className='table'>
        <thead>
          <tr>
            <th>id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>

          </tr>
        </thead>
<tbody>
  {arrUser?.map((user,index) => {
    return <tr id = {index}>
      <td> {user.id}</td>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td> {user.phone}</td>
      <td><button className='btn btn-danger'>Delete</button></td>
    </tr>
  })}
</tbody>
      </table>
    </div>
  )
}

export default UserInfor