import React, { useCallback } from "react";
import { Text } from "react-native-elements";
import { View, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { FontAwesome } from '@expo/vector-icons'
const OpenOutDoor = ({ contactType, color1, color2, color3 }) => {
    const phoneNumber = "+" + 972597546505
    const handlePress2 = useCallback(async () => {
        await Linking.openURL(`tel:${phoneNumber}`)
    }, []);
    const handlePress = useCallback(async () => {
        await Linking.openURL('mailto:moamenfnnana1@gmai.com');
    }, []);
    return (
        <View style={{ flex: 1, paddingRight: 15 }}>
            <TouchableOpacity style={styles.container} onPress={handlePress}>
                <Text style={{ marginRight: 5, color: '#3294D6' }}>{contactType}</Text>
                <FontAwesome name="envelope-o" size={22} color={color1} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.container} onPress={handlePress2}>
                <Text style={{ marginRight: 5, color: '#3294D6' }}>{phoneNumber}</Text>
                <FontAwesome name="phone" size={22} color={color2} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.container}>
                <Text style={{ marginRight: 5, color: '#7380A1' }}>Palestine, Gaza Strip</Text>
                <FontAwesome
                    name='map-marker'
                    size={25}
                    color={color3}
                />
            </TouchableOpacity>
        </View>
    )
};
const Contact = ({ contactType, color1, color2, color3 }) => {
    return <OpenOutDoor color1={color1} color2={color2} color3={color3} contactType={contactType} />
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 5,
        justifyContent: 'flex-end'
    }
});
Contact.navigationOptions = {
    title: 'How us',
    tabBarIcon: <FontAwesome name="question-circle-o" size={20} color="#7380A1" />
}
export default Contact;
