import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation

export default function App() {
  const navigation = useNavigation(); // Use the hook to get navigation

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}></View>

      <Text style={styles.title}>About Empowering the Nation</Text>
      <Text style={styles.subtitle}>History</Text>
      <Text style={styles.paragraph}>
        Empowering the Nation was established in 2018 and offers courses in Johannesburg. Hundreds of domestic workers and gardeners have been trained on both the six-month long Learnerships and six-week Short Skills Training Programmes to empower themselves and can provide more marketable skills.
      </Text>
      <Text style={styles.subtitle}>Mission & Vision</Text>
      <Text style={styles.paragraph}>
The SME is an initiative by Precious Radebe to provide skills training for domestic workers
and gardeners. Her parents and other elderly relatives were never given the chance to upskill
themselves or follow a formal educational qualification, so this training school is her way of
supporting similarly affected members from her community.
      </Text>
      <Text style={styles.subtitle}>Vision Statement</Text>
      <Text style={styles.paragraph}>
        A future where everyone is equipped with the skills needed to succeed.
      </Text>
      <Image source={require('./Images/Empowering.png')} style={styles.image} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log("Navigating back to HomeScreen");
          navigation.navigate('Home'); // Ensure 'Home' matches the screen name in your DrawerNavigator
        }}
      >
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>

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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 16,
    color: '#FFFFFF',
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#D1D5DB',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 16,
  },
  buttonText: {
    color: '#000000',
    textAlign: 'center',
    fontSize: 16,
  },
  footer: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 12,
  },
});
