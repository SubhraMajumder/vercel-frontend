import { useState, useEffect } from  'react';

const UserList = () => {
  const [userList, setUserList] = useState([]);

  useEffect(()=> {
    fetch('http://localhost:8000/api/users')
      .then(response => response.json())
      .then(json => setUserList(json))
      .catch(error => console.error(error));
  }, [userList])

  const handleDelete = (index) => {
    console.log(index)
    fetch(`http://localhost:8000/api/users/${index}`, {
      method: "DELETE"
    })
    .then((response) => {
      if(!response.ok){
        throw new Error("Failed to delete");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Deleted successfully:", data);
    })
    .catch((error) => {
      console.log("Error", error);
    })
  }

  return(
    <>
      <ul className='userList'>
        {userList.map((value, index )=>(
          <li key={index}>
            <p><strong>{ value.first_name + " " + value.last_name }</strong> {value.gender === "Male" ? "[M]" : value.gender === "Female" ? "[F]" : "[O]"}</p>
            <i>{ value.job_title }</i>
            <p>{ value.email }</p>
            <button>Edit</button>
            <button onClick={()=> handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default UserList;