// PLUGINS IMPORTS //
import React, { useEffect } from "react"
import { Image, TouchableOpacity, StyleSheet, ViewStyle } from "react-native"
import { GoogleSignin } from "@react-native-community/google-signin"

// COMPONENTS IMPORTS //

// EXTRA IMPORTS //

/////////////////////////////////////////////////////////////////////////////

type PropsType = {
  webClientID: string
  onPress: () => Promise<any>

  buttonStyle?: {
    size?: number
    styles?: ViewStyle
  }
}
const GoogleButton: React.FC<PropsType> = (props) => {
  useEffect(() => {
    GoogleSignin.configure({
      offlineAccess: false,
      webClientId: props.webClientID,
    })
  }, [])

  return (
    <TouchableOpacity
      style={[styles.button, props.buttonStyle?.styles]}
      onPress={props.onPress}
    >
      <Image
        source={require("../../Images/icons/google.png")}
        style={{
          height: props.buttonStyle?.size,
          width: props.buttonStyle?.size,
        }}
      />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 100,
  },
})

export default React.memo(GoogleButton)
