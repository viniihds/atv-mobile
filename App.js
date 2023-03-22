import { StyleSheet, Text, View, Image, Button } from 'react-native';


function Card(props) {
  return(
    <View style = {styles.card}>
      <Image style= {styles.filme} source={{ uri: props.filme.capa }} />
      <Text style= {{ color: '#000', fontSize: 15, fontWeight: 'bold'}}> {props.filme.titulo} </Text>
      <Text style= {{ color: '#000', fontSize: 10}}> {props.filme.genero} </Text>
      <Button style={{ color: '#d1fae5',}} title= 'Excluir'></Button>
    </View>
  )
}
export default function App() {
  const filmes = [
    {
      capa: 'https://upload.wikimedia.org/wikipedia/pt/thumb/8/82/Pulp_Fiction_cover.jpg/230px-Pulp_Fiction_cover.jpg',
      titulo: 'Pulp Fiction',
      genero: 'Crime, Suspense, Humor ácido'
    },
    {
      capa: 'https://musicart.xboxlive.com/7/c96d1100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080',
      titulo: 'Inception',
      genero: 'Ação, Suspense, Drama'
    },
    {
      capa: 'https://upload.wikimedia.org/wikipedia/pt/3/38/The_Batman_poster.jpg',
      titulo: 'The Batman',
      genero: 'Ação, Suspense, Crime'
    },
    {
      capa: 'https://static.wikia.nocookie.net/filmguide/images/0/07/Fight-club-poster.jpg/revision/latest?cb=20210207224108',
      titulo: 'Fight Club',
      genero: 'Ação, Crime, Humor ácido'
    },
    {
      capa: 'https://upload.wikimedia.org/wikipedia/pt/9/97/BackFuturePoster.jpg',
      titulo: 'Back to the Future',
      genero: 'Ficção Científica, Aventura, Comédia'
    },
  ]
  return (
    <View style= {styles.container}>
      <Text style= {{ fontSize: 25, fontWeight: 'bold' }}>Filmes</Text>
      <View style= {styles.conteudo}>
        {filmes.map(filme => <Card filme={filme} />)}
      </View>
    </View>
  )
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a7f3d0',
    paddingTop: 30, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  conteudo: {
    flex: 1,
    backgroundColor: '#000',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%'
  },
  card: {
    backgroundColor: '#a7f3d0',
    width: '40%',
    height: 260,
    margin: 15
  },
  filme: {
    resizeMode: 'stretch',
    width: '100%',
    height: 200,
  }
});
