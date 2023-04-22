import { View, Text, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from "react-native";

export default function CreatedTasks({ navigation }) {
  return (
    <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
      <View style={stylesheet.style_Mob_Basic}>
        <View style={[stylesheet.style_Task_Created, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
          <Text style={[stylesheet.style_Task_Created, { position: "relative", flexGrow: 1, left: -135, top: -40, height: "auto", transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
            Task Created
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('CreatedTask')}>
          <View style={stylesheet.style_Group_43}>
            <View style={stylesheet.style_Line_3}>
            </View>
            <View style={[stylesheet.style_Cartoon_Drawing_Tutor, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
              <Text style={[stylesheet.style_Cartoon_Drawing_Tutor, { position: "relative", flexGrow: 1, left: 0, top: -30, height: "auto", transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
                Cartoon Drawing Partner
              </Text>
              <Text style={[stylesheet.style_Cartoon_Drawing_Tutor, { position: "relative", flexGrow: 1, left: 15, top: -30, height: "auto", transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
                $450.00
              </Text>
            </View>
            <View style={[stylesheet.style_Can_be_done_remotely, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
              <Text style={[stylesheet.style_Can_be_done_remotely, { position: "relative", flexGrow: 1, left: 0, top: 15, height: "auto", transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
                Can be done remotely
              </Text>
            </View>
            <View style={stylesheet.style_Group_42}>
              <View style={[stylesheet.style_Feb_1__2023_00_00___Feb_28__2023_23_59, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
                <Text style={[stylesheet.style_Feb_1__2023_00_00___Feb_28__2023_23_59, { position: "relative", flexGrow: 1, left: 0, top: 35, transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
                  Feb 1, 2023 00:00  ~ Feb 28, 2023 23:59
                </Text>
              </View>
            </View>
            <View style={stylesheet.style_Group_42}>
              <View style={[stylesheet.style_Feb_1__2023_00_00___Feb_28__2023_23_59, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
                <Text style={[stylesheet.style_Feb_1__2023_00_00___Feb_28__2023_23_59, { position: "relative", flexGrow: 1, left: 0, top: 42, transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
                  _______________________________________
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const stylesheet = StyleSheet.create({
	style_Mob_Basic: {
		position: "relative",
		width: Dimensions.get("window").width,
		height: 844,
		borderRadius: 45,
		overflow: "hidden",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 1)",
		left: 0,
		top: 0,
	},
	style_mob_basic_setting: {
		position: "absolute",
		width: 390,
		height: 39,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	style_basic_setting_bg: {
		position: "absolute",
		width: 390,
		height: 39,
		borderRadius: 0,
		opacity: 1,
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	style_12_00: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 31,
		right: "auto",
		top: 17,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontFamily: "Archivo",
		fontWeight: 700,
		textDecorationLine: "none",
		lineHeight: 100,
		fontSize: 22,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	style_Group_112: {
		position: "absolute",
		width: 21.33333396911621,
		height: 15.687044143676758,
		transform: [
			{translateX: 318},
			{translateY: 18.201904296875},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	style_Group_113: {
		position: "absolute",
		width: 16,
		height: 17.77777862548828,
		transform: [
			{translateX: 290},
			{translateY: 16.22216796875},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	style_Task_Created: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 131,
		right: "auto",
		top: 64,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		textDecorationLine: "none",
		lineHeight: 100,
		fontSize: 22,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "center",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	},
	style_Group_43: {
		position: "absolute",
		width: 330,
		height: 101,
		transform: [
			{translateX: 29},
			{translateY: 136},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	style_Line_3: {
		position: "absolute",
		width: 330,
		height: 0,
		borderRadius: undefined,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "rgba(217, 217, 217, 1)",
		left: 0,
		right: "auto",
		top: 101,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	style_Cartoon_Drawing_Tutor: {
		position: "absolute",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		textDecorationLine: "none",
		lineHeight: 100,
		fontSize: 20,
		color: "rgba(75, 76, 76, 1)",
		textAlign: "left",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	},
	style_Can_be_done_remotely: {
		position: "absolute",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		textDecorationLine: "none",
		lineHeight: 100,
		fontSize: 16,
		color: "rgba(75, 76, 76, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	style_Group_42: {
		position: "absolute",
		backgroundColor: "rgba(0,0,0,0)",
	},
	style_Feb_1__2023_00_00___Feb_28__2023_23_59: {
		position: "absolute",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		textDecorationLine: "none",
		lineHeight: 100,
		fontSize: 16,
		color: "rgba(75, 76, 76, 1)",
		textAlign: "left",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	},
});