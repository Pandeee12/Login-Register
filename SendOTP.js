import React,{ useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign,Feather } from "@expo/vector-icons";
import { ScrollView } from 'react-native-web';

export default function SendOTP() {

  const [seconds, setSeconds] = useState(60);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [seconds]);

  const displayTime = () => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const handleReset = () => {
    setSeconds(60);
  };

  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <TouchableOpacity>
          <AntDesign name='left' style={styles.header_icon} size={25}></AntDesign>
        </TouchableOpacity>
        <Text style={styles.text}> Nhập mã kích hoạt</Text>
      </View>

      <Text style={styles.nor}>
        Vui lòng không chia sẻ mã xác thực để tránh mất tài khoản
      </Text>

      <Feather name='phone-incoming' color='green' size={60} style={{alignSelf:'center', marginTop: 40}}></Feather>
     
      <Text style={{fontWeight: '500',fontSize: 18, alignSelf:'center', marginTop: 40}}>Đang gửi mã đến Gmail:  a@gmail.com</Text>
      <Text style={{fontWeight: '400',fontSize: 18, alignSelf:'center', marginTop: 10}}>Vui lòng kiểm tra để lấy mã</Text>

      <View style={{flexDirection: 'row',alignSelf: 'center',marginTop: 50,justifyContent:'center'}} >
           <TextInput style={styles.TextInput}></TextInput>
           <TextInput style={styles.TextInput}></TextInput>
           <TextInput style={styles.TextInput}></TextInput>
           <TextInput style={styles.TextInput}></TextInput>
           <TextInput style={styles.TextInput}></TextInput>
           <TextInput style={styles.TextInput}></TextInput>

      </View>

      <TouchableOpacity onPress={handleReset}>
        <View style={{flexDirection: 'row',marginTop: 10, alignSelf: 'center'}}>
          <Text style={{fontWeight: '400',fontSize: 18}}>Gửi lại mã</Text>
          <Text style={{fontWeight: '400',fontSize: 18, color: '#4BADF3',marginLeft: 4}}>{displayTime()}</Text>
        </View>
      </TouchableOpacity>




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
    backgroundColor: '#15A0EE',
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
  TextInput:{
    borderBottomColor: '#4A524E',
    borderBottomWidth: 1,
    width:'10%',
    height: 50,
    fontSize: 24,
    alignSelf:'center',
    marginLeft: 10,
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
    marginTop: 180,
    marginLeft: 330,
  }
});
