import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from "@expo/vector-icons";
import { ScrollView } from 'react-native-web';

export default function Login() {
  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity>
          <AntDesign name='left' style={styles.header_icon} size={25}></AntDesign>
        </TouchableOpacity>
        <Text style={styles.text}> Đăng nhập</Text>
      </View>

      <Text style={styles.nor}>
        Vui lòng nhập số điện thoại và mật khẩu để đăng nhập
      </Text>
      
      <TextInput style={styles.TextInputabove} placeholder='Nhập Gmail'/>
      <View
                style={{
                    borderBottomColor: '#4A524E',
                    borderBottomWidth: 1,
                    alignItems: 'center',
                    margin: 10
                }} />
      
      <View style={styles.TextInputbelow}>
        <TextInput style={styles.TextInput_MatKhau} placeholder='Mật khẩu'/>
        <View style={styles.Flex_End}>
           <Text style={styles.Text_HienThiMatKhau}>HIỆN</Text>
        </View>
      </View>

      <View
                style={{
                    borderBottomColor: '#4A524E',
                    borderBottomWidth: 1,
                    alignItems: 'center',
                    margin: 10
                }} />

      <TouchableOpacity>
        <View>
          <Text style={styles.Text_LayLaiMatKhau}>Lấy lại mật khẩu</Text>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.Button_DangNhap}>
        <Text style={styles.Text_DangNhap}> Đăng nhập</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.bottom}>
        <Text style={styles.textBottom}>Câu hỏi thường gặp</Text>
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
    backgroundColor: '#15A0EE',
    paddingHorizontal: 10,
    paddingTop: 10,
    height: 70,
    alignItems: 'center'
  },
  header_icon: {
    color: 'white',
  },
  flexEndContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: 10
  },
  flexEnd: {
    alignItems: 'flex-end',
  },
  icon: {
    color: '#15A0EE',
  },
  text: {
    fontSize: 24,
    color: 'white',
    paddingLeft: 20
    
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center'
  }, 
  TextInputabove:{
    flexDirection: 'row',
    marginLeft: 10,
    fontWeight: 300,
    paddingTop: 14,
    marginRight: 10,
    width: '80%',
    fontSize: 20,
  

  },
  TextInput_MatKhau:{
    fontWeight: 300,
    width: '85%',
    fontSize: 20,
  },
  Text_HienThiMatKhau:{
    fontWeight: 300,
    fontSize: 16,
  },
  Flex_End:{
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginRight: 10
  }, 
  TextInputbelow:{
    flexDirection: 'row',
    marginLeft: 10,
    marginRight: 10,
    paddingTop: 5,
  },
  Text_LayLaiMatKhau:{
    marginLeft: 10,
    marginTop: 20,
    color: '#4BADF3',
    fontSize: 16,
  },
  Text_DangNhap:{
    color: 'white',
    fontSize: 20,
  },
  Button_DangNhap:{
    backgroundColor: '#0B87E0',
    paddingVertical: 10, // Kích thước dọc của nút
    paddingHorizontal: 20, // Kích thước ngang của nút
    borderRadius: 20, // Độ cong góc của nút,
    width: '60%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  bottom: {
    marginTop: 350,
    alignSelf: 'center'
  },
  textBottom: {
    fontSize: 16,
    color: '#4BADF3',
    borderBottomColor: '#4A524E',
    borderBottomWidth: 1,
  },
  nor: {
    fontSize: 14,
    paddingLeft: 10
  },
});
