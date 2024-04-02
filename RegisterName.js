import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign,Entypo } from "@expo/vector-icons";
import { ScrollView } from 'react-native-web';

export default function RegisterName() {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity>
          <AntDesign name='left' style={styles.header_icon} size={25}></AntDesign>
        </TouchableOpacity>
        <Text style={styles.text}> Tạo tài khoản</Text>
      </View>

      <Text style={styles.nor}>
        Tên Zalo
      </Text>
      
      <TextInput style={styles.TextInputabove} placeholder='Gồm 2-40 ký tự'/>
      <View
                style={{
                    borderBottomColor: '#4A524E',
                    borderBottomWidth: 1,
                    alignItems: 'center',
                    margin: 10
                }} />
      
      
        <View>
          <Text style={styles.Text_LuuY}>Lưu ý khi đặt tên: </Text>
        </View>

        <View style={[styles.column,{marginTop: 30}]}>
            <View style={styles.row}>
                <Entypo name='dot-single' size={25} style={{marginLeft: 12}}></Entypo>
                <Text style={{fontSize: 14}}>Không vi phạm</Text>
                <Text style={{marginLeft: 4,fontSize: 14, color: '#4BADF3'}}>Quy định đặt tên trên Zalo.</Text>
            </View>
            <View style={styles.row}>
                <Entypo name='dot-single' size={25} style={{marginLeft: 12}}></Entypo>
                <Text style={{fontSize: 14}}>Nên sử dụng tên thật để bạn bè nhận ra bạn.</Text>
                
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
    fontSize: 24

  },
  nor: {
    fontSize: 24,
    paddingLeft: 10,
    marginTop: 10,
    fontWeight: 'bold'
  },
  Text_LuuY:{
    marginLeft: 10,
    marginTop: 20,
    fontSize: 18,
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
    marginTop: 300,
    marginLeft: 330,
  }
});
