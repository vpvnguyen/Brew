import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Picker,
  StatusBar
} from "react-native";
import allCities from "../api/allCities";
import AutocompleteLocation from "../Components/AutocompleteLocation";
import { KeyboardAvoidingView } from "react-native";

// Hides unimportant warning
import { YellowBox } from "react-native";
YellowBox.ignoreWarnings(["RCTRootView cancelTouches"]);

class EnterLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cityLocations: [],
      pickerLocation: "",
      userLocation: undefined,
      hasCities: false
    };
  }

  static navigationOptions = {
    title: "Brew",
    headerStyle: {
      backgroundColor: "#2C1654"
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
      color: "#fff"
    }
  };

  getAllCities = async () => {
    const response = await allCities.get("/");
    // picker location sets initial picker selector to the first city in the data set for display on button
    this.setState({
      cityLocations: response.data,
      pickerLocation: response.data[0],
      hasCities: true
    });
    console.log("City Locations", this.state.cityLocations);
  };

  componentDidMount() {
    this.getAllCities();
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.wrapperView}>
        <StatusBar barStyle="light-content" />
          {this.state.hasCities ? (
            <>
              <AutocompleteLocation
                navigate={navigate}
                cityLocation={this.state.cityLocations}
              />
            </>
          ) : (
            console.log("not mounted")
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapperView: {
    flex: 1
  }
});

export default EnterLocation;
