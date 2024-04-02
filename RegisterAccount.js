import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign,Entypo } from "@expo/vector-icons";
import { ScrollView } from 'react-native-web';

export default function RegisterAccount() {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity>
          <AntDesign name='left' style={styles.header_icon} size={25}></AntDesign>
        </TouchableOpacity>
        <Text style={styles.text}> Tạo tài khoản</Text>
      </View>

      <Text style={styles.nor}>
        Nhập Gmail của bạn để tạo tài khoản mới
      </Text>
      
     
      <TextInput style={styles.TextInputabove} placeholder='a@gmail.com'/>
      
        <View style={[styles.column,{marginTop: 80}]}>
            <View style={styles.row}>
                <TouchableOpacity>
                  <AntDesign name='checksquareo' size={25} style={{marginLeft: 12}}></AntDesign>
                </TouchableOpacity>
                <Text style={{fontSize: 14}}>Tôi đồng ý với các</Text>
                <Text style={{marginLeft: 4,fontSize: 14, color: '#4BADF3'}}>điều khoản sử dụng Zalo.</Text>
            </View>
            <View style={styles.row}>
                <TouchableOpacity>
                  <AntDesign name='checksquareo' size={25} style={{marginLeft: 12}}></AntDesign>
                </TouchableOpacity>
                <Text style={{fontSize: 14}}>Tôi đồng ý với</Text>
                <Text style={{marginLeft: 4,fontSize: 14, color: '#4BADF3'}}>điều khoản mạng xã hội của Zalo.</Text>
            </View>
        </View>

        <TouchableOpacity style={styles.bottom}>
         <AntDesign name='arrowright' color='white' size={25}></AntDesign>
        </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    backgroundImage: 'linear-gradient(90deg, #006AF5 30%, #5ac8fa 100%)',
    paddingHorizontal: 10,
    paddingTop: 10,
    height: 70,
    alignItems: 'center'
  },
  header_icon: {
    color: 'white',
  },
  text: {
    fontSize: 24,
    color: 'white',
    paddingLeft: 20
    
  },
  TextInputabove:{
    flexDirection: 'row',
    marginLeft: 10,
    fontWeight: '300',
    paddingTop: 14,
    marginRight: 10,
    width: '90%',
    fontSize: 24,
    borderBottomColor: '#4A524E',
    borderBottomWidth: 1,

  },
  nor: {
    fontSize: 14,
    paddingLeft: 10,
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  column:{
    flexDirection: 'column',
  },
  bottom: {
    backgroundColor: '#15A0EE', 
    borderRadius: 20, 
    width: 40, 
    height: 40,
    justifyContent: 'center', 
    alignItems: 'center',
    marginTop: 320,
    marginLeft: 330,
  }
});
