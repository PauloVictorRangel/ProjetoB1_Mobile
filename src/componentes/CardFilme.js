import { Dimensions, Image, StyleSheet, Text, 
    TouchableOpacity, View } from "react-native";


const baseUrl = 'https://api.otaviolube.com'

const MAX_WIDTH = Dimensions.get('window').width*0.8
const MAX_HEIGHT = Dimensions.get('window').height*0.9

export default function CardFilme({ filme }){
    return(
        <View style={styles.container}>
         <Image style={styles.poster} source={{uri: baseUrl + filme.poster.data.attributes.formats.thumbnail.url}}/>
         <Text style = {styles.titulo}>{filme.titulo}</Text>
         <Text style = {styles.subtitle}>{filme.subtitulo}</Text>
         <Text style = {styles.sinopse}>{filme.sinopse}</Text>
         <TouchableOpacity style = {styles.button}>
            <Text style = {styles.btnText}>Comprar</Text>
         </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        margin: '20px',
        padding: '20px',
        alignItems: 'center',
        justifyContent: 'center',
        height: MAX_HEIGHT,
        width: MAX_WIDTH
},
    poster: {
        width: '150px',
        height: '200px',
        resizeMode: 'cover',
        marginBottom: 10
},
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
        
}, 
    subtitle:{
        marginBottom: 10,
        fontSize: 18,
        fontWeight: 'bold' 
},
    sinopse: {
        marginBottom: 10


},
    button: {
        height: 50,
        width: '100%',
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center'

},
    btnText: {
        fontSize: 20,
        fontWeight: 'bold'

}
})