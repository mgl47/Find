import React from "react";
import {StyleSheet,TouchableOpacity, Text,Image } from "react-native";
import colors from "../config/colors";

function LoggingButton({title, onPress, color, image, textcolor}) {
    return (
    <TouchableOpacity style={[styles.button,{backgroundColor:colors[color]}]} onPress={onPress}>
            <Image style={styles.icon} source={image}></Image>           
            <Text style={[styles.text,{color:colors[textcolor]}]}>{title}</Text>
            
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    button:{
        backgroundColor:colors.blue,
        borderRadius:30,
       // justifyContent:'center',
        alignItems:'center',
        padding: 7,  
        width:'100%', 
        flexDirection:"row",
        paddingHorizontal:0,
       
          
          
     
    },
    text:{
         color:'white', 
         fontSize:16, 
         fontWeight:'500',
        left: 80
    },
    icon:{
        width:35, 
        height:45, 
        resizeMode:"contain",
        alignSelf: "flex-start",
        left:30
    
    }
    
})

export default LoggingButton;