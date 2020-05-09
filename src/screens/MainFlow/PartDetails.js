import React, { useState, useCallback } from "react";
import { Text } from "react-native-elements";
import { ScrollView, StyleSheet, View, Linking, TouchableOpacity } from "react-native";
import { FakeData } from '../../fakeData/FakeData'
import SearchBar from '../../component/SearchBar'
import Header from '../../component/Header'
import Contact from '../../component/Contact'
import { Ionicons } from '@expo/vector-icons';
const PartDetails = ({ navigation }) => {
    const ID = navigation.getParam('_id');
    const Item = FakeData.find(i => i.id === ID);
    const [search, updateSearch] = useState('')
    const phoneNumber = "+" + 972597546505

    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={styles.container}>
                <Header title='تفاصيل القسم' />
                <TouchableOpacity onPress={() => navigation.pop()} style={{ position: 'absolute', marginTop: 40, marginLeft: 20 }}>
                    <Ionicons name="md-arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <SearchBar
                    search={search}
                    updateSearch={updateSearch}
                />
                <Text style={{ textAlign: "right", marginRight: 10, color: '#2D2D2D',fontFamily:'cairo-bold' }}>{Item.title}</Text>
                <View style={styles.Card}>
                    <Text style={{ textAlign: 'left', fontSize: 18,fontFamily:'cairo-bold'  }}>{Item.title}</Text>
                    <Text style={{ textAlign: 'left',fontFamily:'cairo-bold'  }}>{Item.subTitle}</Text>
                    <Contact
                        contactType="moamenfnnana1@gmai.com"
                        IconName="envelope-o"
                        Num={phoneNumber}
                    />
                </View>
            </ScrollView>
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
    Card: {
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
        backgroundColor:'#fff',
        paddingRight:15
    }
});
export default PartDetails;
