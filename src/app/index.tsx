import { Image, StyleSheet, Text, View } from 'react-native';

export default function Homescreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Moja fitnes aplikacija</Text>

      <Image 
        source={{ uri: 'https://cdng.europosters.eu/pod_public/750/128226.jpg' }} 
        style={styles.image} 
      />

      <Text style={styles.text}>
        Pozdravljeni v moji fitnes aplikaciji, trenutno se nahajate na domaci strani, in vam bom v tej aplikaciji opisal svoj hobi, ki je fitnes.
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center', backgroundColor: '#000' }, 
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 20, color: '#fff' }, 
  image: { width: '100%', height: 200, borderRadius: 8, marginBottom: 20 },
  text: { fontSize: 16, textAlign: 'left', lineHeight: 22, color: '#fff' },
});
