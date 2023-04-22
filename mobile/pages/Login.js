import { View, Text, StyleSheet, Dimensions, TouchableOpacity, TextInput } from "react-native";
import { Svg, Path } from "react-native-svg";

export default function Login({ navigation }) {
    return (
            <View style={stylesheet.style_Mob_Login_Frame}>
                <View style={stylesheet.style_Mob_Login}>
                    <View style={stylesheet.style_Group_115}>
                        <View style={stylesheet.style_Rectangle_51}>
                        </View>
                        <View style={[stylesheet.style_Google, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
                            <Text style={[stylesheet.style_Google, { position: "relative", flexGrow: 1, left: 0, top: 0, height: 30, transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
                                Google
                            </Text>
                        </View>
                        <Svg style={stylesheet.style_google} fill={"rgba(255, 255, 255, 1)"}>
                            <Path fillRule={"nonzero"} d={"M 17.824949264526367 7.199999809265137 L 9 7.199999809265137 L 9 10.799999237060547 L 14.086350440979004 10.799999237060547 C 13.3443004488945 12.895649194717407 11.35034990310669 14.399999618530273 9 14.399999618530273 C 6.017850160598755 14.399999618530273 3.5999999046325684 11.982149839401245 3.5999999046325684 9 C 3.5999999046325684 6.017850160598755 6.017850160598755 3.5999999046325684 9 3.5999999046325684 C 10.37654995918274 3.5999999046325684 11.628899931907654 4.119299829006195 12.582449913024902 4.967549800872803 L 15.12809944152832 2.4219000339508057 C 13.520699501037598 0.9238500595092773 11.37059998512268 0 9 0 C 4.029749870300293 0 0 4.029749870300293 0 9 C 0 13.970250129699707 4.029749870300293 18 9 18 C 13.970250129699707 18 18 13.970250129699707 18 9 C 18 8.396550059318542 17.937899254262447 7.770149767398834 17.824949264526367 7.199999809265137 Z"} strokeLinejoin={"round"} />
                        </Svg>
                    </View>
                    <View style={stylesheet.style_Group_116}>
                        <View style={stylesheet.style_Rectangle_51_2}>
                        </View>
                        <View style={[stylesheet.style_Apple, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
                            <Text style={[stylesheet.style_Apple, { position: "relative", flexGrow: 1, left: 0, top: 0, height: 30, transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
                                Apple
                            </Text>
                        </View>
                        <Svg style={stylesheet.style_apple} fill={"rgba(255, 255, 255, 1)"}>
                            <Path fillRule={"nonzero"} d={"M 9.003024101257324 4.516885280609131 C 9.032172203063965 3.6124608516693115 9.281294822692871 2.280125856399536 10.14830207824707 1.4048415422439575 C 10.953100204467773 0.5923600196838379 11.932828903198242 0.19637639913707972 12.543037414550781 0.015348256565630436 C 12.778615951538086 -0.05453984346240759 13.004631042480469 0.12310254573822021 12.993037223815918 0.3685552477836609 C 12.952141761779785 1.234352707862854 12.72449016571045 2.525740385055542 12.137105941772461 3.21756649017334 C 11.58340072631836 3.869724988937378 10.692665100097656 4.734538555145264 9.387970924377441 4.880044937133789 C 9.174421310424805 4.903861045837402 8.996103286743164 4.73164701461792 9.003024101257324 4.516885280609131 Z"} strokeLinejoin={"round"} />
                            <Path fillRule={"nonzero"} d={"M 11.237062454223633 21.07077980041504 C 11.863570213317871 21.310773849487305 12.497015953063965 21.55342674255371 13.070305824279785 21.55342674255371 C 14.2966947555542 21.55342674255371 17.867801666259766 18.723878860473633 17.99643325805664 15.785079956054688 C 18.003040313720703 15.634151458740234 17.91287612915039 15.499357223510742 17.78104019165039 15.425582885742188 C 16.872678756713867 14.917276382446289 15.389330863952637 13.651592254638672 15.337693214416504 11.810270309448242 C 15.277514457702637 9.664409637451172 16.35492515563965 7.960034370422363 17.170347213745117 7.255007743835449 C 17.35386848449707 7.0963335037231445 17.41690444946289 6.816553592681885 17.25306510925293 6.637628555297852 C 16.51117515563965 5.827423572540283 15.018636703491211 4.7129693031311035 13.656854629516602 4.740326404571533 C 12.666093826293945 4.76023006439209 11.773445129394531 5.129280090332031 11.007458686828613 5.4459638595581055 C 10.419790267944336 5.688925266265869 9.906675338745117 5.901063919067383 9.48100757598877 5.901063919067383 C 9.077834129333496 5.901063919067383 8.593822479248047 5.690287113189697 8.038305282592773 5.448370933532715 C 7.290195465087891 5.122585296630859 6.412405967712402 4.740326404571533 5.427730083465576 4.740326404571533 C 3.603792905807495 4.740326404571533 0.00000815797818631836 6.252801895141602 4.433786671143025e-12 12.09166145324707 C -0.00000432469789757306 15.186960220336914 3.195357322692871 21.635499954223633 5.891712665557861 21.55342674255371 C 6.473945617675781 21.55342674255371 7.096180438995361 21.31233787536621 7.713629245758057 21.073102951049805 C 8.32165241241455 20.8375186920166 8.925034523010254 20.60373306274414 9.48100757598877 20.60373306274414 C 10.01783561706543 20.60373306274414 10.624129295349121 20.83598518371582 11.237062454223633 21.07077980041504 Z"} strokeLinejoin={"round"} />
                        </Svg>
                    </View>
                    <TouchableOpacity 
                      style={stylesheet.style_Group_117}
                      onPress={() => navigation.navigate("Drawer")}
                    >
                        <View style={stylesheet.style_Rectangle_52}>
                        </View>
                        <View style={[stylesheet.style_Continue_to_Sign_in, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
                            <Text style={[stylesheet.style_Continue_to_Sign_in, { position: "relative", flexGrow: 1, left: 0, top: 0, height: 30, transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
                                Continue to Sign in
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <View style={stylesheet.style_Line_1}>
                    </View>
                    <View 
                      style={stylesheet.style_Rectangle_53}
                    >
                    </View>
                    <View style={[stylesheet.style_or_continue_with_Email, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
                        <Text style={[stylesheet.style_or_continue_with_Email, { position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
                            or continue with Email
                        </Text>
                    </View>
                    <View style={[stylesheet.style_Email, { display: "flex", flexDirection: "row", alignItems: "center" }]}>
                        <Text style={[stylesheet.style_Email, { position: "relative", flexGrow: 1, left: 0, top: 0, height: "auto", transform: [{ translateX: 0 }, { translateY: 0 }], }]}>
                            Email
                        </Text>
                    </View>
                    <TextInput 
                      style={stylesheet.style_Rectangle_54}
                      placeholder=" Required"
                    >
                    </TextInput>
                </View>
            </View>
    )
}

const stylesheet = StyleSheet.create({
	style_Mob_Login_Frame: {
		position: "relative",
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
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
	style_Mob_Login: {
		position: "absolute",
		width: 390,
		height: Dimensions.get("window").height,
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
	style_Group_115: {
		position: "absolute",
		width: 216,
		height: 45,
		transform: [
			{translateX: 87},
			{translateY: 100},
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
		backgroundColor: "rgba(68, 104, 164, 1)",
	},
	style_Google: {
		position: "absolute",
		width: 74,
		height: 22.5,
		left: 71,
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
	style_google: {
		position: "absolute",
		color: "rgba(255, 255, 255, 1)",
        width: 20,
		height: 18,
		left: 14,
		right: 184,
		transform: [
			{translateX: 0},
			{translateY: 14},
			{rotate: "0deg"},
		],
	},
	style_Group_116: {
		position: "absolute",
		width: 216,
		height: 45,
		transform: [
			{translateX: 87},
			{translateY: 160},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},
	style_Rectangle_51_2: {
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
		backgroundColor: "rgba(30, 30, 30, 1)",
	},
	style_Apple: {
		position: "absolute",
		width: 74,
		height: 22.5,
		left: 71,
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
	style_apple: {
		position: "absolute",
		color: "rgba(255, 255, 255, 1)",
		width: 20,
		height: 21.554203033447266,
		borderRadius: 0,
		left: 14,
		right: 184.0032253265381,
		transform: [
			{translateX: 0},
			{translateY: 12},
			{rotate: "0deg"},
		],
	},
	style_Group_117: {
		position: "absolute",
		width: 216,
		height: 45,
		transform: [
			{translateX: 87},
			{translateY: 360},
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
		backgroundColor: "rgba(134, 134, 134, 1)",
	},
	style_Continue_to_Sign_in: {
		position: "absolute",
		width: 180,
		height: 22,
		left: 18,
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
	style_Line_1: {
		position: "absolute",
		width: 329,
		height: 0,
		borderRadius: undefined,
		borderWidth: 1,
		borderStyle: "solid",
		borderColor: "rgba(0, 0, 0, 1)",
		left: 31,
		right: "auto",
		top: 240,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "-0.000005008956538086337deg"},
		],
	},
	style_Rectangle_53: {
		position: "absolute",
		width: 190,
		height: 21,
		borderRadius: 0,
		opacity: 1,
		left: 100,
		right: "auto",
		top: 300,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 1)",
	},
	style_or_continue_with_Email: {
		position: "absolute",
		width: 250,
		height: "auto",
		left: 70,
		right: "auto",
		top: 226,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(0, 0, 0, 1)",
    backgroundColor: "rgba(255, 255, 255, 1)",
		textAlign: "center",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	},
	style_Email: {
		position: "absolute",
		width: "auto",
		height: "auto",
		left: 0,
		right: "auto",
		top: 265,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		textDecorationLine: "none",
		fontSize: 18,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "center",
		textAlignVertical: "center",
		letterSpacing: 0.1,
	},
	style_Rectangle_54: {
		position: "absolute",
		width: 330,
		height: 34,
		borderRadius: 10,
		opacity: 1,
		borderWidth: 1,
		borderColor: "rgba(134, 134, 134, 1)",
		left: 30,
		right: "auto",
		top: 300,
		bottom: "auto",
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(255, 255, 255, 1)",
	}
});