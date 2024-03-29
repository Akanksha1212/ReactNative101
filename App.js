import React from 'react'
import {
  View,
  Button,
  TextInput,
  StyleSheet
} from 'react-native'

export default class SignUp extends React.Component {
  state = {
    Name: '', Reference_id : '', Organisation_Name: '',Registration_Number: '', 
    phone_number: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  signUp = async () => {
    const { Name, Reference_id, Organisation_Name,Registration_Number, phone_number } = this.state
    try {
      // here place your signup logic
     // console.log('user successfully signed up!: ', success)
    } catch (err) {
      console.log('error signing up: ', err)
    }
  }
 
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Name'
          autoCapitalize="none"
          placeholderTextColor='black'
          onChangeText={val => this.onChangeText('Name', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Reference Id'
         // secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='black'
          onChangeText={val => this.onChangeText('Reference_id', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Organisation Name'
          autoCapitalize="none"
          placeholderTextColor='black'
          onChangeText={val => this.onChangeText('Organisation_name', val)}
        />
          <TextInput
          style={styles.input}
          placeholder='Registration Number'
         // secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='black'
          onChangeText={val => this.onChangeText('Registration Number', val)}
        />

        <TextInput
          style={styles.input}
          placeholder='Phone Number'
          autoCapitalize="none"
          placeholderTextColor='black'
          onChangeText={val => this.onChangeText('phone_number', val)}
        />
        <Button
          title='Sign Up'
          onPress={this.signUp}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: 'pink',
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  }
});
