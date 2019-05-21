import React from 'react';
import { View, Text, FlatList, Image, Dimensions, StyleSheet, TouchableOpacity} from 'react-native';
const num = 2; 

class HomeScreen extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            isLoading: true,
            data: []
        }
    }

   
    componentDidMount(){
        fetch("https://product-catalog-api.herokuapp.com/products")
            .then(res => res.json())
            .then((response)=> {
            this.setState({
            isLoading: false,
            data: response.result
            })
        })
        .catch(error=>console.log(error))
        
    }

    FlatListItemSeparator = () => {
        return (
            <View style={{
                width:"100%",
                backgroundColor:"rgba(0,0,0,0.5)",
            }}
            />
        );
    }
    renderItem=(data)=>
    <View style={styles.containerStyle}>
        <TouchableOpacity onPress={()=> 
                this.props.navigation.navigate('Details',{
                    productName: data.item.productName,
                    productPrice: data.item.productPrice,
                    productImage: data.item.productImage})
        }>
            <Image 
                style={{height:100, width:'100%'}} 
                source={{uri: data.item.productImage}}
            />
            <Text style={{marginLeft: 10, marginVertical: 5}}>{data.item.productName}</Text>
            <Text style={{marginLeft: 10, marginVertical: 5}}>{data.item.productPrice}</Text>
        </TouchableOpacity>
        
    </View>
        
    render(){
        if(this.state.isLoading){
        return( 
            <View style={{flex: 1, alignItems: 'center',justifyContent: 'center'}}> 
                <Text style={{fontSize:20}}>loading..</Text>
            </View>
        )}else{
            return(
                <View>
                    <FlatList
                        data= {this.state.data}
                        keyExtractor={(item, index) => index}
                        renderItem= {item=> this.renderItem(item)}
                        numColumns={num}
                    />
                </View>
            )}
        }
    }

    const styles = StyleSheet.create({
        
        item : {
            margin :1,
            flex: 1,
        },
        containerStyle: {
            borderWidth: 2,
            borderRadius: 2,
            borderColor: '#ddd',
            borderBottomWidth: 3,
            shadowColor: '#000',
            shadowOffset: { width: 5, height: 5 },
            shadowOpacity: 0.8,
            shadowRadius: 5,
            elevation: 3.5,
            marginLeft: 5,
            marginRight: 5,
            marginTop: 10,
            flex: 1,
            marginVertical: 5,
          },
    });

  export default HomeScreen;