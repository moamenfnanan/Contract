import React,{useState} from "react";
import { Text, Card, Image } from "react-native-elements";
import { View, StyleSheet, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { FontAwesome } from '@expo/vector-icons'
import Header from '../../component/Header'
import * as Font from 'expo-font';
import { AppLoading } from 'expo'
const How_Us = () => {
    
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
            <Header title="من نحن" />
            <Image
                source={require('../../../assets/Group_1.png')}
                style={styles.image}
            />
            <Text style={{ marginVertical: -50, paddingHorizontal: 15 ,fontFamily:'cairo'}}>هو ببساطة نص وهمي لصناعة الطباعة والتنضيد. كان لوريم إيبسوم هو النص الوهمي القياسي للصناعة منذ القرن الخامس عشر ، عندما أخذت طابعة غير معروفة مجموعة من الأنواع وخلطتها لعمل كتاب من نوع العينة. لقد نجا ليس فقط من خمسة قرون ، ولكن أيضًا قفزة في التنضيد الإلكتروني ، وبقي دون تغيير بشكل أساسي. تم تعميمه في الستينيات مع إصدار أوراق التي تحتوي على مقاطع ، ومؤخرًا مع برامج النشر المكتبي مثل بما في ذلك إصدارات</Text>
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
        width: "55%",
        resizeMode: 'stretch',
        marginLeft: 90,
        marginTop: 30
    }
});
export default How_Us;
