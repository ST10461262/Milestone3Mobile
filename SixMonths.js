import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

export default function SixMonths({ navigation }) { // Include navigation prop
  return (
    <ScrollView style={styles.container}>
      <Image source={require('./Images/Logo.png')} style={styles.logo} />
      <Text style={styles.title}>Courses</Text>
      <TouchableOpacity>
        <Text style={styles.link}>Six-Month Courses</Text>
      </TouchableOpacity>
      <View style={styles.card}>
      <Image source={require('./Images/Landscaping.jfif')} style={styles.image} />
        <Text style={styles.courseName}>Course Name</Text>
        <Text style={styles.courseDetail}>Landscaping</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Learn More</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Six-Month Courses</Text>
        <TouchableOpacity 
          onPress={() => {
            console.log("Navigating to First Aid");
            navigation.navigate('First Aid'); // Ensure the name matches
          }} 
        >
          <Text style={styles.link}>First Aid</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          onPress={() => {
            console.log("Navigating to Sewing");
            navigation.navigate('Sewing'); // Ensure the name matches
          }} 
        >
          <Text style={styles.link}>Sewing</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => {
            console.log("Navigating to LandScaping");
            navigation.navigate('LandScaping'); // Ensure the name matches
          }} 
        >
          <Text style={styles.link}>LandScaping</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={() => {
            console.log("Navigating to Life Skills");
            navigation.navigate('LifeSkills'); // Ensure the name matches
          }} 
        >
          <Text style={styles.link}>LifeSkills</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Important Note</Text>
        <Text style={styles.noteText}>
          Customers, whether employers or employees, can choose from a wide range of available courses. Multiple course selections are allowed, and the more courses customers select, the greater the discount they receive.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log("Navigating back to HomeScreen");
          navigation.navigate('Home'); // Ensure 'Home' matches the screen name in your DrawerNavigator
        }}
      >
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
<TouchableOpacity 
  style={styles.button} 
  onPress={() => {
    console.log("Navigating to Calculate fees");
    navigation.navigate('Calculate fees'); // Ensure 'Enquiry' is the name of the screen in your navigator
  }}
>
  <Text style={styles.buttonText}>Enquire</Text>
</TouchableOpacity>
      </View>
      <Text style={styles.footer}>© 2022 Empowering the Nation. All rights reserved.</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002B45',
    padding: 16,
  },

  logo: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 24,
    color: '#fff',
    textAlign: 'center',
    marginVertical: 16,
  },
  link: {
    color: '#4fc3f7',
    textDecorationLine: 'underline',
    marginBottom: 16,
  },
  card: {
    borderColor: '#fff',
    borderWidth: 1,
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
    borderRadius: 8,
  },
  courseName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  courseDetail: {
    color: '#fff',
    marginBottom: 8,
  },
  button: {
    backgroundColor: '#b0bec5',
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#000',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  noteText: {
    color: '#fff',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  footer: {
    textAlign: 'center',
    color: '#fff',
    paddingVertical: 8,
    backgroundColor: '#0a3d62',
    borderRadius: 8,
  },
});
