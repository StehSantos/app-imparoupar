import react, {useState} from "react";
import { View, Text, TextInput,TouchableOpacity, StyleSheet} from 'react-native';

export default function Home(){
    
 let [num,setNum] = useState();
 function imparoupar(){
        let resultado= num % 2;
    if (resultado == 0) 
    {
            alert("Este número é um numero par");
    }
    else 
    {
            alert("Este número é um numero ímpar");
    }
 }
 
 
    return (
    
    <View style={styles.container}>

        <Text style= {styles.titulo}>Descubra se o número é impar ou par </Text>
     
        <TextInput onChangeText={setNum} style= {styles.campo} placeholder= "Coloque aqui o número: "></TextInput>

      <TouchableOpacity style={styles.button} onPress={imparoupar}>
        <Text style={styles.buttonText}> Clique aqui </Text>
         </TouchableOpacity> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

    titulo:{
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom:10,
        alignSelf: 'center'
  },
   campo:{
    backgroundColor: '#1F1E25',
        color:'#FFF',
        fontSize:18,
        marginTop:30,
        borderRadius:7,
        padding:15
   },
    button:{
        backgroundColor: '#10826f',
        padding:15,
        borderRadius:7,
        alignItems: 'center',
        marginTop:10
    },
    buttonText:{
        color: '#064a38',
        fontSize:17,
        fontWeight:'bold'
    }



});