import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Feather } from '@expo/vector-icons'
const SearchBar = ({ search, updateSearch }) => {
    return (
        <View>
            <View style={styles.container}>
                <TextInput
                    autoCapitalize='none'
                    autoCorrect={false}
                    // placeholder='search'
                    style={styles.searchBox}
                    value={search}
                    onChangeText={updateSearch}
                />
                <Feather
                    name='search'
                    style={styles.iconStyle}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    searchBox: {
        flex: 1,
        fontSize: 18
    },
    container: {
        flexDirection: 'row',
        height: 50,
        marginVertical: 15,
        marginHorizontal: 15,
        backgroundColor: '#fff',
        borderRadius: 25,
        alignItems: 'center'
    },
    iconStyle: {
        fontSize: 18,
        alignSelf: 'center',
        marginHorizontal: 15,
        color:'#7380A1'
    }
})
export default SearchBar