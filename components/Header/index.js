import React from 'react';
import styles from './styles';
import { Text, View, FlatList, Dimensions, Image} from 'react-native';

const Header = () => {
    
    return (
        <View style={styles.conatiner}>
            <Image source={require('../../assets/images/logo.png')} style={styles.logo} />
            {/* <Image source={require('../../assets/images/menu.png')} style={styles.menu} /> */}
        </View>
    );
}

export default Header;