import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text } from 'react-native';
import CardFilme from './AppFilmes/src/componentes/CardFilme';

export default function App() {

let [filmes, setFilmes] = useState([]);


 
const baseUrl = 'https://api.otaviolube.com/api/filmes?populate=*';

useEffect(function(){
  fetch(baseUrl). then(data => data.json())
  .then(objeto => {
    console.log(objeto);
    setFilmes(objeto.data)
  })
}, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal>
           { filmes.length > 0 ? filmes.map(filme => 
           <CardFilme key={filme.id} filme = {filme.attributes}/>) : 
           <Text style={{}}>Carregando ....</Text> }
           <StatusBar style="auto"/>
        </ScrollView>  
    </SafeAreaView>
  );
}   

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
