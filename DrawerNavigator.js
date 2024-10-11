import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Image, Text } from 'react-native';
import HomeScreen from './Homescreen';
import AboutScreen from './AboutScreen';
import SixWeeks from './SixWeeks';
import ContactScreen from './ContactScreen';
import SixMonths from './SixMonths';
import Enquiry from './Enquiry';
import Invoice from './Invoices'
import FirstAid from './FirstAid';
import Sewing from './Sewing';
import Landscaping from './LandScaping';
import LifeSkills from './LifeSkills';
import ChildMinding from './ChildMinding';
import GardenMaintence from './GardenMaintence';
import Cooking from './Cooking';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitle: () => (
          <View style={{  ...StyleSheet.absoluteFillObject,
    top: 1,
    left :210, }}>
           
            <Image source={require('./Images/Logo.png')} style={{ width: 50, height: 50 ,borderRadius: 60}} />
          </View>
        ),
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
      <Drawer.Screen name="Contact" component={ContactScreen} />
      <Drawer.Screen name="Six weeks" component={SixWeeks} />
      <Drawer.Screen name="Six Months" component={SixMonths} />
      <Drawer.Screen name="Calculate fees" component={Enquiry} />
       <Drawer.Screen name="Invoice" component={Invoice} />
       <Drawer.Screen name="First Aid" component={FirstAid} />
        <Drawer.Screen name="Sewing" component={Sewing} />
        <Drawer.Screen name="LandScaping" component={Landscaping} />
        <Drawer.Screen name="LifeSkills" component={LifeSkills} />
        <Drawer.Screen name="ChildMinding" component={ChildMinding} />
      <Drawer.Screen name="Garden Maintence" component={GardenMaintence} />
      <Drawer.Screen name="Cooking" component={Cooking} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;