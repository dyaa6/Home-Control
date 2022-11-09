import { StyleSheet } from "react-native";
import { Colors } from "./Colors";
import { StatusBar } from 'expo-status-bar';
export default  styles= StyleSheet.create({
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
            }
          
          });