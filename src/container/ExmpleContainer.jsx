import React, { useCallback, useEffect } from "react";
import { DROP_EXAMPLE_ACTION, EXAMPLE_ACTION, EXAMPLE_ACTION_ASYNC_REQUEST } from "../action/example.action";
import ExamplPage from "../page/ExamplPage";
import { useDispatch, useSelector } from 'react-redux';

const ExampleContainer = () => {
  const dispatch = useDispatch();
  const exampleState = useSelector(({ example }) => example);
  const exampleRequestResult = exampleState.exampleRequest.result;
  const exampleValue = exampleState.exampleValue;

  const handleChangeValue = useCallback(() => {
    dispatch(EXAMPLE_ACTION());
  }, [dispatch]);

  const handleFetchRequest = useCallback(() => {
    dispatch(EXAMPLE_ACTION_ASYNC_REQUEST());
  }, [dispatch]);

  useEffect(() => {
    if (exampleValue > 5) {
      dispatch(DROP_EXAMPLE_ACTION());
    }
  }, [exampleValue, dispatch]);

  return (
    <ExamplPage exampleRequestResult={exampleRequestResult}
                exampleValue={exampleValue}
                onChangeValue={handleChangeValue}
                onFetchRequest={handleFetchRequest}
    />
  );
};

export default ExampleContainer;