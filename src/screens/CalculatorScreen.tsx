import React from 'react'
import { View, Text, SafeAreaView } from 'react-native';
import { styles } from '../theme/AppTheme'

export const CalculatorScreen = () => {
  return (
    <View style={styles.calcContainer}>
          <Text style={styles.txtResultSmall}>1,500.00</Text>
          <Text style={styles.txtResult}>1,500.00</Text>
  
          
        <View style={styles.row} >
          {/* button */}
          
            <View style={styles.Buton}> 
            <Text style={styles.txtButon}>1</Text>
            </View>
            
            <View style={styles.Buton}> 
            <Text style={styles.txtButon}>2</Text>
            </View>
            
            <View style={styles.Buton}> 
            <Text style={styles.txtButon}>3</Text>
            </View>
            
            <View style={styles.Buton}> 
            <Text style={styles.txtButon}>4</Text>
            </View>
        </View>
        
    </View>
  )
}
