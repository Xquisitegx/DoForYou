import { View, Text, Image, ScrollView, StyleSheet, Dimensions, TouchableOpacity } from "react-native";

export default function MainBeforeLogin({ navigation }) {
    return (
        <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{ height: Dimensions.get("window").height }}>
            <View style={stylesheet.style_Mob_main_before_login_Frame}>
                <Image style={stylesheet.style_main_image} source={{ uri: imageUrlstyle_main_image }}>
                </Image>
                <View style={stylesheet.style_Group_116}>
                    <View style={[stylesheet.style_main_description, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
                        <Text style={[stylesheet.style_main_description, { position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
                            Let us free you from worries
                        </Text>
                    </View>
                    <View style={[stylesheet.style_DoForYou, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
                        <Text style={[stylesheet.style_DoForYou, { position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
                            DoForYou
                        </Text>
                    </View>
                </View>
                <TouchableOpacity 
                  style={stylesheet.style_Group_115}
                  onPress={() => navigation.navigate("Register")}
                >
                    <View style={stylesheet.style_Rectangle_51}>
                    </View>
                    <View style={[stylesheet.style_Register, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
                        <Text style={[stylesheet.style_Register, { position: "relative", flexGrow: 1, left: 0, top: 0, height: 30, transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
                            Register
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={stylesheet.style_Group_114}
                  onPress={() => navigation.navigate("Login")}
                >
                    <View style={stylesheet.style_Rectangle_52}>
                    </View>
                    <View style={[stylesheet.style_Log_in, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
                        <Text style={[stylesheet.style_Log_in, { position: "relative", flexGrow: 1, left: -0, top: 0, height: 30, transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
                            Log in
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const stylesheet = StyleSheet.create({
	style_Mob_main_before_login_Frame: {
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
	style_main_image: {
		position: "absolute",
		width: 529,
		height: 281,
		borderRadius: 0,
		opacity: 1,
		left: -120,
		right: "auto",
		top: 450,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(0,0,0,0)",
	},
	style_Group_116: {
		position: "absolute",
		width: 300,
		height: 200,
		transform: [
			{translateX: 50},
			{translateY: 100},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	style_DoForYou: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 0,
		right: "auto",
		top: 10,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		textDecorationLine: "none",
		fontSize: 64,
		// color: "rgba(255, 255, 255, 1)",
		color: "rgba(27, 27, 27, 1)",
		textAlign: "center",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	},
	style_main_description: {
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
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(27, 27, 27, 1)",
		textAlign: "center",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	},
	style_Group_115: {
		position: "absolute",
		width: 216,
		height: 45,
		transform: [
			{translateX: 87},
			{translateY: 250},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	style_Rectangle_51: {
		position: "absolute",
		width: 216,
		height: 45,
		borderRadius: 20,
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
		backgroundColor: "rgba(194, 150, 76, 1)",
	},
	style_Register: {
		position: "absolute",
		width: 115,
		height: 23,
		left: 50,
		right: "auto",
		top: 11,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		textDecorationLine: "none",
		fontSize: 20,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "center",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	},
	style_Group_114: {
		position: "absolute",
		width: 216,
		height: 45,
		transform: [
			{translateX: 87},
			{translateY: 305},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	style_Rectangle_52: {
		position: "absolute",
		width: 216,
		height: 45,
		borderRadius: 20,
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
	style_Log_in: {
		position: "absolute",
		width: 100,
		height: 22.5,
		left: 58,
		right: "auto",
		top: 11.25,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		textDecorationLine: "none",
		fontSize: 20,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "center",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	}
});
const imageUrlstyle_main_image = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/ac61bbd464087e67a2f978131fb0af35"