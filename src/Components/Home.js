import React, { useEffect, useState } from "react";
import Auth from "./Auth";
import { Link, useNavigate } from "react-router-dom";
const Home = () => {
  Auth();
  // fetch the data from the api and store it in the state
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  // get data from session storage
  const session = JSON.parse(localStorage.getItem("session"));
  // check if the user is admin or not
  const isAdmin = session.role === "admin" ? true : false;

  // function to fetch the data
  const fetchData = async () => {
    const response = await fetch(
      "https://code-blind-backend.onrender.com/api/problems"
    );
    const data = await response.json();
    setData(data);
  };

  // function to delete
  const deleteProblem = async (id) => {
    // alert the user before deleting
    if (!window.confirm("Are you sure you want to delete this problem?")) {
      return;
    }
    const response = await fetch(
      `https://code-blind-backend.onrender.com/api/problems/deleteProblem`,
      {
        method: "POST",
        body: JSON.stringify({
          problemId: id,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();

    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {/* display heading in center */}

      {/* on right corner add problem button */}
      <div className="text-right mt-4 mr-4">
        {isAdmin ? (
          <button
            onClick={() => navigate("/create")}
            className="px-4 py-2 text-white bg-blue-500 rounded-lg"
          >
            Add Problem
          </button>
        ) : (
          <></>
        )}
      </div>
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold text-gray-900">Problems</h1>
      </div>
      {/* serach bar */}
      <div className="w-[80%] m-auto mt-4">
        <input
          prefix="#"
          type="text"
          placeholder="Search"
          className="w-full p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
          onChange={(e) => {
            const value = e.target.value;
            // if value is number then filter the data based on problemId
            if (!isNaN(value)) {
              const filteredData = data.filter((item) =>
                item.problemId.toLowerCase().includes(value.toLowerCase())
              );
              setData(filteredData);
            }
            // if value is string then filter the data based on name
            else {
              const filteredData = data.filter((item) =>
                item.name.toLowerCase().includes(value.toLowerCase())
              );
              setData(filteredData);
            }
            if (!value) {
              fetchData();
            }
          }}
        />
      </div>

      {/* show a total problem count at right top corner */}
      <div className="w-[90%] text-right mt-2 mr-4">
        <p className="text-sm text-gray-500">Total Problems: {data.length}</p>
      </div>

      <div className="w-[80%] m-auto">
        <ul className="my-4 space-y-3">
          {/* // map the data and display it in the list */}
          {data.map((item) => (
            <li key={item._id}>
              <Link
                className="flex items-center p-3 text-base font-bold text-black-900 rounded-lg bg-gray-100 hover:bg-gray-200 group hover:shadow"
                to={`/problem/${item.problemId}`}
              >
                <p>#{item.problemId}</p>
                <span className="flex-1 ms-3 whitespace-nowrap">
                  {item.name}
                </span>

                {item.difficulty === "medium" ? (
                  <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-yellow-800 bg-yellow-400 rounded">
                    Medium
                  </span>
                ) : (
                  <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-green-800 bg-green-400 rounded">
                    Easy
                  </span>
                )}
              </Link>
              {/* edit and delete button */}
              {isAdmin ? (
                <div className="flex items-center space-x-2">
                  <Link
                    to={`/edit/${item.problemId}`}
                    className="text-blue-500 hover:text-blue-700"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteProblem(item.problemId)}
                    className="text-white hover:text-white bg-red-600 rounded px-2 z-10000"
                  >
                    Delete
                  </button>
                </div>
              ) : (
                <></>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
