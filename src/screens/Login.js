import React from 'react';
import {Text,View,Image,TextInput} from 'react-native';
import Icon from '@expo/vector-icons/AntDesign';

export default class Login extends React.Component{
    
    render(){
        const {navigate} = this.props.navigation
        return(
            <View style={{backgroundColor:"#fff",height:"100%"}}>
                <Image source={require('../images/ini.png')}
                style={{width:"100%",height:"30%"}}
                />
            <Text>Login</Text>
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
                <Icon name='mail' color="#00716F" size={24}/>
                <TextInput 
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
                <Icon name='mail' color="#00716F" size={24}/>
                <TextInput 
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
           >Already a member</Text>
           </View>
           <Text 
            
            onPress={()=>navigate('Register')}
           style={{
            alignSelf:"center",
            color:"#00716F",
            paddingVertical:30
           }}>New User</Text>
        </View>
        )
    }

}