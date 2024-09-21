import { View, Text, StyleSheet, Image } from 'react-native'
import {useState}  from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Logo from '../../assets/logo.jpg'
import LoginForm from '../../components/loginForm'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'
const SignUp = () => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: ''
  })

  const [isSubmitting, setisSubmitting] = useState(false)

  const submit = () => {


  }

  return (
    <SafeAreaView style={styles.main}>
      <View>
        <Image
            source={Logo}
            style={styles.image}
        />
        <Text style={styles.text}>
          Sign Up
        </Text>
        <LoginForm
          title="Username"
          value={form.username}
          handleChangeText={(e) => setForm({...form, username: e})}

        />
        <LoginForm
          title="Email"
          value={form.email}
          handleChangeText={(e) => setForm({...form, email: e})}
          keyboardType="email-address"
        />
        <LoginForm
          title="Password"
          value={form.password}
          handleChangeText={(e) => setForm({...form, password: e})}
          
        />
        <CustomButton
          handlePress={submit}
          title="Sign Up"
          isLoading={isSubmitting}
          style={styles.button}
        />
        <View style={styles.signIn}>
         
        <Link href="/sign-in"  style={styles.textSignIn}>Click to go to Sign In</Link> 
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SignUp


const styles = StyleSheet.create ({
  main: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    
    
  },
 image: {
  marginTop: 105,
    width: 222,
    height: 199,
},
text: {
  fontSize: 22,
  marginTop: 25,
  fontWeight: 'bold',
},
signIn: {
  
  flexDirection: 'row'
},
textSignIn: {
  marginTop: 33,
  fontSize: 18
},




});