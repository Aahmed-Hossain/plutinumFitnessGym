import { useState } from "react";
import TestChildOne from "./TestChildOne";

/* eslint-disable react/prop-types */
const TestMother = () => {
  const [age, setAge] = useState("");
  const handleSubmitAge = (event) => {
    event.preventDefault();
    setAge(event.target.age.value);
    event.target.age.value = "";
  };

  return (
    <div>
      <TestChildOne age={age} />
      <form
        className="w-1/2 mx-auto flex flex-col gap-5 justify-center"
        onSubmit={handleSubmitAge}
      >
        <input
          className="border p-3"
          name="age"
          type="text"
          defaultValue={age}
        />
        <button
          className="bg-blue-200 rounded p-3 cursor-pointer"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TestMother;
