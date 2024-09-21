import { View, Text, StyleSheet, Image } from 'react-native'
import {useState}  from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Logo from '../../assets/logo.jpg'
import LoginForm from '../../components/loginForm'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'
const SignIn = () => {
  const [form, setForm] = useState({
    username: '',
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
          Log In
        </Text>
        <LoginForm
          title="Username"
          value={form.username}
          handleChangeText={(e) => setForm({...form, username: e})}

        />
        <LoginForm
          title="Password"
          value={form.password}
          handleChangeText={(e) => setForm({...form, password: e})}
          
        />
        <CustomButton
          handlePress={submit}
          title="Sign In"
          isLoading={isSubmitting}
          style={styles.button}
        />
        <View style={styles.noAccount}>
         
          <Link href="/sign-up" style={styles.textNoAccount}>Create Account</Link>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default SignIn


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
noAccount: {
  
  flexDirection: 'row'
},
textNoAccount: {
  marginTop: 33,
  fontSize: 18
},




});