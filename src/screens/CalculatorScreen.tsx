import React from 'react'
import { View, Text} from 'react-native';
import { styles } from '../theme/AppTheme'
import { BotonCalc } from '../components/BotonCalc';
import { useCalcultator } from '../hooks/useCalcultator';


export const CalculatorScreen = () => {

  //tinggal kita panggl function dan anggota hooksnya panggil si hook sbgai function 
  const { 
    numb,
    prevNumb,
   Clean,
   assembleNumb,
   PositivNegativ,
   btnAdd,
   btnSub,
   btnDelete,
   btnDivide,
   btnMultiplier,
   Calculate} = useCalcultator()
    

  return (
    <View style={styles.calcContainer}>
         {
           (prevNumb !== '0' &&  <Text style={styles.txtResultSmall}>{prevNumb}</Text>)
          
         }
         
          
          
          <Text 
          style={styles.txtResult}
          //dibatasi 1 line saja dan besar font fit utk satu halaman
          numberOfLines={1}
          adjustsFontSizeToFit
          
          >{numb}</Text>
  
         {/* row 1 button */}
        <View style={styles.row} >
           <BotonCalc mytext='C' color='#9B9B9B' myaction={Clean}/>
           <BotonCalc mytext='+/-' color='#9B9B9B' myaction={PositivNegativ} />
           <BotonCalc mytext='del' color='#9B9B9B' myaction={btnDelete} />
           <BotonCalc mytext='/' color='#FF9427' myaction={btnDivide}/>
           
          </View>
         {/* row 2 button */}
        <View style={styles.row} >
           <BotonCalc mytext='7'  myaction={assembleNumb}/>
           <BotonCalc mytext='8'  myaction={assembleNumb}/>
           <BotonCalc mytext='9' myaction={assembleNumb} />
           <BotonCalc mytext='X'  color='#FF9427' myaction={btnMultiplier}/>
           
          </View>
         {/* row 3 button */}
        <View style={styles.row} >
           <BotonCalc mytext='4'  myaction={assembleNumb}/>
           <BotonCalc mytext='5'  myaction={assembleNumb}/>
           <BotonCalc mytext='6'  myaction={assembleNumb}/>
           <BotonCalc mytext='-' color='#FF9427' myaction={btnSub}/>
           
          </View>
         {/* row 4 button */}
         <View style={styles.row} >
           <BotonCalc mytext='1'  myaction={assembleNumb}/>
           <BotonCalc mytext='2'  myaction={assembleNumb}/>
           <BotonCalc mytext='3'  myaction={assembleNumb}/>
           <BotonCalc mytext='+' color='#FF9427' myaction={btnAdd} />
           
          </View>
         {/* row 5 button */}
         <View style={styles.row} >
           <BotonCalc mytext='0'  wide myaction={assembleNumb} />
           <BotonCalc mytext='.'  myaction={assembleNumb}/>
           <BotonCalc mytext='=' color='#FF9427' myaction={Calculate}/>
           
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

/*TAHAP 3:ASEMBELE NUMBER:
disini kita deteksi "." dot atau point yg dimasukan user 
antara lain :
  
//check jika negatif kita ganti dgn '' 


*/


/*
Pembuatan enum utk masing2 judul function kita bias gunakan enum 
pemberian digit number coutner secara tidak langsung pada string variable 
enum Operators {
  summ,subtract,divided,multiplier
}
nnti function changePrevNumber selalau dimasukan utk memasuka
current number(sbgi prevNumber) 
stlahnya baru calc tombol dipencel utk masukan 

nah kita masukan nnti useRef ,kita pakai userRef.cuurent diisi masug2
enum diatas dan nnti nilai digitnya masuk ke bagian switch pilihan 
yg mana nnti mengoperasikan logika masing2 butoon operator!

*/