import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [data, setData] = useState();
  const navigate = useNavigate();

  // handle the form submission
  const handleSubmit = async () => {
    // check all the fields are filled
    if (
      !data.problemId ||
      !data.name ||
      !data.desc ||
      !data.input_1 ||
      !data.output_1 ||
      !data.input_2 ||
      !data.output_2 ||
      !data.input_3 ||
      !data.output_3 ||
      !data.input_4 ||
      !data.output_4 ||
      !data.input_5 ||
      !data.output_5 ||
      !data.java_soln ||
      !data.python_soln ||
      !data.c_soln
    ) {
      alert("Please fill all the fields");
      return;
    }

    const {
      problemId,
      name,
      desc,
      difficulty,
      input_1,
      output_1,
      input_2,
      output_2,
      input_3,
      output_3,
      input_4,
      output_4,
      input_5,
      output_5,
      java_soln,
      python_soln,
      c_soln,
    } = data;

    // fetch the api and store the data in the database
    const response = await fetch(
      "https://code-blind-backend.onrender.com/api/problems/createProblem",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          problemId: problemId,
          name: name,
          desc: desc,
          difficulty: difficulty,
          input_1: input_1,
          output_1: output_1,
          input_2: input_2,
          output_2: output_2,
          input_3: input_3,
          output_3: output_3,
          input_4: input_4,
          output_4: output_4,
          input_5: input_5,
          output_5: output_5,
          java_soln: java_soln,
          python_soln: python_soln,
          c_soln: c_soln,
        }),
      }
    );

    const responseData = await response.json();
    navigate("/home");

    alert("Problem Created Successfully");
  };

  return (
    <div>
      <h2 className="text-2xl my-4 font-bold text-gray-900 w-full text-center">
        Create Problem
      </h2>

      <form
        className="w-[80%] m-auto"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
        {/* id input */}

        <div className="relative">
          <input
            id="problemId"
            name="problemId"
            type="text"
            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            placeholder="Problem ID"
            onChange={(e) => setData({ ...data, problemId: e.target.value })}
          />
          <label
            htmlFor="problemId"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            Problem ID
          </label>
        </div>

        {/* name input */}
        <div className="relative">
          <input
            id="name"
            name="name"
            type="text"
            className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            placeholder="Name"
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
          <label
            htmlFor="name"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            Name
          </label>
        </div>

        {/* description textarea */}

        <div className="relative my-6">
          <textarea
            id="desc"
            name="desc"
            className="peer placeholder-transparent h-20 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            placeholder="Description"
            onChange={(e) => setData({ ...data, desc: e.target.value })}
          ></textarea>
          <label
            htmlFor="desc"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            Description
          </label>
        </div>
        {/* dropdown easy and medium */}
        <select
          id="difficulty"
          name="difficulty"
          className="w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
          onChange={(e) => setData({ ...data, difficulty: e.target.value })}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
        </select>
        {/* grid for 5 inputs and 5 outputs */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="relative">
            <input
              id="input_1"
              name="input_1"
              type="text"
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
              placeholder="Input 1"
              onChange={(e) => setData({ ...data, input_1: e.target.value })}
            />
            <label
              htmlFor="input_1"
              className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Input 1
            </label>
          </div>
          <div className="relative">
            <input
              id="output_1"
              name="output_1"
              type="text"
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
              placeholder="Output 1"
              onChange={(e) => setData({ ...data, output_1: e.target.value })}
            />
            <label
              htmlFor="output_1"
              className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Output 1
            </label>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="relative">
            <input
              id="input_2"
              name="input_2"
              type="text"
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
              placeholder="Input 2"
              onChange={(e) => setData({ ...data, input_2: e.target.value })}
            />
            <label
              htmlFor="input_2"
              className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Input 2
            </label>
          </div>
          <div className="relative">
            <input
              id="output_2"
              name="output_2"
              type="text"
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
              placeholder="Output 2"
              onChange={(e) => setData({ ...data, output_2: e.target.value })}
            />
            <label
              htmlFor="output_2"
              className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Output 2
            </label>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="relative">
            <input
              id="input_3"
              name="input_3"
              type="text"
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
              placeholder="Input 3"
              onChange={(e) => setData({ ...data, input_3: e.target.value })}
            />
            <label
              htmlFor="input_3"
              className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Input 3
            </label>
          </div>
          <div className="relative">
            <input
              id="output_3"
              name="output_3"
              type="text"
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
              placeholder="Output 3"
              onChange={(e) => setData({ ...data, output_3: e.target.value })}
            />
            <label
              htmlFor="output_3"
              className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Output 3
            </label>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="relative">
            <input
              id="input_4"
              name="input_4"
              type="text"
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
              placeholder="Input 4"
              onChange={(e) => setData({ ...data, input_4: e.target.value })}
            />
            <label
              htmlFor="input_4"
              className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Input 4
            </label>
          </div>
          <div className="relative">
            <input
              id="output_4"
              name="output_4"
              type="text"
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
              placeholder="Output 4"
              onChange={(e) => setData({ ...data, output_4: e.target.value })}
            />
            <label
              htmlFor="output_4"
              className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Output 4
            </label>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div className="relative">
            <input
              id="input_5"
              name="input_5"
              type="text"
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
              placeholder="Input 5"
              onChange={(e) => setData({ ...data, input_5: e.target.value })}
            />
            <label
              htmlFor="input_5"
              className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Input 5
            </label>
          </div>
          <div className="relative">
            <input
              id="output_5"
              name="output_5"
              type="text"
              className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
              placeholder="Output 5"
              onChange={(e) => setData({ ...data, output_5: e.target.value })}
            />
            <label
              htmlFor="output_5"
              className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
            >
              Output 5
            </label>
          </div>
        </div>

        {/* java code editor */}
        <div className="relative my-6">
          <textarea
            id="code"
            name="code"
            className="peer placeholder-transparent h-40 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            placeholder="Java Code"
            onChange={(e) => setData({ ...data, java_soln: e.target.value })}
          ></textarea>
          <label
            htmlFor="code"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            Java Code
          </label>
        </div>

        {/* Python code editor */}
        <div className="relative my-6">
          <textarea
            id="code"
            name="code"
            className="peer placeholder-transparent h-40 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            placeholder="Python Code"
            onChange={(e) => setData({ ...data, python_soln: e.target.value })}
          ></textarea>
          <label
            htmlFor="code"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            Python Code
          </label>
        </div>

        {/* C Code editor */}

        <div className="relative my-6">
          <textarea
            id="code"
            name="code"
            className="peer placeholder-transparent h-40 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
            placeholder="C Code"
            onChange={(e) => setData({ ...data, c_soln: e.target.value })}
          ></textarea>
          <label
            htmlFor="code"
            className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
          >
            C Code
          </label>
        </div>

        <div className="relative my-10">
          <button className="bg-cyan-500 text-white rounded-md px-2 py-1">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
