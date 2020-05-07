import React, { useState } from "react";
import { Text, Image } from "react-native-elements";
import { View, StyleSheet, TouchableOpacity, FlatList, TextInput } from "react-native";
import { FontAwesome } from '@expo/vector-icons'
import Header from '../../component/Header'
import { FakeData } from '../../fakeData/FakeData'
import SearchBar from '../../component/SearchBar'
import * as Font from 'expo-font';
import { AppLoading } from 'expo'
const Parts = ({ navigation }) => {
  const [search, updateSearch] = useState('')

  const [dataLoaded, setDataLoaded] = useState(false);

  const fetchFonts = () => {
    return Font.loadAsync({
      'cairo': require('../../../assets/Cairo-SemiBold.ttf'),
      'cairo-bold': require('../../../assets/Cairo-Regular.ttf'),
      'Cairo-ExtraLight': require('../../../assets/Cairo-ExtraLight.ttf')
    });
  };
  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }
  return (
    <View style={styles.container}>
      <Header title="المقاولات" />
      <SearchBar
        search={search}
        updateSearch={updateSearch}
      />
      <Text style={{ paddingRight: 15,fontSize:22, fontFamily: 'cairo' }} >الأقسام</Text>
      <FlatList
        keyExtractor={(item) => item.id}
        data={FakeData}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.List} onPress={() => {
              navigation.navigate('PartDetailss', { _id: item.id })
            }
            }>
              <View style={styles.contaier1}>
                <Image source={item.icon} style={{ height: 50, width: 50, marginLeft: 45 }} />
                <Text style={{ textAlign: 'center', fontSize: 16, paddingHorizontal: 15, fontFamily: 'cairo' }}>{item.title}</Text>
              </View>
            </TouchableOpacity>
          )
        }}
        numColumns={2}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9'
  },
  InnerContainer: {
    flexDirection: 'row',
    height: 50,
    marginVertical: 15,
    marginHorizontal: 15,
    backgroundColor: '#f0eeee',
    borderRadius: 5,
    alignItems: 'center'
  },
  List: {
    backgroundColor: '#fff',
    flex: 1,
    borderRadius: 10,
    shadowColor: '#ffff',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 7,
    elevation: 1.5,
    padding: 7,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginTop: 15,
    marginLeft: 15,
    marginHorizontal: 10,
    marginBottom: 20,
    height: 159,
    width: 136
  },
  searchBox: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 30,
    alignSelf: 'center',
    marginHorizontal: 15
  },
  contaier1: {
    height: 160,
    paddingVertical: 50
  },
  icon: {
    height: 50,
    width: 50,
    borderRadius: 50,
    borderColor: '#7380A1',
    borderWidth: 1,
    marginRight: 40,
    paddingTop: 15,
    paddingLeft: 14,
    marginLeft: 45
  }
});

Parts.navigationOptions = {
  title: 'Parts',
  tabBarIcon: <FontAwesome name="th-large" size={20} color="#7380A1" />
}
export default Parts;
