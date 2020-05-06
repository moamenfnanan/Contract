import React from "react";
import { Text, Image } from "react-native-elements";
import { View, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons'
import Header from '../../component/Header'
import Contact from '../../component/Contact'
const Call_Us = () => {
    return (
        <View style={styles.container}>
            <Header title="اتصل بنا" />
            <Image
                source={require('../../../assets/Group_3493.png')}
                style={styles.image}
            />
            <Text style={{ fontSize: 18, marginTop: -85, paddingRight: 20, paddingBottom: 10 }}>تواصل معنا</Text>
            <Contact
                contactType="moamenfnnana1@gmail.com"
                color1="#2D2D2D"
                color2="#2D2D2D"
                color3="#2D2D2D"
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F9F9F9'
    },
    image: {
        height: "60%",
        width: "60%",
        resizeMode: 'stretch',
        marginLeft: 80,
        marginTop: 50
    }
});
export default Call_Us;
