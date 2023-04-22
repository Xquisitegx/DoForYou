import { View, Text, Image, ScrollView, StyleSheet, Dimensions, TextInput, TouchableOpacity } from "react-native";
import { Svg, Path } from "react-native-svg";

export default function MainAfterLogin({ navigation }) {
  return (
    <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{ height: Dimensions.get("window").height }}>
      <View style={stylesheet.style_Mob_Main_after_login_Frame}>
        <View style={stylesheet.style_Mob_Main}>
          <View style={[stylesheet.style_Logo, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
            <Text style={[stylesheet.style_Logo, { position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
              DoForYou
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.openDrawer() }>
            <Component_style_Outline_Interface_Menu
              variant1_left={24}
              variant1_right={"auto"}
              variant1_top={56}
              variant1_bottom={"auto"}
              variant1_transform={[{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" },]}
            />
          </TouchableOpacity>
          <View style={stylesheet.style_Rectangle_54}>
          </View>
          <View style={[stylesheet.style_For_example__pet_sitting, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
            <TextInput 
              style={[stylesheet.style_For_example__pet_sitting, { position: "relative", flexGrow: 1, left: 0, top: -3, height: "auto", transform: [{ translateX: 0 }, { translateY: 0 }], }]}
              placeholder="For example, pet sitting"
            >
            </TextInput>
          </View>
          <Component_style_Outline_Interface_Search
            variant1_width={29}
            variant1_height={29}
            variant1_left={35}
            variant1_right={"auto"}
            variant1_top={237}
            variant1_bottom={"auto"}
            variant1_transform={[{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" },]}
          />
          <View style={[stylesheet.style_Are_you_looking_for_someone, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
            <Text style={[stylesheet.style_Are_you_looking_for_someone, { position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
              Are you looking for someone
            </Text>
          </View>
          <View style={[stylesheet.style_who_can_help_you_, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
            <Text style={[stylesheet.style_who_can_help_you_, { position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
              who can help you?
            </Text>
          </View>
        </View>
        <Image style={stylesheet.style__sub_2} source={{ uri: imageUrlstyle__sub_2 }}>
        </Image>
      </View>
    </ScrollView>
  )
}
const Component_style_Outline_Interface_Menu = ({
  variant1_left,
  variant1_right,
  variant1_top,
  variant1_bottom,
  variant1_transform,
}) => {
  return (
    <View style={[
      component_style_Outline_Interface_Menu_stylesheet.style_Outline_Interface_Menu,
      {
        left: variant1_left,
        right: variant1_right,
        top: variant1_top,
        bottom: variant1_bottom,
        transform: variant1_transform,
      },
    ]}>
      <Svg style={component_style_Outline_Interface_Menu_stylesheet.style_Icon_2} fill={"rgba(0, 0, 0, 1)"}>
        <Path fillRule={"evenodd"} d={"M 23.249998092651367 8.625 C 23.249998092651367 8.003679648041725 22.74631845493967 7.5 22.124998115724132 7.5 L 1.1249999769272327 7.5 C 0.5036787883455249 7.5 0 8.003679648041725 0 8.625 C 0 9.246320351958275 0.5036787883455249 9.75 1.1249999769272327 9.75 L 22.124998115724132 9.75 C 22.74631845493967 9.75 23.249998092651367 9.246320351958275 23.249998092651367 8.625 Z"} strokeLinecap={"round"} strokeLinejoin={"miter"} />
        <Path fillRule={"evenodd"} d={"M 23.249998092651367 1.125 C 23.249998092651367 0.5036796480417252 22.74631845493967 0 22.124998115724132 0 L 1.1249999769272327 0 C 0.5036787883455249 0 0 0.5036796480417252 0 1.125 C 0 1.7463203519582748 0.5036787883455249 2.25 1.1249999769272327 2.25 L 22.124998115724132 2.25 C 22.74631845493967 2.25 23.249998092651367 1.7463203519582748 23.249998092651367 1.125 Z"} strokeLinecap={"round"} strokeLinejoin={"miter"} />
        <Path fillRule={"evenodd"} d={"M 23.249998092651367 16.125 C 23.249998092651367 15.503679648041725 22.74631845493967 15 22.124998115724132 15 L 1.1249999769272327 15 C 0.5036787883455249 15 0 15.503679648041725 0 16.125 C 0 16.746320351958275 0.5036787883455249 17.25 1.1249999769272327 17.25 L 22.124998115724132 17.25 C 22.74631845493967 17.25 23.249998092651367 16.746320351958275 23.249998092651367 16.125 Z"} strokeLinecap={"round"} strokeLinejoin={"miter"} />
      </Svg>
    </View>
  )
}
const Component_style_Outline_Interface_Search = ({
  variant1_width,
  variant1_height,
  variant1_left,
  variant1_right,
  variant1_top,
  variant1_bottom,
  variant1_transform,
}) => {
  return (
    <View style={[
      component_style_Outline_Interface_Search_stylesheet.style_Outline_Interface_Search,
      {
        width: variant1_width,
        height: variant1_height,
        left: variant1_left,
        right: variant1_right,
        top: variant1_top,
        bottom: variant1_bottom,
        transform: variant1_transform,
      },
    ]}>
      <Svg style={component_style_Outline_Interface_Search_stylesheet.style_Icon_3} fill={"rgba(0, 0, 0, 1)"}>
        <Path fillRule={"evenodd"} d={"M 10.963515281677246 12.024166107177734 C 8.313246726989746 14.146820068359375 4.433813571929932 13.979755401611328 1.9770290851593018 11.522971153259277 C -0.6590096950531006 8.886931419372559 -0.6590096950531006 4.613068103790283 1.9770290851593018 1.9770293235778809 C 4.613068103790283 -0.6590099334716797 8.886931419372559 -0.6590094566345215 11.522970199584961 1.9770293235778809 C 13.979751586914062 4.433810710906982 14.146820068359375 8.313236236572266 12.024174690246582 10.963505744934082 L 17.179807662963867 16.119138717651367 C 17.472702026367188 16.412031173706055 17.472702026367188 16.886905670166016 17.179807662963867 17.179798126220703 C 16.88691520690918 17.472692489624023 16.41204071044922 17.472692489624023 16.11914825439453 17.179798126220703 L 10.963515281677246 12.024166107177734 Z M 3.037689208984375 10.462310791015625 C 0.9874367713928223 8.412057876586914 0.9874367713928223 5.087942123413086 3.037689208984375 3.037689447402954 C 5.087941646575928 0.9874367713928223 8.412057876586914 0.9874370098114014 10.462310791015625 3.037689447402954 C 12.51105785369873 5.086437225341797 12.512561798095703 8.407177925109863 10.466822624206543 10.457793235778809 C 10.46530818939209 10.459281921386719 10.463798522949219 10.460780143737793 10.46229362487793 10.462285041809082 C 10.46078872680664 10.463789939880371 10.459290504455566 10.465300559997559 10.45780086517334 10.466814994812012 C 8.407186508178711 12.512561798095703 5.08643913269043 12.511059761047363 3.037689208984375 10.462310791015625 Z"} strokeLinecap={"round"} strokeLinejoin={"miter"} />
      </Svg>
    </View>
  )
}

const stylesheet = StyleSheet.create({
	style_Mob_Main_after_login_Frame: {
		position: "relative",
		width: Dimensions.get("window").width,
		height: 844,
		borderRadius: 0,
		overflow: "hidden",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
		left: 0,
		top: 0,
	},
	style_Mob_Main: {
		position: "absolute",
		width: 390,
		height: 844,
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
	style_Logo: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 0,
		top: 50,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		textDecorationLine: "none",
		fontSize: 32,
		color: "rgba(30, 30, 30, 1)",
		textAlign: "center",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	},
	style_Rectangle_54: {
		position: "absolute",
		width: 330,
		height: 38,
		borderRadius: 10,
    borderColor: "rgba(0, 0, 0, 0.25)",
		opacity: 1,
		left: 30,
		right: "auto",
		top: 229,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
    elevation: 3,
		shadowColor: "rgb(0, 0, 0, 0.25)",
		shadowOffset: {
			width: 8,
			height: 5,
		},
		shadowRadius: 12,
		backgroundColor: "rgba(255, 255, 255, 1)",
	},
	style_For_example__pet_sitting: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 74,
		right: "auto",
		top: 240,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		textDecorationLine: "none",
		fontSize: 16,
		color: "rgba(134, 134, 134, 1)",
		textAlign: "left",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	},
	style_Are_you_looking_for_someone: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 31,
		right: "auto",
		top: 148,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		textDecorationLine: "none",
		fontSize: 22,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	},
	style_who_can_help_you_: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 31,
		right: "auto",
		top: 177,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		textDecorationLine: "none",
		fontSize: 22,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	},
	style__sub_2: {
		position: "absolute",
		width: 619,
		height: 400,
		borderRadius: 0,
		opacity: 1,
		left: 20,
		right: "auto",
		top: 400,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
});
const component_style_Outline_Interface_Menu_stylesheet = StyleSheet.create({
	style_Outline_Interface_Menu: {
		position: "absolute",
		width: 36,
		height: 36,
		borderRadius: 0,
		backgroundColor: "rgba(0,0,0,0)",
	},
	style_Icon_2: {
		position: "absolute",
		color: "rgba(0, 0, 0, 1)",
		width: 20,
		height: 17.25,
		borderRadius: 0,
		left: 6,
		right: 6.750001907348633,
		transform: [
			{translateX: 0},
			{translateY: 9.375},
			{rotate: "0deg"},
		],
	},
});
const component_style_Outline_Interface_Search_stylesheet = StyleSheet.create({
	style_Outline_Interface_Search: {
		position: "absolute",
		width: 24,
		height: 24,
		borderRadius: 0,
		backgroundColor: "rgba(0,0,0,0)",
	},
	style_Icon_3: {
		position: "absolute",
		color: "rgba(0, 0, 0, 1)",
		width: 20,
		height: 17.39946937561035,
		borderRadius: 0,
		left: 3.42156982421875,
		right: 3.1789512634277344,
		transform: [
			{translateX: 0},
			{translateY: 3.42156982421875},
			{rotate: "0deg"},
		],
	},
});
const imageUrlstyle__sub_2 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/21e0d2f3eb10926dcb095a6260c940b0"