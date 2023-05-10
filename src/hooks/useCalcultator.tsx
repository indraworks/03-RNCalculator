import {useRef,useState} from 'react'

//declare enum operators 
enum Operators {
    multiplier,divider,summ,subb
  }
  


export const useCalcultator = () => {
  
    const ultima_ref = useRef<Operators>()

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
     const PositivNegativ =() => {
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
        ultima_ref.current = Operators.summ
      }
  
      //operasi kurang 
      const btnSub =()=> {
        changePrevNumber()
        ultima_ref.current = Operators.subb
      }
  
      //operasi bagi 
      const btnDivide =()=> {
        changePrevNumber()
        ultima_ref.current = Operators.divider
      }
  
      //operaasi kali 
      const btnMultiplier = ()=> {
        changePrevNumber()
        ultima_ref.current = Operators.multiplier
      }
  
      
      const Calculate =()=> {
        const num1 = Number(numb)
        const num2 = Number(prevNumb)
        
        //pilihan dengan switch 
        switch (ultima_ref.current) {
              case Operators.summ:
                setNumb(`${num1 + num2}`)
                break;
              case Operators.subb:
                setNumb(`${num2 - num1}`)
                break;
              case Operators.divider:
                setNumb(`${num2 / num1}`)
                break;
              case Operators.multiplier:
                setNumb(`${num1 * num2}`)
                break;
  
  
               default: 
                 break; 
  
        }
        
           setPrevNumb('0')
  
      }
  
     //kalau return yg bukan jsx maka return {} //ingat selaku pake tanda kurung kurawal
     //kalau return yg jsx  maka return () selalu pake tanda kurung ()

    return {
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
       Calculate
    }
      
  
}
