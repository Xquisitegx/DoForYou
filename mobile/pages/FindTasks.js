import { View, Text, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { Svg, Path } from "react-native-svg";

export default function FindTasks({ navigation }) {
  return (
    <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{ height: Dimensions.get("window").height }}>
      <View style={stylesheet.style_Mob_List_Find_tasks_Frame}>
        <View style={stylesheet.style_Mob_Basic}>
          <TouchableOpacity 
            style={stylesheet.style_Group_43}
            onPress={() => navigation.navigate("AssignedTask")}
          >
            <View style={stylesheet.style_Line_3}>
            </View>
            <View style={[stylesheet.style_Create_a_turnkey_website, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
              <Text style={[stylesheet.style_Create_a_turnkey_website, { position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
                Create a turnkey website
              </Text>
            </View>
            <View style={stylesheet.style_Group_41}>
              <View style={[stylesheet.style__, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
                <Text style={[stylesheet.style__, { position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
                  $
                </Text>
              </View>
              <View style={[stylesheet.style_225_00, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
                <Text style={[stylesheet.style_225_00, { position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
                  225.00
                </Text>
              </View>
            </View>
            <View style={[stylesheet.style_Michael_D_, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
              <Text style={[stylesheet.style_Michael_D_, { position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
                Michael D.
              </Text>
            </View>
            <View style={[stylesheet.style_Can_be_done_remotely, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
              <Text style={[stylesheet.style_Can_be_done_remotely, { position: "relative", flexGrow: 1, left: 0, top: 0, height: 30, transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
                Can be done remotely
              </Text>
            </View>
            <View style={stylesheet.style_Group_42}>
              <View style={[stylesheet.style_Jan_4__2023_12_00, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
                <Text style={[stylesheet.style_Jan_4__2023_12_00, { position: "relative", flexGrow: 1, left: 0, top: 0, height: 30, transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
                  Jan 4. 2023  12:00
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <View style={stylesheet.style_Group_44}>
            <View style={stylesheet.style_Line_3_2}>
            </View>
            <View style={[stylesheet.style_Website_Logo_Design, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
              <Text style={[stylesheet.style_Website_Logo_Design, { position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
                Website Logo Design
              </Text>
            </View>
            <View style={stylesheet.style_Group_41_2}>
              <View style={[stylesheet.style___2, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
                <Text style={[stylesheet.style___2, { position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
                  $
                </Text>
              </View>
              <View style={[stylesheet.style_80_00, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
                <Text style={[stylesheet.style_80_00, { position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
                  80.00
                </Text>
              </View>
            </View>
            <View style={[stylesheet.style_Alisha__M, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
              <Text style={[stylesheet.style_Alisha__M, { position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
                Alisha. M
              </Text>
            </View>
            <View style={[stylesheet.style_Can_be_done_remotely_2, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
              <Text style={[stylesheet.style_Can_be_done_remotely_2, { position: "relative", flexGrow: 1, left: 0, top: 0, height: 30, transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
                Can be done remotely
              </Text>
            </View>
            <View style={stylesheet.style_Group_42_2}>
              <View style={[stylesheet.style_Jan_17__2023_18_00, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
                <Text style={[stylesheet.style_Jan_17__2023_18_00, { position: "relative", flexGrow: 1, left: 0, top: 0, height: 30, transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
                  Jan 17, 2023  18:00
                </Text>
              </View>
            </View>
          </View>
          <View style={[stylesheet.style_Tasks, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
            <Text style={[stylesheet.style_Tasks, { position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
              Tasks
            </Text>
          </View>
          <View style={stylesheet.style_X}>
            <Svg style={stylesheet.style_Icon_2} fill={"rgba(0,0,0,0)"}>
              <Path fillRule={"none"} d={"M 0 16.970561981201172 L 0 0"} strokeLinecap={"round"} strokeLinejoin={"miter"} strokeWidth={4} stroke={"rgba(30, 30, 30, 1)"} />
            </Svg>
            <Svg style={stylesheet.style_Icon_3} fill={"rgba(0,0,0,0)"}>
              <Path fillRule={"none"} d={"M 0 16.970561981201172 L 0 0"} strokeLinecap={"round"} strokeLinejoin={"miter"} strokeWidth={4} stroke={"rgba(30, 30, 30, 1)"} />
            </Svg>
          </View>
          <View style={stylesheet.style_search_input}>
            <View style={stylesheet.style_input}>
            </View>
            <View style={stylesheet.style_btn_search}>
            </View>
            <View style={[stylesheet.style_Search, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
              <Text style={[stylesheet.style_Search, { position: "relative", flexGrow: 1, left: 0, top: 0, height: 30, transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
                Search
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const stylesheet = StyleSheet.create({
	style_Mob_List_Find_tasks_Frame: {
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
	style_Mob_Basic: {
		position: "absolute",
		width: 390,
		height: 844,
		borderRadius: 45,
		overflow: "hidden",
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 1)",
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
	style_Group_43: {
		position: "absolute",
		width: 330.000244140625,
		height: 109,
		transform: [
			{translateX: 30},
			{translateY: 204},
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
		top: 109,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	style_Create_a_turnkey_website: {
		position: "absolute",
		width: 235,
		height: 22,
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(75, 76, 76, 1)",
		textAlign: "left",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	},
	style_Group_41: {
		position: "absolute",
		width: 79,
		height: 22,
		transform: [
			{translateX: 250.999755859375},
			{translateY: 0},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	style__: {
		position: "absolute",
		width: 12.830925941467285,
		height: 21.568628311157227,
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(75, 76, 76, 1)",
		textAlign: "right",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	},
	style_225_00: {
		position: "absolute",
		width: 64,
		height: 22,
		left: 15,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(75, 76, 76, 1)",
		textAlign: "left",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	},
	style_Michael_D_: {
		position: "absolute",
		width: 100.303955078125,
		height: 21.568628311157227,
		left: 229.6962890625,
		right: "auto",
		top: 71.43115234375,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(75, 76, 76, 1)",
		textAlign: "right",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	},
	style_Can_be_done_remotely: {
		position: "absolute",
		width: 209,
		height: 17,
		left: 0,
		right: "auto",
		top: 58,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		textDecorationLine: "none",
		fontSize: 16,
		color: "rgba(75, 76, 76, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	style_Group_42: {
		position: "absolute",
		width: 150,
		height: 15,
		transform: [
			{translateX: 0},
			{translateY: 78},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	style_Jan_4__2023_12_00: {
		position: "absolute",
		width: 150,
		height: 15,
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		textDecorationLine: "none",
		fontSize: 16,
		color: "rgba(75, 76, 76, 1)",
		textAlign: "left",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	},
	style_Group_44: {
		position: "absolute",
		width: 330.000244140625,
		height: 109,
		transform: [
			{translateX: 30},
			{translateY: 323},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	style_Line_3_2: {
		position: "absolute",
		width: 330,
		height: 0,
		borderRadius: undefined,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "rgba(217, 217, 217, 1)",
		left: 0,
		right: "auto",
		top: 109,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	style_Website_Logo_Design: {
		position: "absolute",
		width: 209,
		height: 22,
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(75, 76, 76, 1)",
		textAlign: "left",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	},
	style_Group_41_2: {
		position: "absolute",
		width: 68.20654296875,
		height: 22,
		transform: [
			{translateX: 261.79345703125},
			{translateY: 0},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	style___2: {
		position: "absolute",
		width: 12.46540641784668,
		height: 21.568628311157227,
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(75, 76, 76, 1)",
		textAlign: "right",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	},
	style_80_00: {
		position: "absolute",
		width: 52.4616813659668,
		height: 22,
		left: 15.744873046875,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(75, 76, 76, 1)",
		textAlign: "left",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	},
	style_Alisha__M: {
		position: "absolute",
		width: 101,
		height: 22,
		left: 229.6962890625,
		right: "auto",
		top: 71.43115234375,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(75, 76, 76, 1)",
		textAlign: "right",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	},
	style_Can_be_done_remotely_2: {
		position: "absolute",
		width: 209,
		height: 17,
		left: 0,
		right: "auto",
		top: 58,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		textDecorationLine: "none",
		fontSize: 16,
		color: "rgba(75, 76, 76, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	style_Group_42_2: {
		position: "absolute",
		width: 140,
		height: 15,
		transform: [
			{translateX: 0},
			{translateY: 78},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	style_Jan_17__2023_18_00: {
		position: "absolute",
		width: 140,
		height: 15,
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		textDecorationLine: "none",
		fontSize: 15,
		color: "rgba(75, 76, 76, 1)",
		textAlign: "left",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	},
	style_Tasks: {
		position: "absolute",
		width: 70,
		height: "auto",
		left: 160,
		right: "auto",
		top: 64,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		textDecorationLine: "none",
		fontSize: 22,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "center",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	},
	style_X: {
		position: "absolute",
		width: 12,
		height: 12,
		transform: [
			{translateX: 346},
			{translateY: 68},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	style_Icon_2: {
		position: "absolute",
		color: "rgba(0,0,0,0)",
		width: 0,
		height: 16.970561981201172,
		borderRadius: 0,
		left: 12,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "44.99999901942451deg"},
		],
	},
	style_Icon_3: {
		position: "absolute",
		color: "rgba(0,0,0,0)",
		width: 0,
		height: 16.970561981201172,
		borderRadius: 0,
		left: 12,
		right: "auto",
		top: 12,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "44.99999418975172deg"},
		],
	},
	style_search_input: {
		position: "absolute",
		width: 329,
		height: 38,
		transform: [
			{translateX: 31},
			{translateY: 136},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	style_input: {
		position: "absolute",
		width: 329,
		height: 38,
		borderRadius: 25,
		opacity: 1,
		borderWidth: 1,
		borderColor: "rgba(134, 134, 134, 1)",
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(240, 240, 240, 1)",
	},
	style_btn_search: {
		position: "absolute",
		width: 79,
		height: 38,
		borderRadius: 25,
		opacity: 1,
		borderWidth: 1,
		borderColor: "rgba(134, 134, 134, 1)",
		left: 250,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(134, 134, 134, 1)",
	},
	style_Search: {
		position: "absolute",
		width: "auto",
		height: 16.719999313354492,
		left: 255,
		right: 4.4229583740234375,
		top: 11,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		textDecorationLine: "none",
		fontSize: 16,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "center",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	},
});