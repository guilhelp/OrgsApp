import { View, StyleSheet, Image} from 'react-native'
import React from 'react'

import Texto from "../../../components/Texto";
import Botao from '../../../components/Botao';

export default function Details({nome, logoFazenda, nomeFazenda, descricao, preco, botao}) {
    return <>
        <Texto style={estilos.nome}>{ nome }</Texto>
        <View style={estilos.fazenda}>
            <Image source={logoFazenda} style={ estilos.logo } />
            <Texto style={estilos.nomeFazenda}>{ nomeFazenda }</Texto>
        </View>
        <Texto style={estilos.descricao}>{ descricao }</Texto>
        <Texto style={estilos.preco}>{ preco }</Texto>

        <Botao texto={botao} style={estilos.botao} onPress={() => {}} />
        


    </>
}

const estilos = StyleSheet.create({
    botao: {
        marginTop: 16,
        
      },
    nome:{
        color: "#464646",
        fontSize: 26,
        lineHeight: 42, // Tamanho da linha
        fontWeight: "bold"
    },
    fazenda:{
        flexDirection: "row",
        paddingVertical: 12,
    },
    logo:{
        width: 32,
        height: 32,

    },
    nomeFazenda:{
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
    },
    descricao:{
        color:"#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
    },
    preco:{
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
    

});