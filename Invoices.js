import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const Invoices = ({ route, navigation }) => {
  const { contactDetails, selectedCourses, totalFees, discount, vat, courses } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Invoice</Text>

      {/* Contact Details Container */}
      <View style={styles.box}>
        <Text style={styles.subtitle}>Contact Details</Text>
        <Text style={styles.detail}>Name: {contactDetails.name}</Text>
        <Text style={styles.detail}>Phone: {contactDetails.phone}</Text>
        <Text style={styles.detail}>Email: {contactDetails.email}</Text>
      </View>

      {/* Selected Courses Container */}
      <View style={styles.box}>
        <Text style={styles.subtitle}>Selected Courses</Text>
        {Object.keys(selectedCourses).map((course) => (
          selectedCourses[course] ? (
            <Text key={course} style={styles.detail}>{course} - R{courses[course].fee}</Text>
          ) : null
        ))}
      </View>

      <Text style={styles.separator} />

      {/* Fees Summary Container */}
      <View style={styles.box}>
        <Text style={styles.detail}>Total Fees: R{totalFees.toFixed(2)}</Text>
        <Text style={styles.detail}>Discount: R{discount.toFixed(2)}</Text>
        <Text style={styles.detail}>VAT (15%): R{vat.toFixed(2)}</Text>
        <Text style={styles.finalAmount}>Final Amount (Cost): R{(totalFees - discount - vat).toFixed(2)}</Text>
      </View>

      {/* Back to Home Button */}
      <TouchableOpacity 
        style={styles.backButton}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.backButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#0a3d62',
    alignItems: 'center', // Centers the content horizontally
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 8,
    fontWeight: 'bold',
  },
  detail: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 4,
  },
  separator: {
    height: 1,
    backgroundColor: '#fff',
    marginVertical: 16,
    width: '100%',
  },
  box: {
    backgroundColor: '#001233',
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    width: '100%',
  },
  finalAmount: {
    fontSize: 18,
    color: '#ff4757',
    fontWeight: 'bold',
    marginTop: 8,
  },
  backButton: {
    backgroundColor: '#FFA500',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 16,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Invoices;
