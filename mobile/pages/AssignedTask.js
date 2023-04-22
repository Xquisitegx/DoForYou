import { StyleSheet, View, Text, Image, ScrollView  } from "react-native";
import Icon from "react-native-vector-icons/Feather";

function ViewAssignedTask(props) {
  return (
    <ScrollView  style={styles.container}>
      <View style={styles.softwareDevelopmentRow}>
        <Text style={styles.softwareDevelopment}>Software Development</Text>
        <Text style={styles.loremIpsum}>32</Text>
        <Text style={styles.views}>views</Text>
      </View>
      <Text style={styles.loremIpsum2}>Create a turnkey website</Text>
      <View style={styles.loremIpsum3Row}>
        <Text style={styles.loremIpsum3}>$</Text>
        <Text style={styles.loremIpsum4}>225.00</Text>
      </View>
      <Text style={styles.address}>Address</Text>
      <Text style={styles.canBeDoneRemotely}>Can be done remotely</Text>
      <View style={styles.rect}></View>
      <Text style={styles.jan420231200}>Jan 4. 2023 12:00</Text>
      <Text style={styles.start}>Start</Text>
      <Text style={styles.jan1020232359}>Jan 10. 2023 23:59</Text>
      <Text style={styles.end}>End</Text>
      <View style={styles.rect1}></View>
      <Text style={styles.getPaid}>Get paid</Text>
      <Text style={styles.byBankETransfer}>by Bank e-transfer</Text>
      <View style={styles.rect2}></View>
      <View style={styles.jan1020232360Stack}>
        <Text style={styles.jan1020232360}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec
          turpis sed augue facilisis bibendum. Vivamus vel massa sapien.
        </Text>
        <View style={styles.rect5}></View>
      </View>
      <Text style={styles.details}>Details</Text>
      <View style={styles.writtenStack}>
        <Text style={styles.written}>Written</Text>
        <Text style={styles.dec142022}>Dec 14, 2022</Text>
      </View>
      <View style={styles.rect4}>
        <View style={styles.imageRow}>
          <Image
            source={require("../assets/img1.jpg")}
            resizeMode="cover"
            style={styles.image}
          ></Image>
          <View style={styles.customerInformationColumn}>
            <Text style={styles.customerInformation}>Customer information</Text>
            <Text style={styles.michaelD}>Michael D.</Text>
            <View style={styles.reviewsStackRow}>
              <View style={styles.reviewsStack}>
                <Text style={styles.reviews}>Reviews:</Text>
                <Icon name="thumbs-up" style={styles.icon}></Icon>
              </View>
              <Text style={styles.reviews1}>21</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: "#FFFFFF"
  },
  softwareDevelopment: {
    fontFamily: "archivo-regular",
    color: "#121212",
    height: 20,
    width: 207,
    fontSize: 16
  },
  loremIpsum: {
    fontFamily: "archivo-500",
    color: "#121212",
    height: 20,
    width: 24,
    fontSize: 16,
    marginLeft: 110
  },
  views: {
    fontFamily: "archivo-regular",
    color: "rgba(135,135,135,1)",
    height: 20,
    width: 41,
    fontSize: 16,
    textAlign: "right"
  },
  softwareDevelopmentRow: {
    height: 20,
    flexDirection: "row",
    marginTop: 41,
    marginLeft: 1,
    marginRight: 8
  },
  loremIpsum2: {
    fontFamily: "archivo-700",
    color: "#121212",
    height: 27,
    width: 322,
    fontSize: 22,
    marginTop: 15,
    marginLeft: 1
  },
  loremIpsum3: {
    fontFamily: "archivo-regular",
    color: "#121212",
    height: 23,
    width: 13,
    fontSize: 22
  },
  loremIpsum4: {
    fontFamily: "archivo-regular",
    color: "rgba(76,76,77,1)",
    height: 28,
    width: 75,
    fontSize: 22
  },
  loremIpsum3Row: {
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
    marginLeft: 1
  },
  canBeDoneRemotely: {
    fontFamily: "archivo-regular",
    color: "#121212",
    height: 23,
    width: 169,
    fontSize: 16,
    marginTop: 6,
    marginLeft: 1
  },
  rect: {
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
  jan420231200: {
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
    marginLeft: 1
  },
  jan1020232359: {
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
    marginLeft: 1
  },
  rect1: {
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
    marginLeft: 1
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
    top: 0,
    left: 1,
    position: "absolute",
    fontFamily: "archivo-regular",
    color: "#121212",
    height: 93,
    width: 386,
    fontSize: 16,
    lineHeight: 27
  },
  rect5: {
    top: 92,
    left: 0,
    width: 423,
    height: 1,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(76,76,77,1)",
    borderTopWidth: 0,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    opacity: 0.27
  },
  jan1020232360Stack: {
    width: 423,
    height: 93,
    marginTop: 48
  },
  details: {
    fontFamily: "archivo-500",
    color: "#121212",
    height: 21,
    width: 82,
    fontSize: 16,
    marginTop: -121,
    marginLeft: 1
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
  dec142022: {
    top: 0,
    left: 58,
    position: "absolute",
    fontFamily: "archivo-500",
    color: "#121212",
    height: 20,
    width: 112,
    fontSize: 16
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
  image: {
    width: 81,
    height: 88,
    borderRadius: 100,
    marginLeft: -1,
    marginTop: 15
  },
  customerInformation: {
    fontFamily: "archivo-regular",
    color: "#121212",
    height: 20,
    width: 169,
    fontSize: 16
  },
  michaelD: {
    fontFamily: "archivo-500",
    color: "#121212",
    height: 21,
    width: 102,
    fontSize: 18,
    marginTop: 18,
    marginLeft: 14
  },
  reviews: {
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
    left: 71,
    position: "absolute",
    color: "rgba(0,0,0,1)",
    fontSize: 18,
    height: 18,
    width: 18
  },
  reviewsStack: {
    width: 89,
    height: 23
  },
  reviews1: {
    fontFamily: "archivo-regular",
    color: "#121212",
    height: 23,
    width: 26,
    fontSize: 16,
    marginLeft: 6
  },
  reviewsStackRow: {
    height: 23,
    flexDirection: "row",
    marginLeft: 14,
    marginRight: 34
  },
  customerInformationColumn: {
    width: 169,
    marginLeft: 19,
    marginBottom: 21
  },
  imageRow: {
    height: 103,
    flexDirection: "row",
    marginTop: 5,
    marginLeft: 23,
    marginRight: 123
  }
});

export default ViewAssignedTask;