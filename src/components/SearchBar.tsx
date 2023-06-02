import React from "react";
import { View, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import Ionicicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

function SearchBar(){
    return (
        <View style={{
            marginTop: 15,
            flexDirection: "row",
        }}>
            <GooglePlacesAutocomplete
                query={{  }}
                placeholder="Search.."
                styles={{
                    textInput: {
                        backgroundColor: "#eee",
                        borderRadius: 20,
                        fontWeight: "700",
                        marginTop: 7,
                    },
                    textInputContainer: {
                        backgroundColor: "#eee",
                        borderRadius: 50,
                        flexDirection: "row",
                        alignItems: "center",
                        marginRight: 10,
                    }
                }}

                renderLeftButton={() => {
                    return (
                        <View style={{
                            marginLeft: 10,
                        }}>
                            <Ionicicons name="location-sharp" size={ 24 } />
                        </View>
                    )
                }}
                
                renderRightButton={ () => {
                    return (
                        <View style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 8,
                            marginRight: 8,
                            padding: 8,
                            backgroundColor: "white",
                            borderRadius: 50,
                        }}>
                            <AntDesign name="clockcircle" size={ 12 }/>
                            <Text>Search</Text>
                        </View>
                    )
                } }
            />
        </View>
    )
}

export default SearchBar;