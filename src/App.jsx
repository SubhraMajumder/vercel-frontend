import { useState, useEffect } from  'react';

const App = () => {
  const [userList, setUserList] = useState([]);
  useEffect(()=> {
    fetch('http://localhost:8000/api/users')
      .then(response => response.json())
      .then(json => setUserList(json))
      .catch(error => console.error(error));
  }, [])
  return(
    <>
      <ul>
        {userList.map((value, index )=>(
          <li key={index}>
            <p><strong>{ value.first_name + " " + value.last_name }</strong></p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default App;