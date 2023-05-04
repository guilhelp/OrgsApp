import React from 'react';
import { Text, StyleSheet } from 'react-native';

{/* aplicando a font montserrat para todo o arquivo cesta a partir de um component */}
export default function Texto({ children, style }){
    let estilo = estilos.texto;

    if(style?.fontWeight === 'bold'){
        estilo = estilos.textoNegrito
    }

    return <Text style={[style, estilo]}>{ children }</Text>
}

const estilos = StyleSheet.create({
    texto:{
        fontFamily: "MontserratRegular",
        fontWeight: "normal",
    },
    textoNegrito:{
        fontFamily: "MontserratBold",
        fontWeight: "normal",
    }
})