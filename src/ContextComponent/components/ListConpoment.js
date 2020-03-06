import React, { useContext, Fragment } from 'react';
import MyContextProvider from '../MyProvider';
import MyContext from '../MyProvider';

const ListConpoment = props => {
  const authContext = useContext(MyContext);

  const setContextValue = () => {
    authContext.setValue({ name: 'Rajk' });
  };

  return (
    <div>
      <button onClick={setContextValue}></button>
      <MyContext.Consumer>
        {context => {
          return (
            <p>
              Welcome home
              {context.selectedValueFromList.name}{' '}
              {context.selectedValueFromList.id}
            </p>
          );
        }}
      </MyContext.Consumer>
    </div>
  );
};

export default ListConpoment;
