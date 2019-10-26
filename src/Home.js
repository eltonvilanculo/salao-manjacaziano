import React, { useState, Component } from "react";
import Dialog from "react-native-dialog";
import {
  StyleSheet,

  View,
  ProgressBarAndroid,
  ToastAndroid,
  Alert,
  ActivityIndicator,
  
} from "react-native";

export default function Home(props) {
  const [estado, setEstado] = useState(true);
  const [valor, setValor] = useState();
  const [getProgressState,setProgressState]=useState(true);
  let passwordLazaro = 12345;
  let passwordFra = 54321;

  handleOK = () => {
    // o nome que esta aqui foi declarado em app.js
   
    setEstado(false);
    if (valor == passwordLazaro) {
      ToastAndroid.show('Logado como Lazaro!', ToastAndroid.SHORT);
        props.navigation.navigate("dashboard");

      setValor("");
    } else if (valor == passwordFra) {
      ToastAndroid.show('Logado como admin!', ToastAndroid.SHORT);
        props.navigation.navigate("dashboard");

      setValor("");
    } else {
      Alert.alert("Falha ao autenticar");

      setValor("");
    }
  };

  handleActivity= ()=>{

    
  }

  return (
    <View style={styles.container}>
  
      <View>
      <ProgressBarAndroid 
        animating ={getProgressState}
        
          color="#2196F3" 
          />
     
        <Dialog.Container visible={estado}>
          <Dialog.Title>Manjacaziano</Dialog.Title>
          <Dialog.Description>
            Insira o seu PIN Manjacaziano para continuar
          </Dialog.Description>
          <Dialog.Input
            placeholder="PIN"
            keyboardType="numeric"
            secureTextEntry={true}
            onChangeText={valor => {
              setValor(valor);
            }}
          ></Dialog.Input>

          <Dialog.Button label="OK" onPress={handleOK} />
        </Dialog.Container>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
