import React from "react";

const ExamplPage = ({exampleRequestResult, exampleValue, onChangeValue, onFetchRequest}) => {

  return (
    <>
      <button onClick={onChangeValue}>Event</button>
      <button onClick={onFetchRequest}>Async Event</button>
      <div>Event value: {exampleValue}</div>
      <div>Async event result: {exampleRequestResult}</div>
    </>
  );
};

export default ExamplPage;