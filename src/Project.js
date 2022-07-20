import React from 'react';
import { useSearchParams } from 'react-router-dom';

const Project = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const sessionId = searchParams.get('sessionId');

  return <div>{`sessionId=${sessionId}`}</div>;
};

export default Project;
