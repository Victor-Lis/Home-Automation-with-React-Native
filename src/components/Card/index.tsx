import { Text, TouchableOpacity, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";

import { NodeType } from "../../@types/NodeType";

import { styles } from "./styles";

import { ref, set, remove } from "firebase/database";
import { database } from "../../firebase/firebaseConfig";

export default function Card({ data, handleDelete }: { data: NodeType, handleDelete: () => void }) {
  async function togglePower() {
    const pathRef = ref(database, data.path);
    set(pathRef, data.value == "ON" ? "OFF" : "ON");
  }

  async function deleteCard(){
    const pathRef = ref(database, data.path);
    set(pathRef, "OFF");
    remove(pathRef);
    handleDelete()
  }
  return (
    <TouchableOpacity style={styles.container} onLongPress={() => deleteCard()}>
      <View style={styles.pathContainer}>
        <Text style={styles.pathValue}>/{data.path}</Text>
        <TouchableOpacity onPress={togglePower}>
          <Feather
            name="power"
            size={20}
            color="#fff"
            style={
              data.value == "ON"
                ? [styles.power, { backgroundColor: "rgb(10,170,10)" }]
                : [styles.power, { backgroundColor: "rgb(170,10,10)" }]
            }
          />
        </TouchableOpacity>
      </View>
      <View></View>
    </TouchableOpacity>
  );
}
