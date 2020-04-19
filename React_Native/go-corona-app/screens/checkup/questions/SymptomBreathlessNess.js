import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Divider, RadioButton } from 'react-native-paper';
import TermsImage from '../../../assets/images/IntersectionTerms.svg';


export default function SymptomBreathlessNess() {
    const [checkedItems, setCheckedItems] = useState({asthma:false,highBP:false,kidneyDisease:false,heartDisease:false,lungDisease:false,stroke:false,diabetes:false,no:false});
    const [values, setValues] = useState('first')
    const [valueNext, setValueNext] = useState('wlfob')

    const symptoms = [
        {
          name: 'While lying flat on bed',
          value: 'wlfob'
          
        },
        {
          name: 'At Night',
          value: 'an'
          
        },
        {
          name: 'Breathlessness that comes and goes',
          value: 'btcg'
         
        },
        {
            name: 'Breathlessness while exercising',
            value: 'bwe'
           
          },
        {
            name: 'Sudden feeling of breathlessness',
            value: 'sfb'
           
         },
        
      ];

    
  return (
    <ScrollView>
    <View style={styles.viewContainer}>
            <View style={styles.sectionContainer}>
            <Text style={styles.title}>Please tell us about your symptoms</Text>
            <TermsImage style={styles.image} width="120" height="120" />
            </View>
          <Text style={styles.textSty}>Are you feeling breathless?</Text> 
          <Divider  />
          <View  style={styles.agreeContainer}>
          <RadioButton.Group
          onValueChange={values => setValues(values)}
          value={values}
           >
          <View style={styles.agreeContainer}>
          <View style={styles.radAlign}>
           <RadioButton.Android value="first" color="#E03D51" uncheckedColor="#D2D2D2" />
           <Text style={styles.radTxt}>Yes</Text>
           </View>
           <Divider  />
          </View>
          <View  style={styles.agreeContainer}>
            <View style={styles.radAlign}>
            <RadioButton.Android value="second" color="#E03D51" uncheckedColor="#D2D2D2" />
            <Text style={styles.radTxt}>No</Text>
            </View>
            <Divider />
          </View>
        </RadioButton.Group>
        </View>
        <Text style={styles.textSty}>If yes, select one of the following?</Text> 
        <View  style={styles.agreeContainer}>
        <RadioButton.Group
        onValueChange={valueNext => setValueNext(valueNext)}
        value={valueNext}
         >
        { symptoms.map((item)=>(
        <View style={styles.agreeContainer} key={item.value}>
        <View style={styles.radAlign} key={item.value}>
         <RadioButton.Android value={item.value} color="#E03D51" uncheckedColor="#D2D2D2" />
         <Text style={styles.radTxt}>{item.name}</Text>
         </View>
         <Divider  />
        </View>
            )
            )}
      </RadioButton.Group>
        
      </View>
         
        
    </View>
</ScrollView>
  );
}

const styles = StyleSheet.create({
  viewContainer: {
      flex: 1,
      backgroundColor: '#fafafa',
      justifyContent: 'flex-start'
  },
  container: {
      justifyContent: 'center'
  },
  contStyle:{
    borderWidth: 0
  },
  sectionContainer: {
      marginTop: 40,
      marginBottom: 5,
      alignItems: 'center',
  },
  title: {
      fontSize: 18,
      fontWeight: "bold",
      marginLeft:10,
      marginBottom:25
  },
  helpLinks: {
      marginTop: 30,
      padding: 5,
      width: "90%"
  },
  subTitle:{
    alignSelf:'flex-start', 
    marginLeft:25,
  },
  agreeContainer: {
    marginLeft: 10,
    marginRight: 10,
    flexDirection:'column'
  },
  txtStyle:{
    fontWeight: 'normal'
  },
  textSty:{
    marginLeft:24,
    marginBottom:20,
    marginTop: 40
  },
  radAlign:{
    flexDirection:'row'
  },
  radTxt:{
    marginTop:8
  }
});