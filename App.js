import React,{useState} from 'react';
import { Text,View,StyleSheet,Button} from 'react-native';

const App = () =>{
  const [session, setSession] = useState({number:7, title:'IGT'})

  const onClickHeadling = () => {
    setSession( {number:8,title:'Developer'})
  }
  return(
    <View style ={styles.body}>
      <Text style = {styles.text}>This is Session Number {session.number} and Name {session.title}</Text>
      <Button title='Change Session' color='#000000' onPress={onClickHeadling}></Button>
    </View>
  );
};

const styles = StyleSheet.create(
  {
    body:{
      backgroundColor: '#ee9ca7',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
    },
    text:{
      color:'#000000',
      fontSize: 16,
      fontStyle:'italic',
      margin: 20,
    }
  }
)

export default App;