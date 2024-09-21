import { StatusBar } from 'expo-status-bar'
import { ScrollView, StyleSheet, Text, View, Image } from 'react-native'
import { Redirect, router } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import Logo from '../assets/logo.jpg'
import CustomButton from '../components/CustomButton'

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={{ height: '100%'}}>
                <View style={styles.mainView}>
                    <Image
                        source={Logo}
                        style={styles.image}
                    />
                    <CustomButton
                        title="Welcome"
                        handlePress={() => router.push('/sign-in')}

                    />
                </View>
            </ScrollView>


            <StatusBar backgroundColor='brown' style='light'/>
        </SafeAreaView>
 );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainView: {
        width: 'full',
        justifyContent: 'center',
        paddingHorizontal: 4,
        alignItems: 'center',
        marginHorizontal: 'full'

    },
    image: {
        width: 222,
        height: 199,
        marginTop: 190
         
    }
})
 