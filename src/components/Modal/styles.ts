import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modal: {
    flex: 1,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",

    width: "80%",
    margin: "auto",
    paddingVertical: 10,

    backgroundColor: "rgba(0,0,0, 0.5)",

    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#fff",
  },
  closeButton: {
    marginLeft: "auto",
    marginRight: 10,

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "rgb(200, 50, 50)",

    borderRadius: 3.5,

    paddingVertical: 2,
    paddingHorizontal: 4,
  },
  closeButtonText: {
    color: "#fff",
    marginLeft: 5,
  },
  input: {
    color: "rgb(250,225,19)",
    backgroundColor: "#333",

    marginTop: 15,

    width: "95%",
    padding: 5,

    borderRadius: 5,
  },
  saveButton: {
    marginHorizontal: "auto",

    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: "rgb(50, 150, 50)",

    borderRadius: 3.5,

    paddingVertical: 2,
    paddingHorizontal: 4,

    marginTop: 15,
  },
  saveButtonText: {
    color: "#fff",
    marginLeft: 5,
  },
});
