import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import { Svg, Path } from "react-native-svg";

export default function Profile({ navigation }) {
  return (
    <View style={stylesheet.style_Mob_My_page_Frame}>
      <View style={stylesheet.style_Mob_Basic}>
        <Image style={stylesheet.style_XXL} source={{ uri: imageUrlstyle_XXL }}></Image>
        <View style={[stylesheet.style_John_Smith, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
          <Text style={[stylesheet.style_John_Smith, { position: "relative", flexGrow: 1, left: -145, top: -17, height: "auto", transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
            John Smith
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
        >
          <Component_style_Outline_Interface_Menu
            variant1_left={24}
            variant1_right={"auto"}
            variant1_top={56}
            variant1_bottom={"auto"}
            variant1_transform={[{ translateX: 0 }, { translateY: 0 }, { rotate: "0deg" },]}
          />
        </TouchableOpacity>
        <View style={[stylesheet.style_Information, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
          <Text style={[stylesheet.style_Information, { position: "relative", flexGrow: 1, left: -145, top: -40, height: "auto", transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
            Information
          </Text>
        </View>
        <View style={[stylesheet.style_24__Toronto, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
          <Text style={[stylesheet.style_24__Toronto, { position: "relative", flexGrow: 1, left: -155, top: -40, height: "auto", transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
            24, Toronto
          </Text>
        </View>
        <View style={[stylesheet.style_Joined_DoForYou_on_Nov_2022, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
          <Text style={[stylesheet.style_Joined_DoForYou_on_Nov_2022, { position: "relative", flexGrow: 1, left: -200, top: -40, height: "auto", transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
            Joined DoForYou on Nov 2022
          </Text>
        </View>
        <View style={stylesheet.style_Line_8}>
        </View>
        <View style={stylesheet.style_Line_9}>
        </View>
        <View style={stylesheet.style_Group_149}>
          <TouchableOpacity
            style={stylesheet.style_Group_146}
            onPress={() => navigation.navigate('CreatedTasks')}
          >
            <View style={stylesheet.style_Rectangle_58}>
            </View>
            <View style={stylesheet.style_Group_136}>
              <View style={[stylesheet.style_Task_Created, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
                <Text style={[stylesheet.style_Task_Created, { position: "relative", flexGrow: 1, left: -2, top: 10, height: "auto" }]}>
                  Created
                </Text>
              </View>
              <View style={[stylesheet.style_1, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
                <Text style={[stylesheet.style_1, { position: "relative", flexGrow: 1, left: 10, top: 12, height: "auto", transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
                  1
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("ReceivedTasks")}>
            <View style={stylesheet.style_Group_147}>
              <View style={stylesheet.style_Rectangle_59}>
              </View>
              <View style={stylesheet.style_Group_137}>
                <View style={[stylesheet.style_Got_helped, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
                  <Text style={[stylesheet.style_Got_helped, { position: "relative", flexGrow: 1, left: -15, top: 10, height: "auto", transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
                    Received
                  </Text>
                </View>
                <View style={[stylesheet.style_3, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
                  <Text style={[stylesheet.style_3, { position: "relative", flexGrow: 1, left: 17, top: 13, height: "auto", transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
                    3
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={stylesheet.style_Group_148}>
          <View style={stylesheet.style_Group_145}>
            <View style={stylesheet.style_Rectangle_60}>
            </View>
            <View style={stylesheet.style_Group_138}>
              <View style={[stylesheet.style_You_helped, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
                <Text style={[stylesheet.style_You_helped, { position: "relative", flexGrow: 1, left: -6, top: 10, height: "auto", transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
                  Helped
                </Text>
              </View>
              <View style={[stylesheet.style_0, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
                <Text style={[stylesheet.style_0, { position: "relative", flexGrow: 1, left: 10, top: 10, height: "auto", transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
                  0
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('AssignedTasks')}>
            <View style={stylesheet.style_Group_144}>
              <View style={stylesheet.style_Rectangle_61}>
              </View>
              <View style={stylesheet.style_Group_139}>
                <Text style={[stylesheet.style_You_assigned, { position: "relative", flexGrow: 1, left: 0, top: 10, height: "auto", transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
                  Assigned
                </Text>
                <View style={[stylesheet.style_2, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
                  <Text style={[stylesheet.style_2, { position: "relative", flexGrow: 1, left: 10, top: 10, height: "auto", transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
                    2
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[stylesheet.style_As_a_customer, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
          <Text style={[stylesheet.style_As_a_customer, { position: "relative", flexGrow: 1, left: -145, top: -40, height: "auto", transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
            As a customer
          </Text>
        </View>
        <View style={[stylesheet.style_As_a_performer, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
          <Text style={[stylesheet.style_As_a_performer, { position: "relative", flexGrow: 1, left: -145, top: -40, height: "auto", transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
            As a performer
          </Text>
        </View>
      </View>
    </View>
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
const component_style_Outline_Interface_Menu_stylesheet = StyleSheet.create({
	style_Outline_Interface_Menu: {
		position: "absolute",
		width: 36,
		height: 36,
		borderRadius: 0,
		backgroundColor: "rgba(0, 0, 0, 0)",
	},
});

const stylesheet = StyleSheet.create({
	style_Mob_My_page_Frame: {
		position: "relative",
		width: Dimensions.get("window").width,
		height: 844,
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
	style_XXL: {
		position: "absolute",
		width: 90,
		height: 90,
		borderRadius: 50,
		opacity: 1,
		left: 150,
		right: "auto",
		top: 100,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	style_John_Smith: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 142,
		right: "auto",
		top: 64,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		// fontFamily: "Archivo",
		// fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 22,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "center",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	},
	style_Information: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 30,
		right: "auto",
		top: 250,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		// fontFamily: "Archivo",
		// fontWeight: 500,
		textDecorationLine: "none",
		fontSize: 20,
		color: "rgba(27, 27, 27, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	style_Reviews: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 289,
		right: "auto",
		top: 248,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		// fontFamily: "Archivo",
		// fontWeight: 500,
		textDecorationLine: "none",
		fontSize: 20,
		color: "rgba(134, 134, 134, 1)",
		textAlign: "right",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	style_24__Toronto: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 30,
		right: "auto",
		top: 280,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		// fontFamily: "Archivo",
		// fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 16,
		color: "rgba(27, 27, 27, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	style_Joined_DoForYou_on_Nov_2022: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 169,
		right: "auto",
		top: 310,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		// fontFamily: "undefined",
		// fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 16,
		color: "rgba(168, 168, 168, 1)",
		textAlign: "right",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	style_Line_8: {
		position: "absolute",
		width: 329,
		height: 0,
		borderRadius: undefined,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "rgba(75, 76, 76, 1)",
		left: 31,
		right: "auto",
		top: 300,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0.000005008956130975337deg"},
		],
	},
	style_Line_9: {
		position: "absolute",
		width: 329,
		height: 0,
		borderRadius: undefined,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "rgba(75, 76, 76, 1)",
		left: 31,
		right: "auto",
		top: 480,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0.000005008956130975337deg"},
		],
	},
	style_Group_149: {
		position: "absolute",
		width: 217,
		height: 200,
		transform: [
			{translateX: 87},
			{translateY: 350},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	style_Group_146: {
		position: "absolute",
		width: 103,
		height: 200,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	style_Rectangle_58: {
		position: "absolute",
		width: 103,
		height: 103,
		borderRadius: 15,
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
		backgroundColor: "rgba(217, 217, 217, 1)",
	},
	style_Group_136: {
		position: "absolute",
		width: 83,
		height: 100,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	style_Task_Created: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		// fontFamily: "Archivo",
		// fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 16,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "right",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	style_1: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 32,
		right: "auto",
		top: 33,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		// fontFamily: "Archivo",
		// fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 32,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	style_Group_147: {
		position: "absolute",
		width: 104,
		height: 110,
		transform: [
			{translateX: 113},
			{translateY: 0},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	style_Rectangle_59: {
		position: "absolute",
		width: 104,
		height: 103,
		borderRadius: 15,
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
		backgroundColor: "rgba(217, 217, 217, 1)",
	},
	style_Group_137: {
		position: "absolute",
		width: 100,
		height: 500,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	style_Got_helped: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		// fontFamily: "Archivo",
		// fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 16,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "right",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	style_3: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 25,
		right: "auto",
		top: 33,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		// fontFamily: "Archivo",
		// fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 32,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	style_Group_148: {
		position: "absolute",
		width: 219,
		height: 103,
		transform: [
			{translateX: 86},
			{translateY: 530},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	style_Group_145: {
		position: "absolute",
		width: 104,
		height: 300,
		transform: [
			{translateX: 115},
			{translateY: 0},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	style_Rectangle_60: {
		position: "absolute",
		width: 104,
		height: 103,
		borderRadius: 15,
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
		backgroundColor: "rgba(217, 217, 217, 1)",
	},
	style_Group_138: {
		position: "absolute",
		width: 85,
		height: 500,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	style_You_helped: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		// fontFamily: "Archivo",
		// fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 16,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "right",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	style_0: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 33,
		right: "auto",
		top: 33,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		// fontFamily: "Archivo",
		// fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 32,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	style_Group_144: {
		position: "absolute",
		width: 104,
		height: 300,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	style_Rectangle_61: {
		position: "absolute",
		width: 104,
		height: 103,
		borderRadius: 15,
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
		backgroundColor: "rgba(217, 217, 217, 1)",
	},
	style_Group_139: {
		position: "absolute",
		width: 85,
		height: 500,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	style_You_assigned: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		// fontFamily: "Archivo",
		// fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 16,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "right",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	style_2: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 33,
		right: "auto",
		top: 33,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		// fontFamily: "Archivo",
		// fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 32,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "left",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	style_As_a_customer: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 142,
		right: "auto",
		top: 350,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		// fontFamily: "Archivo",
		// fontWeight: 500,
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
	style_As_a_performer: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 141,
		right: "auto",
		top: 530,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		// fontFamily: "Archivo",
		// fontWeight: 500,
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "center",
		textAlignVertical: "top",
		letterSpacing: 0.1,
	},
});

const imageUrlstyle_XXL = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/5774d5f782a7812020f7aab690e00cc0"