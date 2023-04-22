import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function Messenger({ navigation }) {
	return (
		<View style={stylesheet.style_Mob_Message_Frame}>
			<View style={stylesheet.style_Mob_Basic}>
				<View style={stylesheet.style_Group_43}>
					<View style={stylesheet.style_Line_3_3}></View>
					<View style={[stylesheet.style_Jacob_E_, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
						<Text style={[stylesheet.style_Jacob_E_, { position: "relative", flexGrow: 1, left: 0, top: 0, height: 30, transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
							Jacob E.
						</Text>
					</View>
					<View style={stylesheet.style_Group_41}>
						<Text style={[stylesheet.style_13_32, { position: "relative", flexGrow: 1, left: -10, top: 0, height: "auto", width: 54, transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
							13:32
						</Text>
					</View>
					<View style={stylesheet.style_Group_42}>
						<Text style={[stylesheet.style_okok_lmk_when_u_r_done_, { position: "relative", flexGrow: 1, left: 0, top: -4, height: 20, transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
							okok lmk when u r..
						</Text>
					</View>
					<Image style={stylesheet.style_XXL} source={{ uri: imageUrlstyle_XXL }}>
					</Image>
				</View>
				<TouchableOpacity
					onPress={() => navigation.navigate("ChatRoom")}
				>
					<View style={stylesheet.style_Group_44}>
						<View style={stylesheet.style_Line_3_3}></View>
						<View style={[stylesheet.style_Tiffany_S_, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
							<Text style={[stylesheet.style_Tiffany_S_, { position: "relative", flexGrow: 1, left: 0, top: 0, height: 30, transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
								Tiffany S.
							</Text>
						</View>
						<View style={stylesheet.style_Group_41_2}>
							<View style={[stylesheet.style_2_days_ago, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
								<Text style={[stylesheet.style_2_days_ago, { position: "relative", flexGrow: 1, left: 0, top: 0, height: 30, transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
									2 days ago
								</Text>
							</View>
						</View>
						<View style={stylesheet.style_Group_42_2}>
							<View style={[stylesheet.style_I_m_interested_in_your_task_, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
								<Text style={[stylesheet.style_I_m_interested_in_your_task_, { position: "relative", flexGrow: 1, left: 0, top: 0, height: 30, transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
									I’m interested in yo..
								</Text>
							</View>
						</View>
						<Image style={stylesheet.style_XXL_2} source={{ uri: imageUrlstyle_XXL_2 }}>
						</Image>
					</View>
				</TouchableOpacity>
				<View style={stylesheet.style_Group_45}>
					<View style={stylesheet.style_Line_3_3}></View>
					<View style={[stylesheet.style_Irene_K_, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
						<Text style={[stylesheet.style_Irene_K_, { position: "relative", flexGrow: 1, left: 0, top: 0, height: 30, transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
							Irene K.
						</Text>
					</View>
					<View style={stylesheet.style_Group_41_3}>
						<View style={[stylesheet.style_7_days_ago, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
							<Text style={[stylesheet.style_7_days_ago, { position: "relative", flexGrow: 1, left: 0, top: 0, height: 30, transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
								7 days ago
							</Text>
						</View>
					</View>
					<View style={stylesheet.style_Group_42_3}>
						<View style={[stylesheet.style_You_did_a_lot_thank_you_s___, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
							<Text style={[stylesheet.style_You_did_a_lot_thank_you_s___, { position: "relative", flexGrow: 1, left: 0, top: 0, height: 30, transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
								You did a lot thanks...
							</Text>
						</View>
					</View>
					<Image style={stylesheet.style_XXL_3} source={{ uri: imageUrlstyle_XXL_3 }}>
					</Image>
				</View>
				<View style={stylesheet.style_Group_46}>
					<View style={stylesheet.style_Line_3_3}></View>
					<View style={[stylesheet.style_DoForYou, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
						<Text style={[stylesheet.style_DoForYou, { position: "relative", flexGrow: 1, left: 0, top: 0, height: 30, transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
							DoForYou
						</Text>
					</View>
					<View style={stylesheet.style_Group_41_4}>
						<View style={[stylesheet.style_10_days_ago, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
							<Text style={[stylesheet.style_10_days_ago, { position: "relative", flexGrow: 1, left: 0, top: 0, height: 30, transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
								10 days ago
							</Text>
						</View>
					</View>
					<View style={stylesheet.style_Group_42_4}>
						<View style={[stylesheet.style_Hello__John__, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
							<Text style={[stylesheet.style_Hello__John__, { position: "relative", flexGrow: 1, left: 0, top: 0, height: 30, transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
								Hello, John !
							</Text>
						</View>
					</View>
				</View>
			</View>
		</View>
	)
}

const stylesheet = StyleSheet.create({
	style_Mob_Message_Frame: {
		height: 850,
		borderRadius: 0,
		overflow: "hidden",
		borderColor: "rgba(0, 0, 0, 1)",
		backgroundColor: "rgba(0,0,0,0)",
	},
	style_Mob_Basic: {
		position: "absolute",
		width: 1000,
		height: 850,
		borderRadius: 0,
		overflow: "hidden",
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: -10},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 1)",
	},
	
	style_Group_43: {
		position: "absolute",
		width: 330,
		height: 80,
		transform: [
			{translateX: 42},
			{translateY: 30},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	style_Jacob_E_: {
		position: "absolute",
		width: 145,
		height: 21,
		left: 80,
		right: "auto",
		top: 8,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		// fontFamily: "ArchivoBlack_400Regular",
		// fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 20,
		color: "rgba(75, 76, 76, 1)",
		textAlign: "left",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	},
	style_Group_41: {
		position: "absolute",
		width: 43,
		height: 21,
		transform: [
			{translateX: 287},
			{translateY: 30},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	style_13_32: {
		position: "absolute",
		width: 43,
		height: 21,
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		// fontFamily: "ArchivoBlack_400Regular",
		// fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(75, 76, 76, 1)",
		textAlign: "right",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	},
	style_Group_42: {
		position: "absolute",
		width: 238,
		height: 15,
		transform: [
			{translateX: 80},
			{translateY: 47},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	style_okok_lmk_when_u_r_done_: {
		position: "absolute",
		width: 238,
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
		// fontFamily: "ArchivoBlack_400Regular",
		// fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 16,
		color: "rgba(134, 134, 134, 1)",
		textAlign: "left",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	},
	style_XXL: {
		position: "absolute",
		width: 70,
		height: 70,
		borderRadius: 50,
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
	style_Group_44: {
		position: "absolute",
		width: 330,
		height: 80,
		transform: [
			{translateX: 42},
			{translateY: 130},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	style_Tiffany_S_: {
		position: "absolute",
		width: 86,
		height: 21,
		left: 80,
		right: "auto",
		top: 8,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		// fontFamily: "ArchivoBlack_400Regular",
		// fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 20,
		color: "rgba(75, 76, 76, 1)",
		textAlign: "left",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	},
	style_Group_41_2: {
		position: "absolute",
		width: 85,
		height: 21,
		transform: [
			{translateX: 245},
			{translateY: 31},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	style_2_days_ago: {
		position: "absolute",
		width: 85,
		height: 21,
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		// fontFamily: "ArchivoBlack_400Regular",
		// fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(75, 76, 76, 1)",
		textAlign: "right",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	},
	style_Group_42_2: {
		position: "absolute",
		width: 238,
		height: 15,
		transform: [
			{translateX: 80},
			{translateY: 47},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	style_I_m_interested_in_your_task_: {
		position: "absolute",
		width: 238,
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
		// fontFamily: "ArchivoBlack_400Regular",
		// fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 16,
		color: "rgba(134, 134, 134, 1)",
		textAlign: "left",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	},
	style_XXL_2: {
		position: "absolute",
		width: 70,
		height: 70,
		borderRadius: 50,
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
	style_Group_45: {
		position: "absolute",
		width: 330,
		height: 80,
		transform: [
			{translateX: 42},
			{translateY: 230},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	style_Line_3_3: {
		position: "absolute",
		width: 330,
		height: 0,
		borderRadius: undefined,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "rgba(217, 217, 217, 1)",
		left: 0,
		right: "auto",
		top: 80,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
	},
	style_Irene_K_: {
		position: "absolute",
		width: 145,
		height: 21,
		left: 80,
		right: "auto",
		top: 8,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		// fontFamily: "ArchivoBlack_400Regular",
		// fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 20,
		color: "rgba(75, 76, 76, 1)",
		textAlign: "left",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	},
	style_Group_41_3: {
		position: "absolute",
		width: 91,
		height: 21,
		transform: [
			{translateX: 239},
			{translateY: 31},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	style_7_days_ago: {
		position: "absolute",
		width: 91,
		height: 21,
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		// fontFamily: "ArchivoBlack_400Regular",
		// fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(75, 76, 76, 1)",
		textAlign: "right",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	},
	style_Group_42_3: {
		position: "absolute",
		width: 238,
		height: 15,
		transform: [
			{translateX: 80},
			{translateY: 47},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	style_You_did_a_lot_thank_you_s___: {
		position: "absolute",
		width: 238,
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
		// fontFamily: "ArchivoBlack_400Regular",
		// fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 16,
		color: "rgba(134, 134, 134, 1)",
		textAlign: "left",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	},
	style_XXL_3: {
		position: "absolute",
		width: 70,
		height: 70,
		borderRadius: 50,
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
	style_Group_46: {
		position: "absolute",
		width: 330,
		height: 72,
		transform: [
			{translateX: 42},
			{translateY: 330},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	style_DoForYou: {
		position: "absolute",
		width: 145,
		height: 21,
		left: 80,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		// fontFamily: "ArchivoBlack_400Regular",
		// fontWeight: 700,
		textDecorationLine: "none",
		fontSize: 20,
		color: "rgba(75, 76, 76, 1)",
		textAlign: "left",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	},
	style_Group_41_4: {
		position: "absolute",
		width: 103,
		height: 21,
		transform: [
			{translateX: 227},
			{translateY: 23},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	style_10_days_ago: {
		position: "absolute",
		width: 103,
		height: 21,
		left: 0,
		right: "auto",
		top: 0,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		// fontFamily: "ArchivoBlack_400Regular",
		// fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(75, 76, 76, 1)",
		textAlign: "right",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	},
	style_Group_42_4: {
		position: "absolute",
		width: 238,
		height: 15,
		transform: [
			{translateX: 80},
			{translateY: 39},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	style_Hello__John__: {
		position: "absolute",
		width: 238,
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
		// fontFamily: "ArchivoBlack_400Regular",
		// fontWeight: 400,
		textDecorationLine: "none",
		fontSize: 16,
		color: "rgba(134, 134, 134, 1)",
		textAlign: "left",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	}
});
const imageUrlstyle_XXL = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/5f16779dbd6b2550fc2a1282205bad90"
const imageUrlstyle_XXL_2 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/e5d3d2b44ff07da994d7e8976f612ed0"
const imageUrlstyle_XXL_3 = "https://sizze-figma-plugin-images-upload.s3.us-east-2.amazonaws.com/147c7e60889581d2398b503f53aec948"