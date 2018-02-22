import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import ConnectedCustomerList from '../Containers/ConnectedCustomerList.jsx'
import ConnectedFilters from  '../Containers/ConnectedFilters.jsx'
import ConnectedSortOptions from '../Containers/ConnectedSortOptions'

import {Provider} from 'react-redux';

const App = ({store})=> (
  <Provider store={store}>
      <div className='main'>
        <ConnectedCustomerList  />
        <ConnectedFilters />
        <ConnectedSortOptions />
      </div>
  </Provider>
)

export default App;
