import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import DetailsScreen from './screen/DetailScreen';
import HomeScreen from './screen/HomeScreen';

class MainScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text 
          style={{fontSize: 30}}
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Home' })
              ],
            }))
          } }>simple catalog</Text>
      </View>
    );
  }  
}


const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      header : null,
    }
  },
  Details: {
    screen: DetailsScreen,
   
  },
  Main: {
    screen: MainScreen,
    navigationOptions: {
      header : null,
    }
  },
}, {
    initialRouteName: 'Main',
});


export default createAppContainer(AppNavigator);