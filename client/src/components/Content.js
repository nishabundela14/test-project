import React from 'react';
import Archive from './Archive';
import List from './List';

const Content = ({data,fetchArchiveAPI, classname, label}) => {
  return (
    <>
       <div className="content">
          <div className="left">
            <h1>Interview Requests</h1>
            <h3>There are {data.length} candidates in the list</h3>
          </div>
          <Archive fetchArchiveAPI={fetchArchiveAPI} classname={classname} label={label}/>
          <List data={data} />
        </div>
      </>
  )
}

export default Content
