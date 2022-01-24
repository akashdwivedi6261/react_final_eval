import React, { useState, useEffect } from "react";
import axios from "axios";
export default function Admin() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    return axios.get("http://localhost:8000/employee");
  };
  useEffect(() => {
    fetchData().then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  return (
    <div>
      <h1>Admin page</h1>
      <table
        style={{
          width: "80%",
          margin: "2rem auto",
          borderWidth: "1px",
          borderColor: "#aaaaaa",
          borderStyle: "solid"
        }}
      >
        <thead>
          <th>Name</th>
          <th>Date</th>
          <th>Purpose of Claim</th>
          <th>Status</th>
        </thead>
        <tbody>
          {data?.map((item) => (
            <tr key={item.id}>
              <td style={{ border: "1px solid black" }}>{item.name}</td>
              <td style={{ border: "1px solid black" }}>{item.date}</td>
              <td style={{ border: "1px solid black" }}>{item.purpose}</td>
              <td style={{ border: "1px solid black" }}>{`${item.status}`}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
