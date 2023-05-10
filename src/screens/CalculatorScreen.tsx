import React, { useState,useRef } from 'react'
import { View, Text, SafeAreaView } from 'react-native';
import { styles } from '../theme/AppTheme'
import { BotonCalc } from '../components/BotonCalc';

//declare enum operators 
enum Operators {
  multiplier,divider,summ,subb
}


export const CalculatorScreen = () => {
  const ref = useRef<Operators>()
  const [prevNumb,setPrevNumb] = useState('0')
  const [numb,setNumb] = useState('0')


   //func Clean 
   const Clean =()=> {
    //numb adalah current angka atau angka saat ini 
    setNumb('0')
    
    setPrevNumb('0')
   }

   //func assembleNumb ini olah angka2 yg masuk pure angka 
   //ada banyak kriteria smua di check disini yg terpenting adalah 
   //masalah "dot" atau point 
   const assembleNumb =(numtext:string)=> {

     //1.check tidak terima dbouble dot '.'/ double point 
     if(numb.includes(".") && numtext === '.') return

     //1.jika start awal 0 dan -0 check angka berikutnya numtext( yg masuk) maka:
     if (numb.startsWith("0") || numb.startsWith('-0')) {
      
           //2.angka berikutnya adalah dot '.'  maka :
          if(numtext === '.') {
               //angka sekarang/curent(numb) + angkayg mngikuti(numtext)
                 setNumb(numb + numtext)
       
          //2.jika berikutnya nol setelah angka numb state ".'":ie  0.0 maka
             } else if(numtext === '0' && numb.includes(".")) {
                    setNumb(numb + numtext)
       
                //2.jika angka berikutnya tidak zero dan tidak ada sblumnya dot '.'
             }  else if (numtext !== '0' && !numb.includes('.') ){

                   //2.maka isi dgn numtext saja(angka arg slanjutnya)
                   setNumb(numtext)

                //2.jika penulisan selanjutnya  00000.0 /smacamnya 
             } else if (numtext === '0' && !numb.includes(".") ) {
                  //maka hindari dgn setNUmb(numb) angka yg sblunnya di setsaja yg uncul gak nambah2 
                 setNumb(numb)

               //2.jika normal tambahkan slalu state numb dgn angka berikutya (args) numtext
             } else {
                 setNumb(numb + numtext)
             }
     } else {
      //jika angka yg masuk bukan 0 dan -0 maka 
      ////angka sekarang/curent(numb) + angkayg mngikuti(numtext)
      setNumb(numb+numtext)
     }

     
   }

    //ini function +/- kasih label psotif /negatif pada angka 
   const PositivNegativ=()=> {
    //mngubah  negativ jadi postiv(ilagnin minya)
    if(numb.includes('-')){
      setNumb(numb.replace('-',''))
    } else {
      //ngubah angka postif jadi negatif
      setNumb('-' + numb)
    }
   }

    //delete angka2 palingkanaynya atau angka2 palingkanan trus kekiri 
    //selama tombol ini di press ingt substr itu ambil sesudah angka 
    //contoh substr(1) utk tulisan "hello" maka hasil yg dimabil adalah ello 

  const btnDelete =()=> {
     let Negative =""
     let tempNumb = numb  //kita set tempoerary number = current number(numb)
      //check jka current number negatig
     if(numb.includes("-")) {
        Negative ="-"
        //tempNumb berisi angka positg dimabil daru -cureent 
        //tanda "-" tidak diu=ikutsetakan 
        tempNumb = numb.substring(1)
     }

     // dibawah 
     //tanda - dari tempNumb sudah tak ada tempbNUb yg dicek > 1 berisi angka saja 
     //maka :
     if( tempNumb.length > 1 ){
      //tanda negativ disertakan dan curent number adalah 
      //- currentnumber yg diambil 1 digit angka sebelah paling-kanan
        setNumb(Negative + tempNumb.slice(0,-1))
     } else {
       //jika hanya 1 digit angka langsung kasih 0 saja 
       setNumb('0')
     }

  }    
   
    //dibagian ini kita akan taruh angka yhg kita tulis pada bagian numb (angka besat)
    //jika angka besar dihaups ,angka kecil(state prevNumb)  tetap simpan diatas nya (tetap kedisplay)
   //ini dipaakai setelah button calculation di pencet (+ ,/,-,*) 
   //masuk ke bagian num dipslay yg kecil dari command setPrevNumb(numb)
   //atay command setPrevNumb(numb.slice(0,-1)) kalau - (minus)
    const changePrevNumber =()=> {
        if(numb.endsWith('.')) {
          setPrevNumb(numb.slice(0,-1)) //ilangkin tanda titk paling kanan 
        } else {
          setPrevNumb(numb)
        }
        setNumb('0') //kita memang bermaksud nolkan curremt number ( angka besar pada display)
   }

    //operasi tambah 
    const btnAdd =()=> {
      changePrevNumber()
      ref.current = Operators.summ
    }

    //operasi kurang 
    const btnSub =()=> {
      changePrevNumber()
      ref.current = Operators.summ
    }

    //operasi bagi 
    const btnDivide =()=> {
      changePrevNumber()
      ref.current = Operators.divider
    }

    //operaasi kali 
    const btnMultiplier = ()=> {
      changePrevNumber()
      ref.current = Operators.multiplier
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