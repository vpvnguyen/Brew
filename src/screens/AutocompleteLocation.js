import Autocomplete from "react-native-autocomplete-input";
import React, { Component } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

class AutocompleteLocation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      locations: this.props.cityLocation
    };
  }

  //returns array of the locations that have the same sequence
  findLocation(query) {
    if (query === "") {
      return [];
    }

    const locations = this.state.locations;
    const regex = new RegExp(`${query.trim()}`, "i");
    return locations.filter(location => location.name.search(regex) >= 0);
  }

  render() {
    const { query } = this.state;
    //returns array of the locations that have the same sequence
    const locations = this.findLocation(query);
    const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();

    return (
      <View style={styles.container}>
        <Autocomplete
          autoCapitalize="none"
          autoCorrect={false}
          containerStyle={styles.autocompleteContainer}
          data={
            locations.length === 1 && comp(query, locations[0].name)
              ? []
              : locations
          }
          defaultValue={query}
          onChangeText={text => this.setState({ query: text })}
          placeholder="Enter Location"
          renderItem={name => (
            <TouchableOpacity onPress={() => this.setState({ query: name.item.name })}>
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
