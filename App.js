import { StatusBar } from 'expo-status-bar';
import { useState,useEffect } from 'react';
import { StyleSheet,Pressable,Vibration,ScrollView,Modal,ImageBackground,Image,TouchableOpacity,Switch, Text, View, TextInput, Keyboard, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Colors } from './Components/Colors';
//import {styles} from './Components/Styles';
export default function App() {
  const[ip,setIp]=useState();
  const[ipModal,setIpModal]=useState(false);
  const [flag1, setFlag1] = useState(true);
  const [sw1, setsw1] = useState(true);
  const [sw2, setsw2] = useState(true);
  const [sw3, setsw3] = useState(true);
  const [sw4, setsw4] = useState(true);
  const [temp, setTemp] = useState("خطأ");
  const [lock, setLock] = useState(false);
  const [auto, setAuto] = useState(false);
  const [maxTemp, setMaxTemp] = useState(22);
  const [minTemp, setMinTemp] = useState(18);
  const [globalControl, setglobalControl] = useState(false);
  const toggleSwitch1 = () => setLock(setLock => !lock);
  const toggleSwitch2 = () => setAuto(setAuto => !auto);
  const toggleGlobal = () => setglobalControl(setglobalControl => !globalControl);
  const [isConnected, setIsConnected] = useState(false);

if(globalControl){
  alert('قريباً');
  setglobalControl(false);
}

//set the ip
const setTheIp= async()=>{
  setIpModal(false);
  try {
    if(ip !=""){
    Keyboard.dismiss();
    //setIp(ip)
    return await AsyncStorage.setItem('ip', JSON.stringify(ip));
    }
    else{
         alert('enter a valid ip');
         setIpModal(true);
       }
} catch (error) {
  alert(error.message);
}
}
async function checkUserSignedIn(){
  try {
     let value = await AsyncStorage.getItem('ip');
     if (value != null && value != ""){
      setIp(JSON.parse(value));
      setIpModal(false);
    }
     else {
      setIpModal(true);
    }
  } catch (error) {
    alert(error);
  }
}
if(AsyncStorage.getItem('ip') && AsyncStorage.getItem('ip') !=""){
  if(flag1){
  setFlag1(false);
  checkUserSignedIn();
}}
else{
  setIpModal(true);
}
useEffect(()=>{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      }
  };
  xhttp.open("GET", "http://"+ip+"/lock"+lock, true);
  xhttp.send();
},[lock]);


