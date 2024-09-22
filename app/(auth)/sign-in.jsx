import { View, Text, StyleSheet, Image } from 'react-native'
import {useState}  from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Logo from '../../assets/logo.png'
import LoginForm from '../../components/loginForm'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'

const mockUser = {
  username: 'joec12',
  password: '1234',
  name: 'Joe'
}

const SignIn = () => {
  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  const [isSubmitting, setisSubmitting] = useState(false)

  const submit = () => {
    mockUser.map((user) => {
      if(
        form.username === user.username && form.password === user.password
       ) {
        <Link    href={{
          pathname: '/dashboard',
          params: { name: user.name }
        }}></Link>
       }
    })


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
        <View style={styles.button}>      
          <CustomButton
          handlePress={submit}
          title="Sign In"
          isLoading={isSubmitting}
          style={styles.button}
          
        /></View>

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
 button: {
  marginLeft: 44
 }



});