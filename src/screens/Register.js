import React from 'react';
import {Text,View,Image,TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';

export default class Register extends React.Component{
    render(){
       
        return(
            <View style={{backgroundColor:"#fff",height:"100%"}}>
                <Image source={require('../images/ini.png')}
                style={{width:"100%",height:"30%"}}
                />
            <Text>Register</Text>
            <Text 
            style={{
    fontSize:30,

    alignSelf:"center",
    
            }}>Save The World</Text>
            <Text
            style={{
              
                marginHorizontal:55,
                textAlign:"center",
                marginTop:5,
                opacity:0.4
            }}>
            In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the 
            </Text>

            <View style={{
                flexDirection:"row",
                alignItems:"center",
                marginHorizontal:55,
                borderWidth:2,
                marginTop:50,
                paddingHorizontal:10,
                borderColor:"#00716F",
                borderRadius:23,
                paddingVertical:2
            }}>
               
                <TextInput
                   placeholder='Email'
                   placeholderTextColor="#00716F"
                   style={{paddingHorizontal:10}}
                />

            </View>

            <View style={{
                flexDirection:"row",
                alignItems:"center",
                marginHorizontal:55,
                borderWidth:2,
                marginTop:10,
                paddingHorizontal:10,
                borderColor:"#00716F",
                borderRadius:23,
                paddingVertical:2
            }}>
                
                <TextInput
                   secureTextEntry
                   placeholder='Password'
                   placeholderTextColor="#00716F"
                   style={{paddingHorizontal:10}}
                />

            </View>

            <View style={{
                flexDirection:"row",
                alignItems:"center",
                marginHorizontal:55,
                borderWidth:2,
                marginTop:10,
                paddingHorizontal:10,
                borderColor:"#00716F",
                borderRadius:23,
                paddingVertical:2
            }}>
                
                <TextInput
                   secureTextEntry
                   placeholder='Confirm-Password'
                   placeholderTextColor="#00716F"
                   style={{paddingHorizontal:10}}
                />

            </View>

            <View style={{
                marginHorizontal:55,
                alignItems:"center",
                justifyContent:"center",
                marginTop:30,
                backgroundColor:"#00716F",
                paddingVertical:10,
                borderRadius:25
            }}>
           <Text style={{
            color:"white",
           }}
           >Register</Text>
           </View>
           
        </View>
        )
    }

}