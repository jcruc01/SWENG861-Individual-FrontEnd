import {
  View, Text,
  StyleSheet, TouchableOpacity
} from 'react-native';
import Icon
    from 'react-native-vector-icons/Ionicons';
    import React, { useState } from 'react';

import {useLocalSearchParams} from 'expo-router'


const Dashboard = () => {
 
    const [activeSection, setActiveSection] = useState('Home');

    const { user } = useLocalSearchParams();

    const mockUser = JSON.parse(user);

    const renderSection = () => {
        switch (activeSection) {
            case 'Classes':
                return <ClassesSection />;
            default:
                return <HomeSection />;
        }
    };

    const renderBackButton = () => (
        <TouchableOpacity
            onPress={
                () =>
                    setActiveSection('Home')
            } style={styles.backButton}>
            <Icon name="arrow-back"
                size={30} color="white" />
            <Text style={styles.backButtonText}>
                Back to Home
            </Text>
        </TouchableOpacity>
    );

    const HomeSection = () => (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerTitle}>
                    Welcome to the Dashboard, {mockUser.name}!
                </Text>
            </View>
            <View style={styles.featuresContainer}>
                <PressableFeatureBox name="View Classes"
                    icon="checkbox-outline" onPress=
                    {
                        () => setActiveSection('Classes')
                    } />
            </View>
        </View>
    );

    
    const PressableFeatureBox = (
        { name, icon,
            onPress
        }
    ) => (
        <TouchableOpacity onPress={onPress}
            style={styles.featureBox}>
            <Icon name={icon} size={50}
                color="#3498db" />
            <Text style={styles.featureName}>
                {name}
            </Text>
        </TouchableOpacity>
    );

   
    const ClassesSection = () => (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                {renderBackButton()}
                <Text style={styles.headerTitle}>
                    Classes Section
                </Text>
            </View>
            <View style={styles.contentContainer}>
                <Text style={styles.contentTitle}>
                    Upcoming Classes
                </Text>
                <ClassItem title="Class 1"
                    description="History." />
                <ClassItem title="Class 2"
                    description="Biology" />
                <ClassItem title="Class 3"
                    description="Math ." />
            </View>
        </View>
    );
   

    const ClassItem = (
        {
            title,
            description
        }) => (
        <View style={styles.classItem}>
            <Text style={styles.classTitle}>
                {title}
            </Text>
            <Text style={styles.classDescription}>
                {description}
            </Text>
        </View>
    );

   const styles = StyleSheet.create({
        container: {
            
        },
        headerContainer: {
            backgroundColor: '#0c9cd4',
            padding: 20,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            elevation: 5,
        },
        headerTitle: {
            fontSize: 24,
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'white',
            marginBottom: 20,
            marginTop: 10,
        },


        featuresContainer: {
            flex: 1,
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            marginTop: 20,
        },
        featureBox: {
            alignItems: 'center',
            justifyContent: 'center',
            width: '33%',
           // aspectRatio: 1,
            backgroundColor: 'light-gray',
            borderRadius: 10,
            marginVertical: 10,
           // elevation: 5,
           
            shadowColor: '#000000',
            shadowOffset: {
              width: 1,
              height: 3
            },
            shadowRadius: 2,
            shadowOpacity: 1.0,
            
        },
        featureName: {
            marginTop: 10,
            fontSize: 16,
            fontWeight: 'bold',
            color: '#555',
        },
        backButton: {
            flexDirection: 'row',
            alignItems: 'center',
        },
        backButtonText: {
            color: 'white',
            fontSize: 16,
            marginLeft: 10,
        },
        contentContainer: {
            flex: 1,
            padding: 20,
        },
        contentText: {
            fontSize: 16,
            marginBottom: 10,
            color: '#555',
        },
        contentTitle: {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#333',
            marginBottom: 10,
        },
        classItem: {
            backgroundColor: '#3498db',
            borderRadius: 10,
            padding: 15,
            marginVertical: 10,
        },
        classTitle: {
            color: 'white',
            fontSize: 18,
            fontWeight: 'bold',
        },
        classDescription: {
            color: 'white',
            fontSize: 14,
            marginTop: 5,
        },
    });

    return <View style={styles.container}>
        {renderSection()}
    </View>;
};

export default Dashboard;