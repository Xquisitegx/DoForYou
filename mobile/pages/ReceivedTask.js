import { StyleSheet, View, Text, Image, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Feather";

function ViewGotHelpedTask(props) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.cleaningAndHouseholdRow}>
        <Text style={styles.cleaningAndHousehold}>
          Cleaning and Household help
        </Text>
        <Text style={styles.viewsNum}>67</Text>
        <Text style={styles.views}>views</Text>
      </View>
      <Text style={styles.cleaningOffice}>Cleaning Office</Text>
      <View style={styles.priceRow}>
        <Text style={styles.dollarSign}>$</Text>
        <Text style={styles.price}>80.00</Text>
      </View>
      <Text style={styles.address}>Address</Text>
      <Text style={styles.taskAddress}>5700 Yonge St, North York</Text>
      <View style={styles.rect}></View>
      <Text style={styles.aug2420221200}>Aug 24, 2022 12:00</Text>
      <Text style={styles.start}>Start</Text>
      <Text style={styles.aug2420221500}>Aug 24, 2022 15:00</Text>
      <Text style={styles.end}>End</Text>
      <View style={styles.rect1}></View>
      <Text style={styles.getPaid}>Get paid</Text>
      <Text style={styles.byBankETransfer}>by Bank e-transfer</Text>
      <View style={styles.rect2}></View>
      <Text style={styles.jan1020232360}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec
        turpis sed augue facilisis bibendum. Vivamus vel massa sapien.
      </Text>
      <View style={styles.rect5}></View>
      <Text style={styles.details}>Details</Text>
      <View style={styles.writtenStack}>
        <Text style={styles.written}>Written</Text>
        <Text style={styles.july142022}>July 14, 2022</Text>
      </View>
      <View style={styles.rect4}>
        <Text style={styles.presformerInformation}>Performer Information</Text>
        <View style={styles.imageRow}>
          <Image
            source={require("../assets/img2.jpg")}
            resizeMode="cover"
            style={styles.image}
          ></Image>
          <View style={styles.bonnieAColumn}>
            <Text style={styles.bonnieA}>Bonnie A.</Text>
            <View style={styles.ratingStackRow}>
              <View style={styles.ratingStack}>
                <Text style={styles.rating}>Rating:</Text>
                <Icon name="star" style={styles.icon}></Icon>
              </View>
              <Text style={styles.rate}>4.9</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },
  cleaningAndHousehold: {
    fontFamily: "archivo-regular",
    color: "#121212",
    height: 20,
    width: 257,
    fontSize: 16,
  },
  viewsNum: {
    fontFamily: "archivo-500",
    color: "#121212",
    height: 20,
    width: 24,
    fontSize: 16,
    marginLeft: 60
  },
  views: {
    fontFamily: "archivo-regular",
    color: "rgba(135,135,135,1)",
    height: 20,
    width: 41,
    fontSize: 16,
    textAlign: "right"
  },
  cleaningAndHouseholdRow: {
    height: 20,
    flexDirection: "row",
    marginTop: 41,
    marginLeft: 1,
    marginRight: 8
  },
  cleaningOffice: {
    fontFamily: "archivo-700",
    color: "#121212",
    height: 27,
    width: 322,
    fontSize: 22,
    marginTop: 15,
    marginLeft: 1, 
    fontWeight: '700'
  },
  dollarSign: {
    fontFamily: "archivo-regular",
    color: "#121212",
    height: 28,
    width: 13,
    fontSize: 22, 
    fontWeight: '700'
  },
  price: {
    fontFamily: "archivo-regular",
    color: "rgba(76,76,77,1)",
    height: 28,
    width: 75,
    fontSize: 22
  },
  priceRow: {
    height: 28,
    flexDirection: "row",
    marginTop: 6,
    marginLeft: 1,
    marginRight: 325
  },
  address: {
    fontFamily: "archivo-500",
    color: "#121212",
    height: 21,
    width: 82,
    fontSize: 16,
    marginTop: 42,
    marginLeft: 1, 
    fontWeight: '600'
  },
  taskAddress: {
    fontFamily: "archivo-regular",
    color: "#121212",
    height: 23,
    width: 216,
    fontSize: 16,
    marginTop: 6,
    marginLeft: 1
  },
  rect: {
    width: 423,
    height: 1,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(76,76,77,1)",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    opacity: 0.27,
    marginTop: 10,
    marginLeft: 1
  },
  aug2420221200: {
    fontFamily: "archivo-regular",
    color: "#121212",
    height: 23,
    width: 169,
    fontSize: 16,
    marginTop: 43,
    marginLeft: 1
  },
  start: {
    fontFamily: "archivo-500",
    color: "#121212",
    height: 21,
    width: 82,
    fontSize: 16,
    marginTop: -51,
    marginLeft: 1, 
    fontWeight: '600'
  },
  aug2420221500: {
    fontFamily: "archivo-regular",
    color: "#121212",
    height: 23,
    width: 169,
    fontSize: 16,
    marginTop: 90,
    marginLeft: 1
  },
  end: {
    fontFamily: "archivo-500",
    color: "#121212",
    height: 21,
    width: 82,
    fontSize: 16,
    marginTop: -51,
    marginLeft: 1, 
    fontWeight: '600'
  },
  rect1: {
    width: 423,
    height: 1,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(76,76,77,1)",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    opacity: 0.27,
    marginTop: 38,
    marginLeft: 1
  },
  getPaid: {
    fontFamily: "archivo-500",
    color: "#121212",
    height: 21,
    width: 82,
    fontSize: 16,
    marginTop: 16,
    marginLeft: 1, 
    fontWeight: '600'
  },
  byBankETransfer: {
    fontFamily: "archivo-regular",
    color: "#121212",
    height: 23,
    width: 169,
    fontSize: 16,
    marginTop: 7,
    marginLeft: 1
  },
  rect2: {
    width: 423,
    height: 1,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(76,76,77,1)",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    opacity: 0.27,
    marginTop: 13,
    marginLeft: 1
  },
  jan1020232360: {
    fontFamily: "archivo-regular",
    color: "#121212",
    height: 93,
    width: 386,
    fontSize: 16,
    lineHeight: 27,
    marginTop: 47,
    marginLeft: 1
  },
  rect5: {
    width: 423,
    height: 1,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(76,76,77,1)",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    opacity: 0.27
  },
  details: {
    fontFamily: "archivo-500",
    color: "#121212",
    height: 21,
    width: 82,
    fontSize: 16,
    marginTop: -121,
    marginLeft: 1, 
    fontWeight: '600'
  },
  written: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "archivo-regular",
    color: "rgba(135,135,135,1)",
    height: 20,
    width: 60,
    fontSize: 16,
    textAlign: "left"
  },
  july142022: {
    top: 0,
    left: 58,
    position: "absolute",
    fontFamily: "archivo-500",
    color: "#121212",
    height: 20,
    width: 112,
    fontSize: 16, 
    fontWeight: '600'
  },
  writtenStack: {
    width: 170,
    height: 20,
    marginTop: 116
  },
  rect4: {
    height: 125,
    backgroundColor: "rgba(255,255,255,0.27)",
    borderWidth: 1,
    borderColor: "rgba(76,76,77,0.27)",
    borderRadius: 19,
    marginTop: 11,
    marginLeft: 1
  },
   presformerInformation: {
    fontFamily: "archivo-regular",
    color: "#121212",
    height: 20,
    fontSize: 16,
    marginTop: 9,
    marginLeft: 134, 
    fontWeight: '600'
  },
  image: {
    width: 81,
    height: 88,
    borderRadius: 100,
    marginLeft: -1
  },
  bonnieA: {
    fontFamily: "archivo-500",
    color: "#121212",
    height: 21,
    width: 102,
    fontSize: 18
  },
  rating: {
    top: 0,
    left: 0,
    position: "absolute",
    fontFamily: "archivo-regular",
    color: "#121212",
    height: 23,
    width: 76,
    fontSize: 16
  },
  icon: {
    top: 0,
    left: 56,
    position: "absolute",
    color: "rgba(245,190,96,1)",
    fontSize: 16,
    height: 16,
    width: 16
  },
  ratingStack: {
    width: 76,
    height: 23
  },
  rate: {
    fontFamily: "archivo-700",
    color: "#121212",
    height: 18,
    width: 26,
    fontSize: 16,
    marginLeft: 4,
    fontWeight: '700'
  },
  ratingStackRow: {
    height: 23,
    flexDirection: "row"
  },
  bonnieAColumn: {
    width: 106,
    marginLeft: 33,
    marginTop: 23,
    marginBottom: 21, 
    fontWeight: '700'
  },
  imageRow: {
    height: 88,
    flexDirection: "row",
    marginLeft: 23,
    marginRight: 172
  }
});

export default ViewGotHelpedTask;