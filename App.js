
import React, {Component, PropTypes} from 'react';
import { StackNavigator } from 'react-navigation';
import {AppRegistry,Button, StyleSheet, View, Image, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';


class LoginScreen extends React.Component{
  // static navigationOptions = {
  //   title: 'MazuMah'
  // };


  // this.state = {
  //     username: '',
  //     password: '',
  //     error: null,
  //   };
  // }

  // isValid(){
  //  const { username, password } = this.state;
  //   let valid = false;

  //   if (username.length > 0 && password.length > 0) {
  //     valid = true;
  //   }

  //   if (username.length === 0) {
  //     this.setState({ error: 'You must enter a username' });
  //   } else if (password.length === 0) {
  //     this.setState({ error: 'You must enter a password' });
  //   }

  //   return valid;
  // }


  // }


  render(){
    const { navigate } = this.props.navigation;
    return(
      <KeyboardAvoidingView behavior = "padding" style={Loginstyles.container}>
        <View style={Loginstyles.logoContainer}>
          <Text style = {Loginstyles.title}>MazuMah</Text>
        </View>
        <View style={Loginstyles.formContainer}>
         <Image

          style={Loginstyles.image}
          source={require('./MMLogo.png')}
        />

          <TextInput
            placeholder ="Username"
            onChangeText={(username) => this.setState({username})}
            placeholderTextColor = "#808080"
            returnKeyType = "next"
            style = {Loginstyles.input}
            onSubmitEditing={() => this.pwInput.focus()}
            />


          <TextInput
            placeholder ="Password"
            onChangeText={(password) => this.setState({password})}
            placeholderTextColor = "#808080"
            secureTextEntry={true}
            returnKeyType = "go"
            style = {Loginstyles.input1}
            ref= {(input) => this.pwInput = input}
            />

          <View style={Loginstyles.buttonContainer}>

            <Button
              onPress={() => navigate('Dashboard')}
              title="Login"
              color= "#D3A15D"
            />
           </View>
           <View style={Loginstyles.buttonContainer}>

            <Button
              onPress={() => navigate('Dashboard')}
              title="Create Account"
              color= "#D3A15D"
            />
           </View>
           <View style={Loginstyles.buttonContainer}>

            <Button
              onPress={() => navigate('Profile')}
              title="Continue Without Account"
              color= "#D3A15D"
            />
           </View>
          </View>
      </KeyboardAvoidingView>
    );
  }

}

const Loginstyles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#000000'
  },
  image:{
     width: 360,
     height: 300,
     top: -80
  },
  logoContainer:{
    alignItems: 'center',
    flexGrow: 1,
    paddingTop: 150,
    paddingLeft: 300,
  },
  title:{
    color: '#D3A15D',
    //textAlign: 'center',
    fontFamily: 'Courier New',
    width: 478,
    fontWeight: 'bold',
    fontSize: 40,
    top: -80
  },
  input:{
    borderRadius: 10,
    marginRight: 60,
    marginLeft: 60,
    marginBottom: 15,
    height: 40,
    top: -80,
    backgroundColor: 'rgba(255,255,255,.7)'
  },
  input1:{
    borderRadius: 10,
    marginRight: 60,
    marginLeft: 60,
    marginBottom: 15,
    height: 40,
    top: -80,
    backgroundColor: 'rgba(255,255,255,.7)'
  },
  submitForm:{
    color: 'black',
    width: 150
  },
  buttonContainer:{
    alignItems: 'center',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    paddingLeft: 50,
    paddingRight: 60,
    marginBottom: 10,
    marginTop: 10,
    top: -80,
    // borderWidth: 1,
    borderColor: '#D3A15D',
  },
  buttonContainer1:{
    alignItems: 'center',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    paddingLeft: 50,
    paddingRight: 60,
    marginBottom: 10,
    marginTop: 10,
    top: -80,
    // borderWidth: 1,
    borderColor: '#D3A15D'
  },
  contNoAccount:{
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
    top: -80,
    // borderWidth: 1,
    borderColor: '#D3A15D'
  },
  buttonText:{
    color: '#D3A15D',
    fontFamily: 'Courier New',
    fontWeight: 'bold',
  },
  buttonText1:{
    color: '#D3A15D',
    fontFamily: 'Courier New',
    fontWeight: 'bold',
  },
  buttonText2:{
    color: '#D3A15D',
    fontFamily: 'Courier New',
    fontWeight: 'bold',
  }
})

class MainScreen extends React.Component{
  static navigationOptions = {
    title: 'Dashboard',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={MainStyle.pageContainer}>
          <View style={MainStyle.topContainer}>
            <Text style = {{color: 'white', textAlign: 'center'}}>Welcome To Your Dashboard</Text>
              <Button
                onPress={() => navigate('Profile')}
                title="See Your Profile"
                color= "#D3A15D"
              />
          </View>
          <View style={MainStyle.midContainer}>
            <Text style={MainStyle.graphTitle}> Owner Metrics</Text>
          </View>
          <View style={MainStyle.botContainer}>
            <Text style={MainStyle.botTitle}>Price:</Text>
            <Text style={MainStyle.botTitle}># of Miners:</Text>
            <Text style={MainStyle.botTitle}># of Commits:</Text>
            <Text style={MainStyle.botTitle}># of Clients:</Text>
          </View>
      </View>

    );
  }
}

const MainStyle = StyleSheet.create({
  pageContainer:{
    flex:1
  },
  topContainer:{
    flex: 1,
    flexDirection: 'column',
    width:375,
    height: 50,
    backgroundColor: 'black'
  },
  midContainer:{
    flex: 1,
    flexDirection: 'column',
    width:375,
    backgroundColor: 'grey',
    paddingBottom: 250
  },
  botContainer:{
    flex: 1,
    flexDirection: 'column',
    width:375,
    height: 50,
    backgroundColor: 'black',
  },
  graphTitle:{
    color: '#D3A15D',
    paddingLeft: 100,
    fontFamily: 'Courier New',
    fontWeight: 'bold',
    fontSize: 20,
  },
  botTitle:{
    paddingTop:10,
    color: '#D3A15D',
    fontFamily: 'Courier New',
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 90
  }
})




class ProfileScreen extends React.Component{
  static navigationOptions = {
    title: 'Profile Page',
  };
  getInitialState() {
    return {
      groupTypes: 'SavedPhotos',
      sliderValue: 1,
      bigImages: true,
    };
  }
  render() {
    return (


        <View style={Profilestyles.logoContainer}>
          <Text style={Profilestyles.title}>Welcome To Your Profile!</Text>
        </View>
       


    );
  }
  
}

const Profilestyles = StyleSheet.create({
  logoContainer:{
      alignItems: 'center',
      flexGrow: 1,
      paddingTop: 20,

  },
  title:{
      textAlign: 'center',
      fontFamily: 'Courier New',
      width: 300,
      fontWeight: 'bold',
      fontSize: 30,


  }


})





export const SimpleApp = StackNavigator ({
  Login: { screen: LoginScreen },
  Dashboard: { screen: MainScreen },
  Profile: { screen: ProfileScreen },
});

export default class App extends React.Component {

  render() {
    return <SimpleApp />;
  }

}

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
