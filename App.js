import React, { useState } from "react";
import { Button, View,StyleSheet, Text, TouchableOpacity, Alert, ImageBackground } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';


const SelectorTimePicker = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [esreloj2visible, setreloj2visible] = useState(false);

  const [selectedDate, setselectedDate] = useState('Fecha');
  const [selectedTime, setselecteTime] = useState('horario');
  const [horaseleccionada, sethoraseleccionada] = useState('horario');

  const [diferencia, setdiferencia] = useState('resultado');

  const [ulteta, setulteta] = useState('ulteta');

  
//SELECTOR FECHA
   const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    const dt = new Date(date);
    const x = dt.toISOString().split('T');
    const x1 = x[0].split('-');
    setselectedDate(x1[2] + '/' + x1[1] + '/' + x1[0]);
    hideDatePicker();
  };
////////-----------------

//SELECTOR HORARIO
const showTimePicker = () => {
  setTimePickerVisibility(true);
};

const hideTimePicker = () => {
  setTimePickerVisibility(false);
};

///// HORARIO-2

const motrarreloj2 = () => {
  setreloj2visible(true);
};

const cerrarreloj2 = () => {
  setreloj2visible(false);
};



const calcular = ()=>{
  // Convertir a milisegundos
 const ST = moment(selectedTime, 'HH:mm').toDate(); 
 var selectedTimeMS = ST.getTime(); 

 const HS = moment(horaseleccionada, 'HH:mm').toDate();
 var horaseleccionadaMS = HS.getTime(); 

 // Restar las fechas para obtener la diferencia en milisegundos
var differenceMS = horaseleccionadaMS - selectedTimeMS;

// Convertir la diferencia a un horario
var difference = new Date(differenceMS);

////////////////////// prueba para extraer horario de ETD

//// Descuentos segun horario ETD--------
var STh = ST.getHours();
var STm = ST.getMinutes();
var multiplo = 0; ////la var multiplo marca la multiplicacion de la hora segun presentacion-----

if(STh == 0){
multiplo = 3;

}if(STh == 1){
  multiplo = 2.5;

}if(STh == 2){
  multiplo = 2;

}if(STh == 3){
  multiplo = 1.5;

}if(STh == 4){
  multiplo = 1;

}if(STh == 5){
  multiplo = 0.5;
}
///////////////------------------------------

var hours = difference.getUTCHours();
var minutes = difference.getUTCMinutes();
setdiferencia(hours + ':' + minutes);

// Calculo de ULTIMO ATERRIZAJE SEGUN PRESENTACION
 var ultetaMS = selectedTimeMS + ((3600000 * 13) - (3600000 * multiplo));
 var ultetaDate = new Date(ultetaMS);

 var ultH = ultetaDate.getHours();
 var ultM = ultetaDate.getMinutes();
 var Hfinal = ultH.toString();
 var Mfinal = ultM.toString().padStart(2,'0');
 console.log(Hfinal + ':' + Mfinal);

 setulteta(ultetaDate.getHours() + ':' + ultetaDate.getMinutes().toString().padStart(2,'0') + ' ETA');
/////------------------------------------------------------

if(STh != 0 && STh != 1 && STh != 2 && STh != 3 && STh != 4 && STh != 5 ){

//Calculo segun ETA/////////////////////////////////////////////////////////
if(ultetaDate.getHours() == 0){
ultetaMS = ultetaMS - 3600000/2;
ultetaDate = new Date(ultetaMS);
setulteta(ultetaDate.getHours() + ':' + ultetaDate.getMinutes()+ ' ETA');

}if(ultetaDate.getHours() == 1){
  ultetaMS = ultetaMS - 3600000 * 1;
  ultetaDate = new Date(ultetaMS);
  setulteta(ultetaDate.getHours() + ':' + ultetaDate.getMinutes() + ' ETA');

}if(ultetaDate.getHours() == 2){
  ultetaMS = ultetaMS - 3600000*1.5;
  ultetaDate = new Date(ultetaMS);
  setulteta(ultetaDate.getHours() + ':' + ultetaDate.getMinutes() + ' ETA');

}if(ultetaDate.getHours() == 3){
  ultetaMS = ultetaMS - 3600000*2;
  ultetaDate = new Date(ultetaMS);
  setulteta(ultetaDate.getHours() + ':' + ultetaDate.getMinutes() + ' ETA');
  console.log(ulteta);

}if(ultetaDate.getHours() == 4){
  ultetaMS = ultetaMS - 3600000*2.5;
  ultetaDate = new Date(ultetaMS);
  setulteta(ultetaDate.getHours() + ':' + ultetaDate.getMinutes() + ' ETA');

}if(ultetaDate.getHours() == 5){
  ultetaMS = ultetaMS - 3600000*3
  ultetaDate = new Date(ultetaMS);
  setulteta(ultetaDate.getHours() + ':' + ultetaDate.getMinutes() + ' ETA');

}if(ultetaDate.getHours() == 6){
  ultetaMS = ultetaMS - 3600000*3
  ultetaDate = new Date(ultetaMS);
  setulteta(ultetaDate.getHours() + ':' + ultetaDate.getMinutes() + ' ETA');

}if(ultetaDate.getHours() == 7 ){
  ultetaMS = ultetaMS - 3600000*3
  ultetaDate = new Date(ultetaMS);
  setulteta(ultetaDate.getHours()+ ':' + ultetaDate.getMinutes() + ' ETA');

}if(ultetaDate.getHours() == 8){
  ultetaMS = ultetaMS - 3600000*3
  ultetaDate = new Date(ultetaMS);
  setulteta(ultetaDate.getHours() + ':' + ultetaDate.getMinutes() + ' ETA');

}if(ultetaDate.getHours() == 9){
  ultetaMS = ultetaMS - 3600000*3
  ultetaDate = new Date(ultetaMS);
  setulteta(ultetaDate.getHours() + ':' + ultetaDate.getMinutes() + ' ETA');

}if(ultetaDate.getHours() == 10){
  ultetaMS = ultetaMS - 3600000*3
  ultetaDate = new Date(ultetaMS);
  setulteta(ultetaDate.getHours() + ':' + ultetaDate.getMinutes() + ' ETA');

}if(ultetaDate.getHours() == 11){
  ultetaMS = ultetaMS - 3600000*3
  ultetaDate = new Date(ultetaMS);
  setulteta(ultetaDate.getHours() + ':' + ultetaDate.getMinutes() + ' ETA');
}

}
  ultetaMS = ultetaMS - 3600000/2;
  ultetaDate = new Date(ultetaMS);
  setulteta(ultetaDate.getHours() + ':' + ultetaDate.getMinutes().toString().padStart(2,'0') + ' ETA');
 
};


    return (
   //   <View style={Styles.contenedor}>

        <ImageBackground source={require('./assets/sky1.jpg')} style={Styles.fondo}>
      
        <TouchableOpacity style={Styles.botones}
        onPress={()=>{showDatePicker();}}
        >
        <Text>{selectedDate}</Text>
        </TouchableOpacity>
        
        <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode='date'
        onConfirm={handleConfirm}
        onCancel={hideDatePicker} />

        
<TouchableOpacity style={Styles.botones}
        onPress={()=>{showTimePicker();}} >

        <Text>{selectedTime}</Text>
        </TouchableOpacity>
        
        <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode='time'
        is24Hour
         onConfirm={(time) => {
          setselecteTime(time.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }));
          setTimePickerVisibility(false);}} 

        onCancel={hideTimePicker} />

