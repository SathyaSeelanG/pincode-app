import { StyleSheet, View, Text } from 'react-native';
import { MapPin } from 'lucide-react-native';

export default function EmptyState() {
  return (
    <View style={styles.container}>
      <MapPin size={48} color="#94a3b8" />
      <Text style={styles.title}>Find Post Offices</Text>
      <Text style={styles.subtitle}>
        Enter a PIN code to discover post offices in that area
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#475569',
    marginTop: 16,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: '#64748b',
    textAlign: 'center',
  },
});