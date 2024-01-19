
import './App.css';
import {useEffect, useState} from "react";

function App() {
  const [data, setData] = useState([]);
  const URL = "https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001";

  useEffect(() => {
    fetchData();

  }, []);

  const fetchData = () =>{
      fetch(URL)
          .then(response => response.json())
          .then(data => setData(data))
          .catch(error => console.log(error))
  }

  return (
    <div className="App">
      <h1>Employee Data</h1>
      <table>
        <thead>
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
        </thead>
        <tbody>
        {data.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
            </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
