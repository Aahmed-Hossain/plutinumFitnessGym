/* eslint-disable react/prop-types */

const ChildTestOne = ({ age }) => {
  return (
    <div className="text-blue-500 my-8 text-center border w-1/2 mx-auto p-3">
      <h1 className="text-lg font-bold">
        <span className="capitalize text-black">{age}</span> welcome from child
        one
      </h1>
    </div>
  );
};

export default ChildTestOne;
