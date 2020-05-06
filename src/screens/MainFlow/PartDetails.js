import React, { useState, useCallback } from "react";
import { Text } from "react-native-elements";
import { ScrollView, StyleSheet, View, Linking,TouchableOpacity } from "react-native";
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
    const handlePress = useCallback(async () => {
        await Linking.openURL(`tel:${phoneNumber}`)
    }, []);
    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={styles.container}>
                <Header title='تفاصيل القسم' />
                <TouchableOpacity onPress={()=>navigation.pop()} style={{position:'absolute',marginTop:40,marginLeft:20}}>
                    <Ionicons name="md-arrow-back" size={24} color="#fff" />
                </TouchableOpacity>
                <SearchBar
                    search={search}
                    updateSearch={updateSearch}
                />
                <Text h3 style={{ textAlign: "right", marginRight: 10, color:'#2D2D2D'}}>{Item.title}</Text>
                <View style={styles.Card}>
                    <Text style={{ textAlign: 'left', fontSize: 18 }}>{Item.title}</Text>
                    <Text style={{ textAlign: 'left' }}>{Item.subTitle}</Text>
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
        flex: 1,
        borderRadius: 10,
        shadowColor: '#ffff',
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 7,
        elevation: 1.5,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginTop: 70,
        marginHorizontal: 10,
        marginBottom: 20
    }
});
export default PartDetails;
