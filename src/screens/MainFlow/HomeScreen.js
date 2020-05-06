import React from "react";
import { Text, Image } from "react-native-elements";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import Header from '../../component/Header'
import { Ionicons } from '@expo/vector-icons'
import { FakeData } from '../../fakeData/FakeData'
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Header title="الفهرس" />
      <FlatList
        data={FakeData}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity style={styles.List} onPress={() => {
              navigation.navigate('DetailsScreen', { _id: item.id })
            }
            }>
              <View style={styles.contaier1}>
                <View style={styles.icon}>
                  <Image source={item.icon} style={{ height: 50, width: 50 }} />
                </View>
                <Text style={{ textAlign: 'center', fontSize: 16 }}>{item.seasonNum + ': ' + item.subTitle}</Text>
              </View>
            </TouchableOpacity>
          )
        }}
        keyExtractor={item => item.id}
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
  contaier1: {
    height: 160,
    paddingTop: 25
  },
  icon: {
    borderColor: '#7380A1',
    marginRight: 40,
    paddingTop: 15,
    paddingLeft: 14,
    marginLeft: 35
  }
});

HomeScreen.navigationOptions = {
  header: null,
  tabBarIcon: () => {
    return (
      <Ionicons
        name="ios-restaurant"
        size={25}
        color="#7380A1"
      />
    );
  }
}
export default HomeScreen;