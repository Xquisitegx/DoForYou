import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

function GotHelped({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ReceivedTask')}>
          <View style={styles.cleaningOfficeRow}>
            <Text style={styles.cleaningOffice}>Cleaning Office</Text>
            <Text style={styles.dollarSign}>$</Text>
            <Text style={styles.price}>80.00</Text>
          </View>
          <View style={styles.taskDetailsColumnRow1}>
            <View style={styles.taskDetailsColumn1}>
              <Text style={styles.taskDetails1}>
                5700 Yonge St, North York
              </Text>
              <Text style={styles.taksDate1}>Aug 24, 2022 12:00 ~ 15:00</Text>
            </View>
            <Text style={styles.bonnieA}>Bonnie A.</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button2}>
        <View style={styles.eradicationOfMoldRow}>
          <Text style={styles.eradicationOfMold}>Eradication of mold</Text>
          <Text style={styles.dollarSign2}>$</Text>
          <Text style={styles.price2}>95.00</Text>
        </View>
        <View style={styles.taskDetailsColumnRow2}>
          <View style={styles.taskDetailsColumn2}>
            <Text style={styles.taskDetails2}>35 Henry St, Toronto</Text>
            <Text style={styles.taksDate2}>Oct 20, 2022 10:00</Text>
          </View>
          <Text style={styles.stanL}>Stan L.</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button3}>
        <View style={styles.gettingCarDetailedRow}>
          <Text style={styles.gettingCarDetailed}>Getting car detailed</Text>
          <Text style={styles.dollarSign3}>$</Text>
          <Text style={styles.price3}>110.00</Text>
        </View>
        <Text style={styles.taskDetails3}>35 Balmoral Ave, Toronto</Text>
        <View style={styles.taskDetailsRow3}>
          <Text style={styles.taskDate3}>Nov 14, 2022 10:00</Text>
          <Text style={styles.minsuK}>Minsu K.</Text>
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
    backgroundColor: "rgba(255,255,255,0.43)",
    borderBottomWidth: 1,
    borderWidth: 0,
    borderColor: "rgba(76,76,77,0.43)"
  },
  cleaningOffice: {
    fontFamily: "archivo-700",
    color: "rgba(76,76,77,1)",
    height: 28,
    width: 307,
    fontSize: 22, 
    fontWeight: '700'
  },
  dollarSign: {
    fontFamily: "archivo-regular",
    color: "#121212",
    height: 23,
    width: 13,
    fontSize: 22,
    marginLeft: 13
  },
  price: {
    fontFamily: "archivo-100",
    color: "rgba(76,76,77,1)",
    height: 28,
    width: 75,
    fontSize: 22
  },
  cleaningOfficeRow: {
    height: 28,
    flexDirection: "row"
  },
  taskDetails1: {
    fontFamily: "archivo-600",
    color: "rgba(76,76,77,1)",
    height: 20,
    width: 207,
    fontSize: 16, 
    fontWeight: '400'
  },
  taksDate1: {
    fontFamily: "archivo-regular",
    color: "rgba(76,76,77,1)",
    height: 18,
    width: 207,
    marginTop: 5, 
    fontWeight: '300'
  },
  taskDetailsColumn1: {
    width: 207,
    marginBottom: 4
  },
  bonnieA: {
    fontFamily: "archivo-regular",
    color: "rgba(76,76,77,1)",
    height: 26,
    width: 108,
    fontSize: 22,
    textAlign: "right",
    marginLeft: 70,
    marginTop: 16, 
    fontWeight: '500'
  },
  taskDetailsColumnRow1: {
    height: 42,
    flexDirection: "row",
    marginTop: 41
  },
  buttonRow: {
    height: 122,
    flexDirection: "row",
    marginTop: 56,
    marginRight: -185
  },
  button2: {
    height: 122,
    backgroundColor: "rgba(255,255,255,0.36)",
    borderWidth: 1,
    borderColor: "rgba(76,76,77,0.36)",
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0, 
    borderRightWidth: 0,
  },
  eradicationOfMold: {
    fontFamily: "archivo-700",
    color: "rgba(76,76,77,1)",
    height: 28,
    width: 307,
    fontSize: 22, 
    fontWeight: '700'
  },
  dollarSign2: {
    fontFamily: "archivo-regular",
    color: "#121212",
    height: 23,
    width: 13,
    fontSize: 22,
    marginLeft: 13
  },
  price2: {
    fontFamily: "archivo-100",
    color: "rgba(76,76,77,1)",
    height: 28,
    width: 75,
    fontSize: 22
  },
  eradicationOfMoldRow: {
    height: 28,
    flexDirection: "row",
    marginTop: 5
  },
  taskDetails2: {
    fontFamily: "archivo-600",
    color: "rgba(76,76,77,1)",
    height: 20,
    width: 207,
    fontSize: 16, 
    fontWeight: '400'
  },
  taksDate2: {
    fontFamily: "archivo-regular",
    color: "rgba(76,76,77,1)",
    height: 18,
    width: 207,
    marginTop: 5, 
    fontWeight: '300'
  },
  taskDetailsColumn2: {
    width: 207,
    marginBottom: 4
  },
  stanL: {
    fontFamily: "archivo-regular",
    color: "rgba(76,76,77,1)",
    height: 26,
    width: 108,
    fontSize: 22,
    textAlign: "right",
    marginLeft: 70,
    marginTop: 16, 
    fontWeight: '500'
  },
  taskDetailsColumnRow2: {
    height: 42,
    flexDirection: "row",
    marginTop: 39
  },
  button3: {
    height: 122,
    backgroundColor: "rgba(255,255,255,0.36)",
    borderWidth: 1,
    borderColor: "rgba(76,76,77,0.36)",
    borderBottomWidth: 1,
    borderTopWidth: 0,
    borderLeftWidth: 0, 
    borderRightWidth: 0,
  },
  gettingCarDetailed: {
    fontFamily: "archivo-700",
    color: "rgba(76,76,77,1)",
    height: 28,
    width: 307,
    fontSize: 22, 
    fontWeight: '700'
  },
  dollarSign3: {
    fontFamily: "archivo-regular",
    color: "#121212",
    height: 23,
    width: 13,
    fontSize: 22,
    marginLeft: 1
  },
  price3: {
    fontFamily: "archivo-100",
    color: "rgba(76,76,77,1)",
    height: 28,
    width: 75,
    fontSize: 22
  },
  gettingCarDetailedRow: {
    height: 28,
    flexDirection: "row",
    marginTop: 6
  },
  taskDetails3: {
    fontFamily: "archivo-600",
    color: "rgba(76,76,77,1)",
    height: 20,
    width: 207,
    fontSize: 16,
    marginTop: 38, 
    fontWeight: '400'
  },
  taskDate3: {
    fontFamily: "archivo-regular",
    color: "rgba(76,76,77,1)",
    height: 18,
    width: 207,
    marginTop: 5, 
    fontWeight: '300'
  },
  minsuK: {
    fontFamily: "archivo-regular",
    color: "rgba(76,76,77,1)",
    height: 26,
    width: 108,
    fontSize: 22,
    textAlign: "right",
    marginLeft: 70,
    fontWeight: '500'
  },
  taskDetailsRow3: {
    height: 26,
    flexDirection: "row"
  }
});

export default GotHelped;