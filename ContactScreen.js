import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image, StyleSheet, Alert } from 'react-native';

export default function App({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [confirmation, setConfirmation] = useState(''); // New state for confirmation message

  const handleSend = () => {
    if (name && email && message) {
      setConfirmation(`Thank you, ${name}! Your message has been sent. We'll respond to ${email}.`);
      // Reset form after submission
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setConfirmation('Please fill out all fields.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <SectionTitle title="Phone Numbers" />
        <ContactInfo icon={require('./Images/PhoneIcon.webp')} details={['+27 83 657 3969', '+27 76 833 7925']} />

        <SectionTitle title="Email Address" />
        <ContactInfo icon={require('./Images/Email.png')} details={['Empoweringthenation@gmail.com']} />

        <SectionTitle title="Physical Address" />
        <ContactInfo 
          icon={require('./Images/Address.png')} 
          details={['Sandton, Waterstone Drive, Benmore Rd, Sandton, 2196']} 
        />
      </View>

      {/* Map Section */}
      <View style={styles.mapSection}>
        <MapSection title="Sandton" address="Waterstone Drive, Benmore Rd, Sandton, 2196" />
          <Image source={require('./Images/Screenshot1.png')} style={styles.image} />
        <MapSection title="Bryanston" address="399 Ballyclare Dr, Bryanston, Sandton, 2120" />
          <Image source={require('./Images/Screenshot2.png')} style={styles.image} />
        <MapSection title="Rosebank" address="15A Cradock Ave, Rosebank, Johannesburg, 2196" />
          <Image source={require('./Images/Screenshot3.png')} style={styles.image} />
      </View>

      {/* Centered Image Section */}
      <View style={styles.imageContainer}>
        <Image source={require('./Images/Johannesburg-Skyline.jpg')} style={styles.image} />
      </View>

      {/* Message Form Section */}
      <View style={styles.section}>
        <SectionTitle title="Send us a message" />
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#ccc"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#ccc"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.textarea}
          placeholder="Message"
          placeholderTextColor="#ccc"
          multiline
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.button} onPress={handleSend}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>

        {/* Confirmation Message */}
        {confirmation ? (
          <Text style={styles.confirmationText}>{confirmation}</Text>
        ) : null}
      </View>

      {/* Back to Home Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => {
          console.log("Navigating back to HomeScreen");
          navigation.navigate('Home'); // Ensure 'Home' matches the screen name in your DrawerNavigator
        }}
      >
        <Text style={styles.buttonText}>Back to Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// Reusable Components
const SectionTitle = ({ title }) => (
  <Text style={styles.sectionTitle}>{title}</Text>
);

const ContactInfo = ({ icon, details }) => (
  <>
    <Image source={icon} style={styles.icon} />
    {details.map((detail, index) => (
      <Text style={styles.text} key={index}>{detail}</Text>
    ))}
  </>
);

const MapSection = ({ title, address }) => (
  <View style={styles.mapContainer}>
    <Text style={styles.mapTitle}>Map Directions to Empowering the Nation - {title}</Text>
    <Text style={styles.mapAddress}>Address: {address}</Text>
  </View>
);

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#002B45',
  },
  content: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 8,
  },
  text: {
    color: '#fff',
    marginTop: 4,
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 16,
  },
  image: {
    width: '90%',
    height: 170,
    borderRadius: 8,
  },
  mapSection: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  mapContainer: {
    marginBottom: 24,
  },
  mapTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  mapAddress: {
    color: '#ccc',
    marginBottom: 12,
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 8,
    marginBottom: 12,
    color: '#fff',
  },
  textarea: {
    height: 80,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 8,
    marginBottom: 12,
    color: '#fff',
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  confirmationText: {
    marginTop: 10,
    color: '#F1F3F4',
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: '#FFA500',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 10,
    alignSelf: 'center',
  },
});
