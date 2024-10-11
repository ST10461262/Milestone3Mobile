import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

export default function Sewing({ navigation }) {  // Pass navigation prop
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Sewing</Text>
        <Text style={styles.purpose}>
          Purpose: To provide alterations and new garment tailoring services
        </Text>
        <Image source={require('./Images/Sewing.webp')} style={styles.image} />
        <View style={styles.contentBox}>
          <Text style={styles.contentTitle}>Content:</Text>
          <Text style={styles.contentItem}>Types of stitches</Text>
          <Text style={styles.contentItem}>Threading a sewing machine</Text>
          <Text style={styles.contentItem}>Sewing buttons, zips, hems and seams</Text>
          <Text style={styles.contentItem}>Alterations</Text>
          <Text style={styles.contentItem}>Designing and sewing new garments</Text>
        </View>
        <Text style={styles.fees}>Fees: R1500</Text>

        {/* Enquire Now button */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Calculate fees')}>
          <Text style={styles.buttonText}>Enquire Now</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.navigate('Six Months')} // Replace 'Home' with your home route name
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
    backgroundColor: '#FFA500', 
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
