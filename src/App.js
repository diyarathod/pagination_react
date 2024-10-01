import Data from './Data.json'
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  const [CurrentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = CurrentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const record = Data.slice(firstIndex, lastIndex);
  const noPage = Math.ceil(Data.length / recordsPerPage);
  const numbers = [...Array(noPage + 1).keys()].slice(1);

  return (
    <div>
      <nav>
        <h1> <center>Pagination Example</center></h1>
      </nav>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Product Name</th>
          </tr>
        </thead>
        <tbody>
          {record.map((d, i) => (
            <tr key={i}>
              <td>{d.ID}</td>
              <td>{d.Name}</td>
              <td>{d.Email}</td>
              <td>{d.ProductName}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item ">
            <a className="page-link" href='#'
              onClick={prePage}>Previous</a>
          </li>
          {CurrentPage > 2 && (
            <li className="page-item disabled">
              <span className="page-link">...</span>
            </li>
          )}
          {
            numbers.map((n, i) => (
              <li className={`page-item ${CurrentPage === n ? 'active' : ''}`} key={i}>
                <a href="#" className='page-link' onClick={() => { changeCPage(n) }}>{n}</a>
              </li>
            ))
          }

          {CurrentPage < noPage - 1 && (
            <li className="page-item disabled">
              <span className="page-link">...</span>
            </li>
          )}
          <li className="page-item ">
            <a className="page-link" href='#'
              onClick={nextPage}>Next</a>
          </li>

        </ul>
      </nav>
    </div >
  );
  function prePage() {
    if (CurrentPage !== 1) {
      setCurrentPage(CurrentPage - 1);
    }
  }

  function nextPage() {

    if (CurrentPage !== noPage) {
      setCurrentPage(CurrentPage + 1);
    }
  }
  function changeCPage(ID) {
    setCurrentPage(ID);
  }
}

export default App;
