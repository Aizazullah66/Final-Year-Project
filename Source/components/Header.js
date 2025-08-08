import { StyleSheet, Text, View,Dimensions} from 'react-native'
import React from 'react'
import { colors,parameter } from '../global/Styles'
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
 

const Header = ({title,type}) => {
  return (
    <View style={styles.header}>
        <MaterialCommunityIcons name={type}  size={25}  color={colors.headertext} style={{marginLeft:15}}
        onPress={()=>{

        }}
        />
        <View>
            <Text style={styles.headertext}>{title}</Text>
        </View>
      
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    header:{
        backgroundColor:colors.buttons,
        flexDirection:"row",
        height:parameter.headerHeight
    },

    headertext:{
        color:colors.headertext,
        fontSize:22,
        fontWeight:"bold",
        marginLeft:38

    }
})