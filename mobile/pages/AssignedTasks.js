import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

function AssignedTasks({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("AssignedTask")}>
        <View style={styles.firstRow}>
          <Text style={styles.taskName}>Create a turnkey website</Text>
          <Text style={styles.dollarSign}>$</Text>
          <Text style={styles.price}>225.00</Text>
        </View>
        <View style={styles.canBeDoneRemotelyStackColumnRow}>
          <View style={styles.canBeDoneRemotelyStackColumn}>
            <View style={styles.canBeDoneRemotelyStack}>
              <Text style={styles.canBeDoneRemotely}>Can be done remotely</Text>
            </View>
            <Text style={styles.date}>Jan 4, 2023 12:00 ~ ...</Text>
          </View>
          <Text style={styles.name}>Michael D.</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2}>
        <View style={styles.secondRow}>
          <Text style={styles.taskName}>Leetcode Tutor</Text>
          <Text style={styles.dollarSign}>$</Text>
          <Text style={styles.price}>150.00</Text>
        </View>
        <View style={styles.canBeDoneRemotely3ColumnRow}>
          <View style={styles.canBeDoneRemotely3Column}>
            <Text style={styles.canBeDoneRemotely3}>Can be done remotely</Text>
            <Text style={styles.date}>Jan 17, 2023 18:00</Text>
          </View>
          <Text style={styles.name}>Edward T.</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 0,
    borderColor: "#000000",
    backgroundColor: "#FFFFFF"
  },
  button: {
    height: 122,
    backgroundColor: "rgba(255,255,255,1)",
    borderBottomWidth: 1,
    borderWidth: 0,
    borderColor: "rgba(76,76,77,0.36)",
    marginTop: 39, 
  },
  taskName: {
    fontFamily: "archivo-700",
    color: "rgba(76,76,77,1)",
    height: 28,
    width: 307,
    fontSize: 22, 
    fontWeight: '700', 
  },
  dollarSign: {
    fontFamily: "archivo",
    color: "#121212",
    height: 23,
    width: 13,
    fontSize: 22,
    fontWeight: '700',
  },
  price: {
    fontFamily: "archivo",
    color: "rgba(76,76,77,1)",
    height: 28,
    width: 75,
    fontSize: 22,
    fontWeight: '300'
  },
  firstRow: {
    height: 28,
    flexDirection: "row"
  },
  canBeDoneRemotely: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "archivo-600",
    color: "rgba(76,76,77,1)",
    height: 17,
    width: 207,
    fontSize: 16, 
    fontWeight: '600'
  },
  canBeDoneRemotelyStack: {
    width: 207,
    height: 17
  },
  canBeDoneRemotelyStackColumn: {
    width: 207,
    marginBottom: 4
  },
  name: {
    fontFamily: "archivo-regular",
    color: "rgba(76,76,77,1)",
    height: 26,
    width: 108,
    fontSize: 22,
    textAlign: "right",
    marginLeft: 70,
    marginTop: 16,
    fontWeight: '600'
  },
  canBeDoneRemotelyStackColumnRow: {
    height: 42,
    flexDirection: "row",
    marginTop: 41
  },
  button2: {
    height: 122,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(76,76,77,0.36)",
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth:0,
    borderRightWidth: 0,
    marginTop: 1
  },
  secondRow: {
    height: 28,
    flexDirection: "row",
    marginTop: 5
  },
  canBeDoneRemotely3: {
    fontFamily: "Archivo",
    color: "rgba(76,76,77,1)",
    height: 17,
    width: 207,
    fontSize: 16, 
    fontWeight: '600'
  },
  date: {
    fontFamily: "Archivo",
    color: "rgba(76,76,77,1)",
    height: 18,
    width: 207,
    marginTop: 3, 
    fontWeight: '300'
  },
  canBeDoneRemotely3Column: {
    width: 207,
    marginBottom: 4
  },
  canBeDoneRemotely3ColumnRow: {
    height: 42,
    flexDirection: "row",
    marginTop: 41
  }
});

export default AssignedTasks;