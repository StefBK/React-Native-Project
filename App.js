import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Platform } from 'react-native';
import dummy from './assets/dummy-image-square.jpg';
import * as ImagePicker from 'expo-image-picker';
import * as Sharing from 'expo-sharing';
import { useState } from 'react';

export default function App() {

  const [image,setImage]=useState(null);

  const openSharing=async()=>{
  const canIShare=await Sharing.isAvailableAsync();
  console.log('canIShare : ',canIShare);
  console.log(Platform);
    if (Platform.OS!=='web'){
      await Sharing.shareAsync(image);
  } else{
      alert('You cannot share on your platform!')
    }
  }
  
  const openImagePicker=async()=>{
    const permission=await ImagePicker.requestMediaLibraryPermissionsAsync();
    console.log(permission);
    if(permission.granted===false){
      alert('Permission to access your library is required')
      return;
    }
    const pickerResult=await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
    if(pickerResult.cancelled){
      return;
    }
    setImage(pickerResult.uri);
  }

  if(image!==null){
    return(
      <View style={styles.container}>
      <Image source={{uri:image}} style={{width:300, height:300}}/>
      <TouchableOpacity
        onPress={openSharing}
        style={styles.button}>
      <Text style={styles.textWhite}>Share your photo</Text>  
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=>{setImage(null)}}
        style={styles.button}>
      <Text style={styles.textWhite}>Cancel</Text>  
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
    );
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
