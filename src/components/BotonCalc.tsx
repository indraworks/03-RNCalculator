import React from 'react'
import {Text,TouchableOpacity,View} from 'react-native'
import { styles } from '../theme/AppTheme'

interface Props {
    mytext:string,
    color?:string,
    wide?:boolean,
    myaction:(numText:string)=>void //dibuat optional biar gak error yg lain yg belm di pasing 
    //nnti optional hilang kita pakai arg masuk !
}

//color backroudn default dia hitam 
//nah nnti diisi manual sndiri yaitu abu: #9B9B9B 
//dan column kana terakhir orange #FF9427
//utk warna text tinggal pilih kalau yg background masuk abu dia text color black 
//kalau slain itu maka putih!
export const BotonCalc = ({mytext,color="#2D2D2D",wide=false,myaction }:Props) => {
  return (
    <TouchableOpacity
      onPress={()=>myaction(mytext)} //pada saat dipress diaterima isi text masing2 button 
    >
        <View style={{
            ...styles.Buton,
            backgroundColor:color,
            width:(wide)?150:70
        }}> 
            <Text style={{...styles.txtButon,
             color:(color==="#9B9B9B")?'black':'white'
            }}>{mytext}</Text>
        </View>    
    </TouchableOpacity>
  )
}

/*
Keterangan utk Propsnya :
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



