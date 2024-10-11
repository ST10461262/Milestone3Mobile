import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, Alert, CheckBox, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const courses = {
  'First Aid': { fee: 1500 },
  'Sewing': { fee: 1500 },
  'Landscaping': { fee: 1500 },
  'Life Skills': { fee: 1500 },
  'Child Minding': { fee: 750 },
  'Cooking': { fee: 750 },
  'Garden Maintenance': { fee: 750 },
};

export default function EnquiryScreen({ navigation }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [selectedCourses, setSelectedCourses] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('customerData');
      if (jsonValue != null) {
        const data = JSON.parse(jsonValue);
        setName(data.contactDetails.name);
        setPhone(data.contactDetails.phone);
        setEmail(data.contactDetails.email);
        setSelectedCourses(data.selectedCourses);
      }
    } catch (error) {
      console.error('Error retrieving data', error);
    }
  };

  const validateForm = () => {
    if (!name || !phone || !email) {
      setError('Please fill in all fields.');
      return false;
    }
    if (!Object.values(selectedCourses).some(value => value)) {
      setError('Please select at least one course.');
      return false;
    }
    setError('');
    return true;
  };

  const calculateTotalFees = () => {
    return Object.keys(selectedCourses).reduce((total, course) => {
      return selectedCourses[course] ? total + courses[course].fee : total;
    }, 0);
  };

  const calculateDiscount = (numberOfCourses) => {
    if (numberOfCourses === 1) return 0;
    if (numberOfCourses === 2) return calculateTotalFees() * 0.05;
    if (numberOfCourses === 3) return calculateTotalFees() * 0.10;
    return calculateTotalFees() * 0.15;
  };

  const handleCheckboxChange = (course) => {
    setSelectedCourses((prev) => ({
      ...prev,
      [course]: !prev[course],
    }));
  };

  const handleReset = () => {
    setName('');
    setPhone('');
    setEmail('');
    setSelectedCourses({});
    setError('');
  };

  const handleSubmit = async () => {
    if (validateForm()) {
      const dataToSave = {
        contactDetails: { name, phone, email },
        selectedCourses,
      };

      // Save data to AsyncStorage
      try {
        await AsyncStorage.setItem('customerData', JSON.stringify(dataToSave));
        console.log('Data saved successfully!');
      } catch (error) {
        console.error('Error saving data', error);
      }

      // Calculate fees
      const totalFees = calculateTotalFees();
      const discount = calculateDiscount(Object.values(selectedCourses).filter(Boolean).length);
      
      // Calculate VAT
      const totalAfterDiscount = totalFees - discount;
      const vat = totalAfterDiscount * 0.15; // Assuming VAT is 15%
      
      // Calculate final amount (Cost)
      const finalAmount = totalAfterDiscount - vat; // Subtract VAT from the total after discount

      navigation.navigate('Invoice', {
        contactDetails: { name, phone, email },
        selectedCourses,
        totalFees,
        discount,
        vat,
        finalAmount,
        courses, // Pass the courses object
      });
    } else {
      Alert.alert('Validation Error', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <TextInput
          placeholder="Name"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
        <TextInput
          placeholder="Phone"
          value={phone}
          onChangeText={setPhone}
          style={styles.input}
        />
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          style={styles.input}
        />
        <Text style={styles.sectionTitle}>Select Courses</Text>
        {Object.keys(courses).map((course) => (
          <View key={course} style={styles.checkboxContainer}>
            <CheckBox
              value={selectedCourses[course] || false}
              onValueChange={() => handleCheckboxChange(course)}
            />
            <Text style={styles.checkboxLabel}>
              {course} - R{courses[course].fee}
            </Text>
          </View>
        ))}
        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        {/* Button Container for all buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.customButton} onPress={handleSubmit}>
            <Text style={styles.customButtonText}>Calculate Total Fees</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.customButton} onPress={handleReset}>
            <Text style={styles.customButtonText}>Reset Form</Text>
          </TouchableOpacity>

          {/* Back Button at the bottom */}
          <TouchableOpacity style={styles.customButton} onPress={() => navigation.goBack()}>
            <Text style={styles.customButtonText}>Back</Text>
          </TouchableOpacity>
        </View>

       
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2022 Empowering the Nation. All rights reserved.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a3d62',
  },
  section: {
    padding: 16,
    backgroundColor: '#0a3d62',
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#fff',
    color: '#0a3d62',
    padding: 8,
    borderRadius: 4,
    marginBottom: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  checkboxLabel: {
    color: '#fff',
    marginLeft: 8,
  },
  buttonContainer: {
      backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#1e3a8a',
    marginTop: 16,
    alignSelf: 'flex-start',
  },
  customButton: {
    backgroundColor: '#FFA500',
    paddingVertical: 12, // Consistent height
    paddingHorizontal: 20, // Add horizontal padding
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 8, // Consistent vertical spacing
    width: '100%', // Consistent width
    elevation: 3, // Add elevation for shadow effect
  },
  customButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginTop: 8,
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
});
