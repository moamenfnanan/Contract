import React, { useState, useEffect } from "react";
import { Image } from "react-native-elements";
import { StyleSheet, View } from "react-native";
import { Asset } from 'expo-asset';

const Contracting = ({ navigation }) => {
  const [Ready, isReady] = useState(flase)
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Contracting_committee')
    }, 2000);
  }, []);

  async _cacheResourcesAsync() {
    const images = [require('../../../assets/Group_1.png')];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    }); 
    return Promise.all(cacheImages);
  }
  if (!isReady) {
    return (
      <AppLoading
        startAsync={this._cacheResourcesAsync}
        onFinish={isReady = true}
        onError={console.log("something went wrong")}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/Group_1.png')} style={styles.Image} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginTop: 90,
    marginLeft: 130
  },
  Image: {
    height: "60%",
    width: "60%",
    resizeMode: 'stretch'
  }
});
Contracting.navigationOptions = () => {
  return {
    header: null
  };
};
export default Contracting;