import React from "react";
import { Text, Button } from "react-native";

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { navigate } = this.props.navigation;

    return <Button title="to the search Page" onPress={() => {navigate('EnterLocation')}}></Button>;
  }
}

export default HomeScreen;