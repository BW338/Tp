import React, { useState } from "react";
import { Button, View,StyleSheet, Text, TouchableOpacity, Alert, ImageBackground } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';


const SelectorTimePicker = () => {
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [esreloj2visible, setreloj2visible] = useState(false);
  const [esreloj3visible, setreloj3visible] = useState(false);

  const [hrPresentacion, setHrPresentacion] = useState('Presentacion');
  const [hrETD, setHrETD] = useState('Despegue');
  const [hrETA, setHrETA] = useState('Aterrizaje');

  const [diferencia, setdiferencia] = useState('Utl ETD');

  const [ulteta, setulteta] = useState('ulteta');


//SELECTOR HORARIO

////Preaentacion
const mostrarreloj1 = () => {
  setTimePickerVisibility(true);
};

const cerrarreloj1 = () => {
  setTimePickerVisibility(false);
  setHrPresentacion('Presentacion');
};

///// Despegue

const mostrarreloj2 = () => {
  setreloj2visible(true);
};

const cerrarreloj2 = () => {
  setreloj2visible(false);
  setHrETD('Despegue');

};

///// Aterrizaje

const mostrarreloj3 = () => {
  setreloj3visible(true);
};

const cerrarreloj3 = () => {
  setreloj3visible(false);
  setHrETA('Aterrizaje');
};



const calcular = ()=>{
  // Convertir a milisegundos
 const ST = moment(hrPresentacion, 'HH:mm').toDate(); 
 var selectedTimeMS = ST.getTime(); 

 const HS = moment(hrETD, 'HH:mm').toDate();
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

        <ImageBackground source={require('./assets/sky1.jpg')} style={Styles.fondo}>

 <View style={Styles.inputs}>       

       <TouchableOpacity style={Styles.relojes}
        onPress={()=>{mostrarreloj1();}} >

        <Text>{hrPresentacion}</Text>
        </TouchableOpacity>
        
        <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode='time'
        is24Hour
         onConfirm={(time) => {
          setHrPresentacion(time.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }));
          setTimePickerVisibility(false);}} 
         onCancel={cerrarreloj1} />

<TouchableOpacity style={Styles.relojes}
        onPress={()=>{mostrarreloj2();}} >

        <Text>{hrETD}</Text>
       
        </TouchableOpacity>
        
        <DateTimePickerModal
        isVisible={esreloj2visible}
        mode='time'
        is24Hour
        onConfirm={(time) => {
          setHrETD(time.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }));
          setreloj2visible(false);}}  
          onCancel={cerrarreloj2} />
</View>
      
<TouchableOpacity style={Styles.relojes}
        onPress={()=>{mostrarreloj3();}} >

        <Text>{hrETA}</Text>
       
        </TouchableOpacity>
        
        <DateTimePickerModal
        isVisible={esreloj3visible}
        mode='time'
        is24Hour
        onConfirm={(time) => {
          setHrETA(time.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' }));
          setreloj3visible(false);}}  
          onCancel={cerrarreloj3} />

      <Text>{diferencia}</Text>
      
      <Text>{ulteta}</Text>
      <Button title='Enter'
      onPress={calcular}/>
      </ImageBackground>
    )



};

const Styles = StyleSheet.create({
  inputs :{
  flexDirection:'row',
  justifyContent:'space-around',
  alignItems:'center',
  },

  relojes:{
    width:'40%',
    height: 40,
    borderRadius:1,
    borderWidth: 0.7,
    backgroundColor:'yellow',
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