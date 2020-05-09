import React from "react";
import {
    Text,
    Image
} from "react-native-elements";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'
import Header from '../../component/Header'
import { useSelector } from 'react-redux';
const Favorites = () => {
    const itemRedux = useSelector(state => state.Category.fovariteArr);
    return (
        <View style={styles.container}>
            <Header title="المفضلة" />
            <FlatList
                data={itemRedux}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity style={styles.List}>
                            <View style={styles.contaier1}>
                                <View style={styles.icon}>
                                    <Image source={item.icon} style={{ height: 60, width: 60,marginBottom:5,marginLeft:15 }} />
                                </View>
                                <Text style={{ marginRight:85, fontSize: 16,fontFamily:'cairo-bold' }}>{item.seasonNum +': '+ item.subTitle}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                }}
                keyExtractor={item => item.id}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#F9F9F9'
    },
    List: {
        borderRadius: 10,
        shadowColor: '#ffff',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 7,
        elevation: 1.5,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginTop: 50,
        marginHorizontal: 15,
        marginBottom: 20,
        backgroundColor:'#fff'
    },
    contaier1: {
      height: 160,
    },
    icon: {
        borderColor: '#7380A1',
        marginRight: 40,
        paddingTop: 15,
        paddingLeft: 20,
        marginLeft: 35
      }
});

Favorites.navigationOptions = {
    title: 'Favorites',
    tabBarIcon: <MaterialIcons name="favorite" size={20} color="#7380A1" />
}
export default Favorites;
