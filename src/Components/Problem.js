import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// get value from problem/:id and display it using params

const Problem = () => {
  const { id } = useParams();
  const [data, setData] = React.useState({});

  // get data from session storage
  const session = JSON.parse(localStorage.getItem("session"));
  // check if the user is admin or not
  const isAdmin = session.role === "admin" ? true : false;

  // function to fetch the data
  const fetchData = async () => {
    const response = await fetch(
      `http://localhost:1572/api/problems/getProblemByID`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          problemId: id,
        }),
      }
    );
    const data = await response.json();
    setData(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="mt-10 mx-10">
      <h2 className="text-2xl my-1 font-bold text-gray-900 w-full">
        {id} : {data.name}
      </h2>
      {"jne" === "medium" ? (
        <span className="inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium text-yellow-800 bg-yellow-400 rounded">
          Medium
        </span>
      ) : (
        <span className="inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium text-green-800 bg-green-400 rounded">
          Easy
        </span>
      )}
      <div className="flex flex-row space-x-4 mt-4">
        <div className={isAdmin ? "w-1/2" : "w-full"}>
          {/* description of the problem */}
          <p className="my-2 text-gray-700">{data.desc}</p>

          {/* test cases */}
          <h3 className="text-lg font-semibold my-2">Test Cases</h3>
          <div className="my-2">
            {/* forloop 5 times*/}

            <h4 className="text-base font-semibold my-2">Case 1</h4>
            <div className="bg-gray-100 p-3 rounded-lg shadow-md w-[40%]">
              <p className="text-gray-700">Input: {data.input_1}</p>
              <p className="text-gray-700">Output: {data.output_1}</p>
            </div>

            <h4 className="text-base font-semibold my-2">Case 2</h4>
            <div className="bg-gray-100 p-3 rounded-lg shadow-md w-[40%]">
              <p className="text-gray-700">Input: {data.input_2}</p>
              <p className="text-gray-700">Output: {data.output_2}</p>
            </div>

            <h4 className="text-base font-semibold my-2">Case 3</h4>
            <div className="bg-gray-100 p-3 rounded-lg shadow-md w-[40%]">
              <p className="text-gray-700">Input: {data.input_3}</p>
              <p className="text-gray-700">Output: {data.output_3}</p>
            </div>

            <h4 className="text-base font-semibold my-2">Case 4</h4>
            <div className="bg-gray-100 p-3 rounded-lg shadow-md w-[40%]">
              <p className="text-gray-700">Input: {data.input_4}</p>
              <p className="text-gray-700">Output: {data.output_4}</p>
            </div>

            <h4 className="text-base font-semibold my-2">Case 5</h4>
            <div className="bg-gray-100 p-3 rounded-lg shadow-md w-[40%]">
              <p className="text-gray-700">Input: {data.input_5}</p>
              <p className="text-gray-700">Output: {data.output_5}</p>
            </div>
          </div>
        </div>

        {isAdmin && (
          <div className="w-1/2">
            {/* code using java with copy button */}
            <h3 className="text-lg font-semibold my-2">Java</h3>
            <div className="bg-gray-100 p-3 rounded-lg shadow-md">
              <pre>
                {/* // copy button */}
                <button
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-1 px-2 rounded-md float-right"
                  onClick={() => {
                    navigator.clipboard.writeText(data.java_soln);
                  }}
                >
                  Copy
                </button>
                <code className="text-sm text-gray-700">{data.java_soln}</code>
              </pre>
            </div>

            {/* code using python with copy button */}
            <h3 className="text-lg font-semibold my-2">Python</h3>
            <div className="bg-gray-100 p-3 rounded-lg shadow-md">
              <pre>
                {/* // copy button */}
                <button
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-1 px-2 rounded-md float-right"
                  onClick={() => {
                    navigator.clipboard.writeText(data.python_soln);
                  }}
                >
                  Copy
                </button>
                <code className="text-sm text-gray-700">
                  {data.python_soln}
                </code>
              </pre>
            </div>

            {/* code using c with copy button */}
            <h3 className="text-lg font-semibold my-2">C Language</h3>
            <div className="bg-gray-100 p-3 rounded-lg shadow-md">
              <pre>
                {/* // copy button */}
                <button
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-1 px-2 rounded-md float-right"
                  onClick={() => {
                    navigator.clipboard.writeText(data.c_soln);
                  }}
                >
                  Copy
                </button>
                <code className="text-sm text-gray-700">{data.c_soln}</code>
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Problem;
