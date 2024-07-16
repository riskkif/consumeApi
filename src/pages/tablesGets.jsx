import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";


const TableGets = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    GetData();
  })

  const GetData = () => {
    axios.get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setComments(response.data);
      })
  };

  return (
    <div className="container py-5">
      <table className=" table table-hover table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nama</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment) => (
            <tr key={comment.id}>
              <td>{comment.id}</td>
              <td>{comment.name}</td>
              <td>{comment.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};

export default TableGets;