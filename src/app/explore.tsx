import { StyleSheet, Text, View } from 'react-native';

export default function opis(){
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Opis mojega hobija</Text>

      <Text style={styles.text}>Fitnes je oblika telesne aktivnosti, pri kateri
        krepimo mišice, izboljšujemo moč in skrbimo za
        svoje zdravje. V fitnesu lahko uporabljamo uteži,
        različne naprave ali vadimo z lastno telesno težo.
        Pomembni so redna vadba, pravilna prehrana in počitek.</Text>

        <Text style={styles.title}>Moja zgodba</Text>
        <Text style={styles.text}>V fitnes sem prvic sel v prvem letniku, da sem probal kako je vendar sem se potem odločil da bom nehal hoditi, potem so me prijatelji prepicali, da spet probam hoditi in sem se odlocil da bom spet probal. Ko sem hodil pribliuno en mesec zaporedoma sem videl da mi je to vsec in od takrat naprej se danes hodim. v fitnesu sem spoznal veliko dobrih ljudi, pomaga mi fizicno in mentalno zato tudi planiram hoditi se naprej.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, alignItems: 'center', backgroundColor: '#000' },
    title: { fontSize: 32, fontWeight: 'bold', marginBottom: 20, color: '#fff' }, 
    text: { fontSize: 16, textAlign: 'left', lineHeight: 22, color: '#fff' },
});