import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Text, TextInput, Button } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
const SignUp = ({ navigation }) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [style, setStyle] = useState();
  const [texto, setTexto] = useState("");
  const [campo, setCampo] = useState("");
  const [campo2, setCampo2] = useState("");
  const [campo3, setCampo3] = useState("");

  function seguir() {
    if (!name && !text && !password) {
      alert("Preencha os campos acima!!!");
      setStyle(styles.textinhomagico);
    } else if (!name) {
      alert("Preencher esse campo!!");
      setStyle(styles.mensagem);
    } else if (!text) {
      alert("Preencher esse campo!!");
      setStyle(styles.mensagem);
    } else if (!password) {
      alert("Preencher esse campo!!");
      setStyle(styles.mensagem);
    } else if (text && password) {
      alert("Sucesso!!!");
      setStyle(styles.textinhomagico2);
      navigation.navigate("Home");
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.createAccount}>Criar conta</Text>
      <TextInput
        style={styles.textInput}
        label="Nome"
        mode="flat"
        left={<TextInput.Icon icon="account" size={25} color="black" />}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      
      <TextInput
        style={styles.textInput}
        label="E-mail"
        mode="flat"
        keyboardType="email-address"
        left={<TextInput.Icon icon="at" size={25} color="black" />}
        value={text}
        onChangeText={(text) => setText(text)}
      />
      
      <TextInput
        style={styles.textInput}
        label="Senha"
        mode="flat"
        secureTextEntry={showPassword}
        left={<TextInput.Icon icon="lock" size={25} color="black" />}
        right={
          showPassword ? (
            <TextInput.Icon
              icon="eye"
              size={25}
              color="black"
              onPress={() => setShowPassword(!showPassword)}
            />
          ) : (
            <TextInput.Icon
              icon="eye-off"
              size={25}
              color="black"
              onPress={() => setShowPassword(!showPassword)}
            />
          )
        }
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      
      <Button style={styles.createButton} mode="contained" onPress={seguir}>
        Criar
      </Button>
      <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
        <Text>
          Já tem uma conta? <Text style={styles.loginText}>Faça o login</Text>
        </Text>
      </TouchableOpacity>
      <Text style={style}> {texto}</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: "40%",
    alignSelf: "center",
    width: "80%",
  },
  createAccount: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10,
  },
  textInput: {
    marginBottom: 10,
  },
  createButton: {
    padding: 5,
    margin: 20,
    width: "50%",
    alignSelf: "center",
  },
  loginText: {
    fontWeight: "bold",
    color: "#6200ee",
  },
  textinhomagico: {
    marginTop: 60,
    color: "red",
    border: "2 red solid",
    borderRadius: 10,
    padding: 10,
  },
  textinhomagico2: {
    marginTop: 60,
    color: "green",
    border: "2 green solid",
    borderRadius: 10,
    padding: 10,
  },
  mensagem: {
    color: "red",
    border: "2 red solid",
    borderRadius: 10,
  },
});
export default SignUp;
