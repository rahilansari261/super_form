const Question = ({ children }) => {
  console.log(children);
  return (
    <div className="rounded border border-gray-300 border-l-4 border-l-indigo-300 m-4 px-4 py-2 ">
      {children}
    </div>
  );
};

export default Question;
