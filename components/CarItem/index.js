import React from 'react';
import styles from './styles';
import StyledButton from '../StyledButton';
import {
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
} from 'react-native';

const CarItem = (props) => {

    const {name, tagline, image} = props.car;

    return (
        <View style={styles.carContainer}>

            <ImageBackground 
            source={image}
            style={styles.image}
            />

            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <Text style={styles.subTitle}>{tagline}</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <StyledButton 
                    type="primary"
                    content={"Custom Order"}
                    onPress={() => {
                        console.log('Custom Order Button pressed')
                    }}
                />

                <StyledButton 
                    type="secondary"
                    content={"Existing Inventory"}
                    onPress={() => {
                        console.log('Existing Inventory Button pressed')
                    }}
                />
            </View>

        </View>
    );
}

export default CarItem;