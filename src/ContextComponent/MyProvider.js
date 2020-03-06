import React from 'react';

const MyContext = React.createContext({
  selectedValueFromList: {},
  setValue: () => {}
});

export default MyContext;

export class MyContextProvider extends React.Component {
  state = {
    users: [
      { name: 'a', id: 1 },
      { name: 'b', id: 2 }
    ],
    user: {}
  };

  setValueToContext = selectedval => {
    this.setState({
      user: selectedval
    });
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          setValue: this.setValueToContext,
          selectedValueFromList: this.state.user
        }}>
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
