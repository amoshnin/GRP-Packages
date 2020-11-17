import { GoogleSignin } from "@react-native-community/google-signin"
import FirebaseAuth from "@react-native-firebase/auth"

const GoogleLoginFunction = async () => {
  await GoogleSignin.signOut()
  await GoogleSignin.hasPlayServices()
  return GoogleSignin.signIn()
    .then((user) => {
      const credential = FirebaseAuth.GoogleAuthProvider.credential(
        user.idToken
      )
      return FirebaseAuth()
        .signInWithCredential(credential)
        .then((result: any) => ({
          google: user,
          firebase: result,
        }))
        .catch((error: any) => error)
    })
    .catch((error) => error)
}

export default GoogleLoginFunction
