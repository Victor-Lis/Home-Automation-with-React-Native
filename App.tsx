import { FlatList, StyleSheet, Text, View } from "react-native";

import { useEffect, useState } from "react";

import { ref, get, onValue } from "firebase/database";

import { database } from "./src/firebase/firebaseConfig";
import { NodeType } from "./src/@types/NodeType";

import Card from "./src/components/Card";
import { styles } from "./styles";
import ButtonCreate from "./src/components/ButtonCreate";
import ModalComponent from "./src/components/Modal";

export default function App() {
  const [visible, setVisible] = useState<boolean>(false);
  const [data, setData] = useState<NodeType[]>([]);

  useEffect(() => {
    const dbRef = ref(database, "/");

    const unsubscribe = onValue(dbRef, (snapshot) => {
      let val = snapshot.val();
      if (val) {
        let paths = Object.keys(val);
        let data = Object.values(val);
        let finalData: NodeType[] = [];
        paths.map((path, i) => {
          finalData.push({
            path,
            value: data[i] as "ON" | "OFF",
          });
        });
        setData(finalData);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <View style={styles.container}>
      <ModalComponent
        visible={visible}
        toggleVisible={() => setVisible(!visible)}
      />
      <FlatList
        style={styles.flatList}
        data={data}
        keyExtractor={(data) => data?.path}
        renderItem={({ item }) => (
          <Card
            data={item}
            handleDelete={() => setData(data.filter((d) => d.path != item.path))}
          />
        )}
      />
      <ButtonCreate toggleVisible={() => setVisible(!visible)} />
    </View>
  );
}
