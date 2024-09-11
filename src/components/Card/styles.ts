import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: "2.5%",
    paddingVertical: "1.5%",

    width: "90%",

    marginBottom: 15,
    marginHorizontal: "auto",

    backgroundColor: "#000",

    borderRadius: 10,
    borderColor: "#fff",
    borderWidth: 0.5,

    justifyContent: "center",
    alignItems: "flex-start"
  },
  pathContainer: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: "2.5%",
    paddingVertical: "3%",
    borderRadius: 10,
    columnGap: 15,
    justifyContent: "space-between",
    alignItems: "center"
  },
  pathValue: {
    fontSize: 15,
    textAlign: "center",
    color: "rgb(250,225,19)",
    backgroundColor: "#333",
    paddingVertical: 1,
    paddingHorizontal: 7.5,
    borderRadius: 5,
  },
  power: {
    padding: 5,
    backgroundColor: "red",
    borderRadius: 100,
  }
});