//sync
useEffect(() => {
  const interval = setInterval(()=>{
    if(ip !==undefined){
  var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange =async function() {
        if (this.readyState == 4 && this.status == 200) {
          if(this.responseText.split("#")[0]=="on"){ //switch1
            setsw1(false);
                    }
        else{
          setsw1(true);
          }
          if(this.responseText.split("#")[1]=="on"){ //switch2
            setsw2(false);
                    }
        else{
          setsw2(true);
          }
          if(this.responseText.split("#")[2]=="on"){ //switch3
            setsw3(false);
                    }
        else{
          setsw3(true);
          }
          if(this.responseText.split("#")[3]=="on"){ //switch4
            setsw4(false);
                    }
        else{
          setsw4(true);
          }
          //درجة الحرارة
          setTemp(this.responseText.split("#")[4]);
          setIsConnected(true);
        }
        //*
    };
     xhttp.open("GET", "http://"+ip+"/state1", true);
    // xhttp.onerror=setIsConnected(false);
    // xhttp.onSuccess=setIsConnected(true);
    xhttp.send();
}}
,500);
return () => clearInterval(interval);
}, [ip]);

  function sw1_on(){
    Vibration.vibrate(100);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        }
    };
    xhttp.open("GET", "http://"+ip+"/sw1", true);
    xhttp.send();
  }
  function sw2_on(){
    Vibration.vibrate(100);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        }
    };
    xhttp.open("GET", "http://"+ip+"/sw2", true);
    xhttp.send();
  }
  function sw3_on(){
    Vibration.vibrate(100);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        }
    };
    xhttp.open("GET", "http://"+ip+"/sw3", true);
    xhttp.send();
  }
  function sw4_on(){
    Vibration.vibrate(100);
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        }
    };
    xhttp.open("GET", "http://"+ip+"/sw4", true);
    xhttp.send();
  }

 function turnOffAll(){
  Vibration.vibrate(100);
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
      }
  };
  xhttp.open("GET", "http://"+ip+"/turnOffAll", true);
  xhttp.send();
}
function turnOnAll(){
  Vibration.vibrate(100);
 var xhttp = new XMLHttpRequest();
 xhttp.onreadystatechange = function() {
     if (this.readyState == 4 && this.status == 200) {
     }
 };
 xhttp.open("GET", "http://"+ip+"/turnOnAll", true);
 xhttp.send();
}
  
  function setAutoTemp(){
    setModalVisible(!modalVisible);
    if(auto){
      var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        }
    };
    xhttp.open("GET", "http://"+ip+"/auto_on", true);
    xhttp.send();
    }
    else{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        }
    };
    xhttp.open("GET", "http://"+ip+"/auto_off", true);
    xhttp.send();
    }
  }

  //const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [modalVisible, setModalVisible] = useState(false);
  return (
    <ImageBackground source={require("./assets/bg.jpg")} style={styles.container}>
      <ScrollView style={styles.ScrollView}>
      <View style={styles.header}><Text style={styles.headerText}>Smart Home</Text></View>

      <View style={styles.roomBar}>
      <TouchableOpacity onPress={()=>{turnOffAll()}} style={styles.barBtn}>
        <Text>ايقاف</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>{turnOnAll()}} style={styles.barBtn}>
        <Text>تشغيل</Text>
      </TouchableOpacity>
      <Text style={styles.roomName}>
        غرفة النوم
      </Text>
      </View>

      <View style={{...styles.warn,...{display:isConnected? "none": "flex"}}}><Text style={styles.warnText}>
        لايوجد إتصال بالجهاز
        </Text>
        <TouchableOpacity onPress={()=>{setIsConnected(true)}}><Text style={styles.warnText}>x</Text></TouchableOpacity>
        </View>
      <View style={styles.switchContainer}>
      <TouchableOpacity onPress={()=>{sw1_on()}} style={{...styles.switch,...{backgroundColor:sw1? Colors.primary: Colors.light}}}><Image source={require("./assets/bulp.png")} style={styles.bulpIcon}/><Text style={{...styles.bulpText,...{color:sw1? Colors.light: Colors.primary}}}>المصباح 1</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>{sw2_on()}} style={{...styles.switch,...{backgroundColor:sw2? Colors.primary: Colors.light}}}><Image source={require("./assets/bulp.png")} style={styles.bulpIcon}/><Text style={{...styles.bulpText,...{color:sw2? Colors.light: Colors.primary}}}>المصباح 2</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>{sw3_on()}} style={{...styles.switch,...{backgroundColor:sw3? Colors.primary: Colors.light}}}><Image source={require("./assets/bulp.png")} style={styles.bulpIcon}/><Text style={{...styles.bulpText,...{color:sw3? Colors.light: Colors.primary}}}>المصباح 3</Text></TouchableOpacity>
      <TouchableOpacity  onPress={()=>{sw4_on()}} style={{...styles.switch,...{backgroundColor:sw4? Colors.primary: Colors.light}}} onLongPress={()=>{setModalVisible(true)}}><Image source={require("./assets/fan.png")} style={styles.bulpIcon}/><Text style={{...styles.bulpText,...{color:sw4? Colors.light: Colors.primary}}}>المبردة</Text></TouchableOpacity>
      <View style={styles.tempContainer}>
      <Text style={styles.tempLabel}>درجة الحرارة</Text>
      <Text style={styles.temp}>{temp} C°</Text>
      </View>

      <View style={styles.tempContainer}>
        <View style={styles.controlTypeContainer}>
        <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={globalControl ? Colors.primary : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleGlobal}
        value={globalControl} 
        style={{ transform: [{ scaleX: 1.6 }, { scaleY: 1.5 }] }}
      />
      <Text style={styles.normalText}>
        تحكم خارجي
      </Text>
        </View>
        <View style={styles.controlTypeContainer}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={lock ? Colors.primary : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch1}
        value={lock} 
        style={{ transform: [{ scaleX: 1.6 }, { scaleY: 1.5 }] }}
      />
        <Text style={styles.normalText}>
          قفل التحكم
        </Text>
        </View>
      </View>
      </View>
      <StatusBar style="auto" />


      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }} 
      ><View style={styles.modalBg}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.normalText}>
              المبردة
            </Text>
            <View style={styles.autoContainer}>
              <Text style={styles.normalText}>يدوي</Text>
              <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={auto ? Colors.primary : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch2}
                value={auto} 
                style={{ transform: [{ scaleX: 1.6 }, { scaleY: 1.5 }] , marginHorizontal:15}}
              />
              <Text style={styles.normalText}>تلقائي</Text>
            </View>
            <View style={styles.autoContainer}>
            <TextInput 
                style={styles.tempInput}
                keyboardType = 'numeric'
                onChangeText={text => setMinTemp(text)}
                maxLength={2}
              /> 
            <Text>
                تشغيل عند درجة حرارة
              </Text>
            </View>
            <View style={styles.autoContainer}>
            <TextInput 
                style={styles.tempInput}
                keyboardType = 'numeric'
                onChangeText={text => setMaxTemp(text)}
                maxLength={2}
              /> 
              <Text>
                فصل عند درجة حرارة
              </Text>
            </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {setAutoTemp()}}
            >
              <Text style={styles.textStyle}>
                حفظ التغييرات
              </Text>
            </Pressable>
          </View>
        </View></View>
      </Modal>
     



      <Modal
        animationType="slide"
        transparent={true}
        visible={ipModal}
        onRequestClose={() => {
          setModalVisible(!ipModal);
        }} 
      ><View style={styles.modalBg}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.normalText}>
              أدخل عنوان ip الخاص بالجهاز
            </Text>
            <TextInput
                style={styles.textInput}
                keyboardType = 'numeric'
                defaultValue='192.168.0.'
                onChangeText={text => setIp(text)}></TextInput>
                <Text>
                  
                </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {setTheIp()}}
            >
              <Text style={styles.textStyle}>
               حسناً
              </Text>
            </Pressable>
            </View></View></View>
            </Modal>
      </ScrollView>

            <Pressable onLongPress={()=> {setIpModal(true); Vibration.vibrate(1000)}} style={styles.currentIp}>
            <Text>ip: {ip}</Text>
            
            </Pressable>
         
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  header:{
    width:"100%",
    height:70,
    justifyContent:"center",
    alignItems:"center",
    paddingTop:StatusBar.currentHeight, 
    backgroundColor:Colors.primary,
    color:Colors.light,
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25,
    margin:0
  },
  headerText:{
    color:Colors.light,
    fontWeight:"500",
    paddingTop:20,
    fontSize:Colors.large
  },
  roomBar:{
    backgroundColor:Colors.primary,
    width:"95%",
    flexDirection:"row",
    margin:10,
    marginHorizontal:8,
    paddingHorizontal:10,
    borderRadius:15,
    alignItems:"baseline"
  },
  roomName:{
    color:Colors.light,
    fontSize:Colors.mid,
    position:'absolute',
    right:15,
    alignSelf:"center"
  },
  barBtn:{
    backgroundColor:Colors.secondary,
    paddingVertical:6,
    paddingHorizontal:15,
    margin:4,
    borderRadius:15
  },
  ScrollView:{
    width:"100%",
  },
  warn:{
    backgroundColor:Colors.warning,
    width:"100%",
    flexDirection:"row-reverse",
    justifyContent:"space-between",
    alignItems:"baseline",
    padding:10,
    paddingHorizontal:15,
    display:"none"
  },
  warnText:{   
     fontSize:Colors.mid,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  switchContainer:{
    flex:1,
    width:"100%",
    flexDirection:"row",
    flexWrap:"wrap",
    marginTop:0,
    justifyContent:"center"
  },
  switch:{
    width:"43%",
    height:150,
    backgroundColor:Colors.primary,
    margin:10,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:15
  },
  bulpIcon:{
    width:60,
    height:60
  },
  bulpText:{
    fontWeight:"bold",
    fontSize:Colors.small
  },
  tempContainer:{
    width:"43%",
    height:150,
    backgroundColor:Colors.thirdColor,
    margin:10,
    justifyContent:"center",
    alignItems:"center",
    borderRadius:15
  },
  tempLabel:{
    fontSize:20
  },
  temp:{
    fontSize:23
  },
  //modal
  modalBg:{
    position:"absolute",
    top:0,
    left:0,
    width:'100%',
    height:'100%',
    backgroundColor:'rgba(0, 0, 0, 0.7)',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  autoContainer:{
    flexDirection:"row",
    margin:10,
    alignItems:'center',
    paddingHorizontal:20
  },
  normalText:{
    fontSize:18
  },
  tempInput:{
    width:40,
    height:35,
    borderBottomWidth:2,
    borderBottomColor:Colors.primary,
    fontSize:18,

    textAlign:"center"
  },
  sw1:{
    backgroundColor:"red"
  },
  sm_switch:{
    width:50,
    height:30
  },
  controlTypeContainer:{
    flex:1,
    flexDirection:"row",
    alignItems:"center"
  },
  textInput:{
    fontSize:Colors.large,
    borderBottomWidth:3,
    borderBottomColor:Colors.thirdColor,
    padding:0
  },
  currentIp:{
    padding:8
  }

});
