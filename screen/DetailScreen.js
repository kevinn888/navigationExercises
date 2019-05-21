import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';

class DetailsScreen extends React.Component {
    static navigationOptions = {
      title: 'detail page',
      headerStyle: {
        backgroundColor: 'grey',
      },
      headerTitleStyle: {
        alignSelf: 'center',
        textAlign : 'center',
      }
    }
    render() {
      const { navigation } = this.props;
      const productName = navigation.getParam('productName', 'product-name');
      const productPrice = navigation.getParam('productPrice', 'product-price');
      const productImage = navigation.getParam('productImage', 'product-image');

      return (
        <View style={styles.item}>
          <Text>{productName}</Text>
          <Image style={{marginVertical: 20, height:250, width:'100%'}}source={{uri: productImage}}/>
          <Text>{productPrice}</Text>
        </View>
      );
    }  
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 20,
    },
    item : {
        margin :20,
        flex: 1,
    },
});

  export default DetailsScreen;