
import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Modal from "react-native-modal";

interface ModalProps{
    isModalVisible:boolean,
    title:string,
    message:string,
    toggleModal:()=>(void),
}

export const ModalPopUp = ({isModalVisible, title, message, toggleModal} : ModalProps) => {
  return (
    <Modal isVisible={isModalVisible}>
        <View style={styles.popup}>
            <Text style={styles.title}>{title}</Text>
          <Text style={styles.message}>{message}</Text>
          <TouchableOpacity
        style={styles.goBack_button}
        onPress={() => {toggleModal();}}>
        <Text style={styles.button_message}>Go back</Text>
      </TouchableOpacity>
        </View>
      </Modal>
  )
}


const styles = StyleSheet.create({
    popup:{
        borderWidth:5,
        alignSelf:"center",
        width:"90%",
        justifyContent:"center",
        backgroundColor: "rgba(255, 255, 255, 1)",
        alignItems:"center",
        borderRadius:10,
        borderColor:"rgba(0, 191, 255, 0.6)",
      },
    title: {
      color: "rgba(0, 191, 255, 0.6)",
      fontWeight: "bold",
      fontSize: 28,
      fontStyle: "italic",
      marginTop:"5%",
      marginBottom:"10%",
    },
    goBack_button: {
        marginBottom:"5%",
      borderWidth: 5,
      borderColor: "white",
      padding: 10,
      borderRadius: 25,
      marginTop: "5%",
      justifyContent: "center",
      backgroundColor: "rgba(0, 191, 255, 0.6)",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 1.18,
      shadowRadius: 2.0,
      elevation: 1,
    },
    message: {
      color: "rgba(0, 191, 255, 0.6)",
      fontWeight: "bold",
      marginLeft: "3%",
      fontStyle: "italic",
    },
    button_message:{
      color:"white",
      textTransform: "uppercase",
      fontWeight: "bold"
        }
  });
  