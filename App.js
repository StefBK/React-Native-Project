import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import dummy from './assets/dummy-image-square.jpg';
import * as ImagePicker from 'expo-image-picker';

export default function App() {
  const openImagePicker=async()=>{
    const permission=await ImagePicker.requestMediaLibraryPermissionsAsync();
    console.log(permission);
  }
  return (
    <View style={styles.container}>
      <Image source={dummy} style={{width:300, height:300}}/>
      {/* <Image source={{uri:'https://www.drome.cci.fr/sites/g/files/mwbcuj971/files/2020-02/LOGO-CCI--BASE-LINE-WEB-2019_0.jpg'}} style={{width:300, height:300}}/> */}
      {/* <Image source={require ('./assets/dummy-image-square.jpg')} style={{width:300, height:300}}/>
      <Text style={{color: 'darkblue', fontsize: 18}}>To share a photo, please press the button bellow!</Text> */}
      <TouchableOpacity
        onPress={openImagePicker}
        style={styles.button}>
      <Text style={styles.textWhite}>Pick a photo</Text>  
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button:{
    backgroundColor: 'blue',
    padding: 10
  },
  textWhite:{
    color:'#FFFF',
    margin:0
  }
});
