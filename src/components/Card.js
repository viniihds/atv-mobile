// import { Image, Text, View, TouchableOpacity, StyleSheet } from "react-native";

// export default function Card(props) {
//     return (
//         <View style = {styles.card}>
//         <Image style= {styles.filme} source={{ uri: props.filme.capa }} />
//         <Text style= {{ color: '#fff', fontSize: 15, fontWeight: 'bold'}}> {props.filme.titulo} </Text>
//         <Text style= {{ color: '#fff', fontSize: 10}}> {props.filme.genero} </Text>
//         <TouchableOpacity style={styles.button} onPress={props.onDelete}><Text>Excluir</Text>
//         </TouchableOpacity>

//       </View>
//     );
// }

// const styles = StyleSheet.create({
//     card: {
//       width: '40%',
//       height: 230,
//       margin: 15,
//       borderWidth: 2,
//       borderColor: '#a7f3d0'
//     },
//     filme: {
//       resizeMode: 'stretch',
//       width: '100%',
//       height: 170,
//     },
//     button: {
//       alignItems: 'center',
//       backgroundColor: '#a7f3d0',
//       padding: 1
//     }
//   });
  
import { Image, Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default function Card(props) {
  return (
    <View style={styles.card}>
      <Image style={styles.filme} source={{ uri: props.filme.capa }} />
      <Text style= {{ color: '#fff', fontSize: 15, fontWeight: 'bold'}}> {props.filme.titulo} </Text>
      <Text style= {{ color: '#fff', fontSize: 10}} > {props.filme.genero} </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={props.onDelete}>
          <Text>Excluir</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    card: {
      width: '40%',
      height: 230,
      margin: 15,
      borderWidth: 2,
      borderColor: '#f43f5e'
    },
    filme: {
      resizeMode: 'stretch',
      width: '100%',
      height: 170,
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#f43f5e',
      padding: 1
    }
  });