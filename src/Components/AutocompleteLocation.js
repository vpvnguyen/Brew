import Autocomplete from "react-native-autocomplete-input";
import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

class AutocompleteLocation extends React.Component {
  constructor(props) {
    super(props);
    console.log("props", this.props);
    this.state = {
      query: "",
      locations: []
    };
  }

  componentDidMount() {
    console.log("auto", JSON.stringify(this.props.cityLocation));
    this.setState({
      locations: this.props.cityLocation
    });
  }

  checkInput(text) {
    this.setState({ query: text });

    this.state.locations.map(location => {
      if (location.name === text) {
        this.props.navigate('MapScreen', {
          locationName: location.name,
          initialRegion: {
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.3,
            longitudeDelta: 0.3
        }})
      }
    });
  }

  //returns array of the locations that have the same sequence
  findLocation(query) {
    if (query === "") {
      return [];
    }
    if (query.includes("[") || query.includes("]")) {
      return [];
    }
    const letters = /^[a-z]+$i/;
    if (letters.test(query)) {
      return [];
    }

    const locations = this.state.locations;

    const regex = new RegExp(`${query.trim()}`, "i");
    return locations.filter(location => location.name.search(regex) >= 0);
  }

  render() {
    const { query } = this.state;
    //returns array of the locations that have the same sequence
    let locations = this.findLocation(query);
    return (
      <View style={styles.container}>
        <Autocomplete
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="default"
          containerStyle={styles.autocompleteContainer}
          data={locations}
          defaultValue={query}
          onChangeText={text => this.checkInput(text)}
          placeholder="Enter Location"
          renderItem={name => (
            <TouchableOpacity
              onPress={() => {
                this.checkInput(name.item.name);
              }}
            >
              {console.log("name", name)}
              <Text style={styles.itemText}>{name.item.name}</Text>
            </TouchableOpacity>
          )}
        />
        <View style={styles.descriptionContainer}>
          <Text style={styles.infoText}>Enter Location</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5FCFF",
    flex: 1,
    paddingTop: 25
  },
  autocompleteContainer: {
    marginLeft: 10,
    marginRight: 10
  },
  itemText: {
    fontSize: 15,
    margin: 2
  },
  descriptionContainer: {
    // `backgroundColor` needs to be set otherwise the
    // autocomplete input will disappear on text input.
    backgroundColor: "#F5FCFF",
    marginTop: 8
  },
  infoText: {
    textAlign: "center"
  },
  titleText: {
    fontSize: 18,
    fontWeight: "500",
    marginBottom: 10,
    marginTop: 10,
    textAlign: "center"
  },
  directorText: {
    color: "grey",
    fontSize: 12,
    marginBottom: 10,
    textAlign: "center"
  },
  openingText: {
    textAlign: "center"
  }
});

export default AutocompleteLocation;
