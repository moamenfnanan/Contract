import React, { useEffect, useCallback, useContext } from "react";
import { Text } from "react-native-elements";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Ionicons, FontAwesome } from '@expo/vector-icons'
import { toggleFavorite } from '../../store/actions/favor'
import { useSelector, useDispatch } from 'react-redux';
import { Context as FavContext } from '../../Context/favoriteContext'


const Details = ({ navigation }) => {
  const { state, toggle_favorite } = useContext(FavContext);
  const ID = navigation.getParam('_id');

  const Item = state.lessons.find(i => i.id === ID);

  const currentItemIsFavorite = state.fovariteArr.find(item => item.id === ID)

  const add = useCallback(() => { toggle_favorite(ID), [ID] })

  return (
    <ScrollView style={styles.container}>
      <View style={{ height: "20%", width: "100%", backgroundColor: '#7380A1' }}>
        <Text style={{ color: '#fff', fontSize: 22, textAlign: 'center', marginTop: 35, fontFamily: 'cairo-bold' }}>التفاصيل</Text>
        <TouchableOpacity onPress={() => navigation.pop()} style={{ flexDirection: 'row', justifyContent: 'flex-end', marginTop: -25, paddingRight: 10 }}>
          <Text style={{ color: '#fff', paddingRight: 5, fontSize: 18, marginTop: -2, fontFamily: 'cairo-bold' }}>رجوع</Text>
          <Ionicons name="ios-arrow-forward" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={add} style={{ marginTop: 20, alignItems: 'flex-start', marginLeft: 20 }}>
        <FontAwesome
          name={currentItemIsFavorite ? 'heart' : 'heart-o'}
          size={25}
          color="red"
        />
      </TouchableOpacity>
      <Text style={{ textAlign: "center", fontSize: 28, fontFamily: 'cairo-bold' }}>{Item.seasonNum + ': ' + Item.subTitle}</Text>
      <Text style={{ fontSize: 18, paddingRight: 10, color: '#2D2D2D', fontFamily: 'cairo-bold' }}>{Item.seasonNum}</Text>
      <Text style={{ fontSize: 18, paddingRight: 10, color: '#2D2D2D', fontFamily: 'cairo-bold' }}>{Item.subTitle}</Text>
      <Text style={{ fontSize: 16, paddingRight: 10, height: "200%", paddingVertical: 35, color: '#2D2D2D', fontFamily: 'cairo-bold' }}>{Item.content}</Text>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9'
  }
});
export default Details;
