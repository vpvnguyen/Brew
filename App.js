import React from "react";
import AppNavigator from "./Navigator";
import SplashScreen from 'react-native-splash-screen';


class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return <AppNavigator />;
  }
}

export default App;
