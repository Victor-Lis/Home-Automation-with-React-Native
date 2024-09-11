import { Modal, Text, TextInput, TouchableOpacity, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";

import { styles } from "./styles";

import { useState } from "react";
import { ref, set } from "firebase/database";
import { database } from "../../firebase/firebaseConfig";

export default function ModalComponent({
  visible,
  toggleVisible,
}: {
  visible: boolean;
  toggleVisible: () => void;
}) {
  const [path, setPath] = useState<string>();

  async function saveData() {
    const pathRef = ref(database, path?.toLowerCase());
    set(pathRef, "OFF")
      .finally(() => { 
        setPath("")
        toggleVisible()
      })
  }

  return (
    <Modal style={styles.container} visible={visible} transparent={true}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.closeButton} onPress={toggleVisible}>
          <Feather name="minimize" size={25} color={"#fff"} />
          <Text style={styles.closeButtonText}>Fechar</Text>
        </TouchableOpacity>
        <TextInput
          style={styles.input}
          onChangeText={(e) => setPath(e)}
          value={path}
        />
        <TouchableOpacity style={styles.saveButton} onPress={saveData}>
          <Feather name="save" size={25} color={"#fff"} />
          <Text style={styles.saveButtonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
