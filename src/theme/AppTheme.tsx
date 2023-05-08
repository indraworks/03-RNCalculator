//disini tempat smua temapt cssnya RN alias template styleSheetnya yg akan dipakai oleh 
// module yg lainya 
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo:{flex:1,backgroundColor:'black'},
    calcContainer:{
        flex:1,
        paddingHorizontal:20,
        //justifyContent:'flex-end',
        backgroundColor:'black',
        justifyContent:'flex-end'
        //flex end taruh kebawah tujuannya agar memang berada dibawah 
        //nanti dibawahnya text reseult akan ada banyak row2 button
        //nanh 3sd 4 baris ini ngisi dan desak mereka keatas dengan sndirinya 
        //maksudnya adalah jika nnti sudah penuh nnti akan ada 
        //ruang diatas space 
      
    },
    txtResult:{
        color:'white',
        fontSize:60,
        textAlign:'right',
        marginBottom:10},
        
    txtResultSmall:{
        color:'rgba(255,255,255,0.5)',
        fontSize:30,
        textAlign:'right'
    },
    row:{
        flexDirection:'row',
        justifyContent:'center',
        marginBottom:10,
        paddingHorizontal:10
    },
    Buton:{
        height:70,
        width:70,
        borderRadius:100,
        justifyContent:'center',
        marginHorizontal:10,
        // backgroundColor:'#2d2d2d'
        backgroundColor:'#9b9b9b'
    },
    txtButon:{
        textAlign:'center',
        padding:10,
        fontSize:25,
        // color:'white',
        color:'black',
        fontWeight:'300'
    }

});

//utk fondo dipakai pada Ap.tsx atur containernya yg berisi CalculatorSCreen 
//sedangnkan utk Container adalah utk atur flex pada CalculatorScreen 


