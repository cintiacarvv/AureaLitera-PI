import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleLogin() {
    if (email === "admin" && senha === "admin") {
      navigation.navigate("Home");
    } else {
      alert("Email ou senha inválidos");
    }
  }

  return (
    <View style={styles.container}>

      <View style={styles.topBar} />

      <View style={styles.iconContainer}>
        <Ionicons name="book-outline" size={90} color="#AE0000" />
      </View>

      <Text style={styles.title}>Acessar conta</Text>
      <Text style={styles.subtitle}>Acesse sua conta da Livraria</Text>

      <View style={styles.inputContainer}>
        <Ionicons name="mail-outline" size={20} color="#777" />
        <TextInput
          placeholder="Digite seu email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed-outline" size={20} color="#777" />
        <TextInput
          placeholder="Digite sua senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
          style={styles.input}
        />
      </View>

      <View style={styles.linksContainer}>
        <Text style={styles.link}>Esqueci minha senha</Text>
        <Text style={styles.link}>Não tenho conta</Text>
      </View>

      <TouchableOpacity onPress={handleLogin} style={{ width: "70%" }}>
        <LinearGradient
          colors={["#AE0000", "#8E5050"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </LinearGradient>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF6EF",
    alignItems: "center",
    paddingTop: 60,
  },

  topBar: {
    position: "absolute",
    top: 0,
    width: "100%",
    height: 50,
    backgroundColor: "#AE0000",
  },

  iconContainer: {
    marginBottom: 20,
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#555",
    marginBottom: 5,
  },

  subtitle: {
    fontSize: 14,
    color: "#777",
    marginBottom: 30,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#eee",
    width: "85%",
    padding: 12,
    borderRadius: 25,
    marginBottom: 15,
    elevation: 3,
  },

  input: {
    marginLeft: 10,
    flex: 1,
  },

  linksContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "85%",
    marginBottom: 30,
  },

  link: {
    fontSize: 12,
    color: "#777",
  },

  button: {
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    elevation: 5,
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});