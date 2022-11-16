import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_931_18909}>
        <View style={styles.View_931_18910}>
          <View style={styles.View_931_18912}>
            <View style={styles.View_931_18913}>
              <Text style={styles.Text_931_18913}>How Old Are You?</Text>
            </View>
            <View style={styles.View_931_18914}>
              <Text style={styles.Text_931_18914}>
                Age in years. This will help us keep track of your progress.
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_931_18915}>
          <View style={styles.View_931_18916}>
            <Text style={styles.Text_931_18916}>29</Text>
          </View>
          <View style={styles.View_931_18917}>
            <Text style={styles.Text_931_18917}>30</Text>
          </View>
          <View style={styles.View_931_18918}>
            <Text style={styles.Text_931_18918}>31</Text>
          </View>
          <View style={styles.View_931_18919} />
          <View style={styles.View_931_18920}>
            <Text style={styles.Text_931_18920}>32</Text>
          </View>
          <View style={styles.View_931_18921} />
          <View style={styles.View_931_18922}>
            <Text style={styles.Text_931_18922}>33</Text>
          </View>
          <View style={styles.View_931_18923}>
            <Text style={styles.Text_931_18923}>34</Text>
          </View>
          <View style={styles.View_931_18924}>
            <Text style={styles.Text_931_18924}>35</Text>
          </View>
        </View>
        <View style={styles.View_931_18925}>
          <View style={styles.View_931_18926}>
            <View style={styles.View_I931_18926_442_1601}>
              <Text style={styles.Text_I931_18926_442_1601}>Back</Text>
            </View>
          </View>
          <View style={styles.View_931_18927}>
            <View style={styles.View_I931_18927_433_784}>
              <Text style={styles.Text_I931_18927_433_784}>Continue</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_931_18928}>
        <View style={styles.View_I931_18928_119_97}>
          <Text style={styles.Text_I931_18928_119_97}>9:41</Text>
        </View>
        <View style={styles.View_I931_18928_119_98}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d3270bc8-a82a-4d6b-b7c3-73c4c09ad919"
            }}
            style={styles.ImageBackground_I931_18928_119_99}
          />
        </View>
        <View style={styles.View_I931_18928_119_104}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f9ffa691-0b9d-47b4-a7fe-f3278aaecf26"
            }}
            style={styles.ImageBackground_I931_18928_119_105}
          />
        </View>
        <View style={styles.View_I931_18928_119_109}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b40a9db2-f50e-46fb-9bab-02b48ac0a105"
            }}
            style={styles.ImageBackground_I931_18928_119_110}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(24, 26, 32, 1)" },
  View_2: { height: hp("127%") },
  View_931_18909: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("120%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_931_18910: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_931_18912: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_931_18913: {
    width: wp("89%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_931_18913: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_931_18914: {
    width: wp("89%"),
    minWidth: wp("89%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_931_18914: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_931_18915: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("68%"),
    minHeight: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("29%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_931_18916: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_931_18916: {
    color: "rgba(224, 224, 224, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_931_18917: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("7%"),
    justifyContent: "center"
  },
  Text_931_18917: {
    color: "rgba(224, 224, 224, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_931_18918: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("14%"),
    justifyContent: "center"
  },
  Text_931_18918: {
    color: "rgba(245, 245, 245, 1)",
    fontSize: 40,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_931_18919: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25%")
  },
  View_931_18920: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%"),
    justifyContent: "center"
  },
  Text_931_18920: {
    fontSize: 56,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_931_18921: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43%")
  },
  View_931_18922: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("46%"),
    justifyContent: "center"
  },
  Text_931_18922: {
    color: "rgba(245, 245, 245, 1)",
    fontSize: 40,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_931_18923: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("57%"),
    justifyContent: "center"
  },
  Text_931_18923: {
    color: "rgba(224, 224, 224, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_931_18924: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("64%"),
    justifyContent: "center"
  },
  Text_931_18924: {
    color: "rgba(224, 224, 224, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_931_18925: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("106%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_931_18926: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(53, 56, 63, 1)"
  },
  View_I931_18926_442_1601: {
    flexGrow: 1,
    width: wp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I931_18926_442_1601: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_931_18927: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I931_18927_433_784: {
    flexGrow: 1,
    width: wp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I931_18927_433_784: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_931_18928: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I931_18928_119_97: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I931_18928_119_97: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_I931_18928_119_98: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  ImageBackground_I931_18928_119_99: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I931_18928_119_104: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("2%")
  },
  ImageBackground_I931_18928_119_105: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I931_18928_119_109: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("2%")
  },
  ImageBackground_I931_18928_119_110: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