<TouchableOpacity style={Styles.botones}
        onPress={()=>{motrarreloj2();}} >

        <Text>{horaseleccionada}</Text>
       
        </TouchableOpacity>
        
        <DateTimePickerModal
        isVisible={esreloj2visible}
        mode='time'
        is24Hour
        onConfirm={(time) => {
          sethoraseleccionada(time.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }));
          setreloj2visible(false);}}  
          onCancel={cerrarreloj2} />

      <Button title='Enter'
      onPress={calcular}/>

      <Text>{diferencia}</Text>
      
      <Text>{ulteta}</Text>
      </ImageBackground>
   //   </View>
    )



};

const Styles = StyleSheet.create({
 /* contenedor:{
  backgroundColor:'lightgrey',
  flex:1,
  justifyContent:'center',
  alignItems:'center',
  },
*/
  botones:{
    width:'40%',
    height: 40,
    borderRadius:1,
    borderWidth: 0.7,
    backgroundColor:'lime',
    opacity:0.6,
    alignItems:'center',
    justifyContent:'center',
    borderBottomRightRadius:10,
    borderRadius:4,
    borderColor:'black',
    margin:7,
  },
  
  fondo: {
    flex: 1,
    resizeMode:'cover',
    justifyContent:'center',
    alignItems:'center',
    opacity:1,
  },


})

export default SelectorTimePicker;