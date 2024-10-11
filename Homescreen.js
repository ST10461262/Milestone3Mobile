import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) { // Accepting navigation prop
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Welcome to Empowering the Nation</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.contentText}>
          Empowering the Nation was established in 2018 and offers courses in Johannesburg. Hundreds of domestic workers and gardeners have been trained on both the six-month long Learnerships and six-week Short Skills Training Programmes to empower themselves and can provide more marketable skills.
        </Text>

        <View style={styles.courseContainer}>
          <Text style={styles.courseTitle}>Six-Month Courses</Text>
          <Image source={require('./Images/Sewing.webp')} style={styles.courseImage} />
          <TouchableOpacity 
            style={styles.learnMoreButton} 
            onPress={() => {
              console.log("Navigating to Six Months");
              navigation.navigate('Six Months'); // Correct name for navigation
            }}
          >
            <Text style={styles.learnMoreButtonText}>Learn More</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.courseContainer}>
          <Text style={styles.courseTitle}>Six-Week Courses</Text>
          <Image source={require('./Images/Cooking.jpeg')} style={styles.courseImage} />
          <TouchableOpacity 
            style={styles.learnMoreButton} 
            onPress={() => {
              console.log("Navigating to Six Weeks");
              navigation.navigate('Six weeks'); // Correct name for navigation
            }}
          >
            <Text style={styles.learnMoreButtonText}>Learn More</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002B45',
  },
  header: {
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    padding: 20,
  },
  contentText: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
  },
  courseContainer: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  courseImage: {
    width: '100%',
    height: 150,
    borderRadius: 10,
    marginBottom: 10,
  },
  learnMoreButton: {
    backgroundColor: '#002C40',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  learnMoreButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
