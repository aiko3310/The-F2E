import React from 'react';

const taskContext = React.createContext({
  title: '',
  date: '',
  time: '',
  commend: ''
});

export default taskContext;
