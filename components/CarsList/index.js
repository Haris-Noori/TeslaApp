import React from 'react';
import styles from './styles';
import { Text, View, FlatList, Dimensions} from 'react-native';
import cars from './cars';
import CarItem from '../CarItem';

const CarsList = (props) => {
    console.log(cars);
    return (
        <View style={styles.conatiner}>
            <FlatList 
                data={cars}
                renderItem={({item}) => <CarItem car={item} />}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={Dimensions.get('window').height}
            />
        
        </View>
    );
}

export default CarsList;