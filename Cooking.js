import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import navigation hook

export default function Cooking() {
  const navigation = useNavigation(); // Access navigation object

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Cooking</Text>
        <Text style={styles.purpose}>
          Purpose: To prepare and cook nutritious family meals
        </Text>
        <Image source={require('./Images/Cooking.jpeg')} style={styles.image} />
        <View style={styles.contentBox}>
          <Text style={styles.contentTitle}>Content:</Text>
          <Text style={styles.contentItem}>• Nutritional requirements for a healthy body</Text>
          <Text style={styles.contentItem}>• Types of protein, carbohydrates, and vegetables</Text>
          <Text style={styles.contentItem}>• Planning meals</Text>
          <Text style={styles.contentItem}>• Preparation and cooking of meals</Text>
        </View>
        <Text style={styles.fees}>Fees: R750</Text>
       <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Calculate fees')}>
          <Text style={styles.buttonText}>Enquire Now</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Six weeks')} // Replace 'Home' with your home route name
      >
        <Text style={styles.backButtonText}>Back to Courses</Text>
      </TouchableOpacity>

      <View style={styles.footer}>
        <Text style={styles.footerText}>
          © 2022 Empowering the Nation. All rights reserved.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#f3f4f6',
    alignItems: 'center',
  },
  content: {
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e3a8a',
  },
  purpose: {
    fontSize: 16,
    color: '#1e3a8a',
    marginTop: 8,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginTop: 16,
  },
  contentBox: {
    backgroundColor: '#1e3a8a',
    borderRadius: 8,
    padding: 16,
    marginTop: 16,
  },
  contentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  contentItem: {
    fontSize: 16,
    color: '#fff',
    marginTop: 8,
  },
  fees: {
    fontSize: 16,
    color: '#1e3a8a',
    marginTop: 16,
  },
  button: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#1e3a8a',
    marginTop: 16,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#1e3a8a',
    fontSize: 16,
  },
  footer: {
    width: '100%',
    backgroundColor: '#1e3a8a',
    padding: 16,
    alignItems: 'center',
  },
  footerText: {
    color: '#fff',
    fontSize: 14,
  },
  backButton: {
    backgroundColor: '#FFA500', // You can choose any color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginVertical: 16,
    alignSelf: 'center',
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
