import React, { useState } from 'react'
import { View, Text, SafeAreaView } from 'react-native';
import { styles } from '../theme/AppTheme'
import { BotonCalc } from '../components/BotonCalc';

export const CalculatorScreen = () => {
  const [prevNumb,setPrevNumb] = useState('0')
  const [numb,setNumb] = useState('0')


   //func Clean 
   const Clean =()=> {
    setNumb('0')
   }

   //func assembleNumb ini olah angka2 yg masuk pure angka 
   const assembleNumb =(numtext:string)=> {
     setNumb(numb+numtext) //num yg sekarang ditambah prevNumb
     //atau ditambah num yg diinput sblumnya 
   }


  return (
    <View style={styles.calcContainer}>
          <Text style={styles.txtResultSmall}>{prevNumb}</Text>
          <Text 
          style={styles.txtResult}
          //dibatasi 1 line saja dan besar font fit utk satu halaman
          numberOfLines={1}
          adjustsFontSizeToFit
          
          >{numb}</Text>
  
         {/* row 1 button */}
        <View style={styles.row} >
           <BotonCalc mytext='C' color='#9B9B9B' myaction={Clean}/>
           <BotonCalc mytext='+/-' color='#9B9B9B' myaction={Clean} />
           <BotonCalc mytext='del' color='#9B9B9B' myaction={Clean} />
           <BotonCalc mytext='/' color='#FF9427' myaction={Clean}/>
           
          </View>
         {/* row 2 button */}
        <View style={styles.row} >
           <BotonCalc mytext='7'  myaction={assembleNumb}/>
           <BotonCalc mytext='8'  myaction={assembleNumb}/>
           <BotonCalc mytext='9' myaction={assembleNumb} />
           <BotonCalc mytext='X'  color='#FF9427' myaction={Clean}/>
           
          </View>
         {/* row 3 button */}
        <View style={styles.row} >
           <BotonCalc mytext='4'  myaction={assembleNumb}/>
           <BotonCalc mytext='5'  myaction={assembleNumb}/>
           <BotonCalc mytext='6'  myaction={assembleNumb}/>
           <BotonCalc mytext='-' color='#FF9427' myaction={Clean}/>
           
          </View>
         {/* row 4 button */}
         <View style={styles.row} >
           <BotonCalc mytext='1'  myaction={assembleNumb}/>
           <BotonCalc mytext='2'  myaction={assembleNumb}/>
           <BotonCalc mytext='3'  myaction={assembleNumb}/>
           <BotonCalc mytext='+' color='#FF9427' myaction={Clean} />
           
          </View>
         {/* row 5 button */}
         <View style={styles.row} >
           <BotonCalc mytext='0'  wide myaction={assembleNumb} />
           <BotonCalc mytext='.'  myaction={assembleNumb}/>
           <BotonCalc mytext='=' color='#FF9427' myaction={Clean}/>
           
          </View>
        
    </View>
  )
}
/*
ini yg oertama nnti dipisah masukan kecomponent sprti biasa di beri interface 
supaya props masuk sesuai typenya 
dan utk props2nya dimasukan berdasarkan style color tulisan dan color bakground 
kita akan pake touchabel opacity utk buat buttonya 
dan component/buttonCalc 
props2 apa saja yg akan masuk :
-textBtn utk warna text di tombol yg beda2
-color?  dikasih default optional pada interface, utk bacground color yg gak masuk otomatis gelap ,
        ada 2 ilihan  utk selajutnya jika ada masuk props warna pilihan abu atau orange 
-wide? ini juga sama dikasih optional default kalau dia true brarti widthnya kalau false brarti dia 80 
lingkar biasa 

-fucntion dgn nama actionBtn: fuction void  ():void=> {}
         yg mana berfungsi utk keypress 
         onPress={()=>actionBtn(textBtn)} 

*/

/*
TAHAP 2 stelah diatas selsasai kita buat hook Calculator 
utk proses function2 dari tombol2 tsb diatas ktika touchable nya di press atau ditaekan 
nah statenya di pasang di CalculatorScreen myNumber,setMyNumber



*/