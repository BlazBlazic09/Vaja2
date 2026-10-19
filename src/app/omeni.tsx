import { StyleSheet, Text, View } from 'react-native';

export default function omeni(){
    return (
        <View style={styles.container}>
            <Text style={styles.title}>O meni</Text>
            <Text style={styles.text}>Sem Blaž Blažič in sem sam naredil to mobilno aplikacijo, hodim v 3 letnik srednje računalniške šole, po končani izobrazbi se nameravam vpisati na fakulteto vendar še ne vem kam. Osnovno šolo sem naredil v šoštanju. V prostem času hodim v fitnes in igram igrice.</Text>
        </View>      
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, alignItems: 'center', backgroundColor: '#000' },
    title: { fontSize: 32, fontWeight: 'bold', marginBottom: 20, color: '#fff' }, 
    text: { fontSize: 16, textAlign: 'left', lineHeight: 22, color: '#fff' },
});