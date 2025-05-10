import { StyleSheet, View, Text, Linking } from 'react-native';
import { Mail, Globe } from 'lucide-react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Indian Post Office Finder</Text>
        <Text style={styles.description}>
          This application helps you find post offices across India using PIN codes.
          Simply enter a 6-digit PIN code to discover post offices in that area,
          along with detailed information about their services and location.
        </Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Data Source</Text>
          <Text style={styles.sectionText}>
            The data is provided by India Post's official API service, ensuring
            accurate and up-to-date information about post offices across India.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contact</Text>
          <View style={styles.linkContainer}>
            <Mail size={16} color="#0369a1" />
            <Text
              style={styles.link}
              onPress={() => Linking.openURL('mailto:support@example.com')}>
              support@example.com
            </Text>
          </View>
          <View style={styles.linkContainer}>
            <Globe size={16} color="#0369a1" />
            <Text
              style={styles.link}
              onPress={() => Linking.openURL('https://example.com')}>
              www.example.com
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  content: {
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#475569',
    lineHeight: 24,
    marginBottom: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#0f172a',
    marginBottom: 12,
  },
  sectionText: {
    fontSize: 14,
    color: '#475569',
    lineHeight: 22,
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  link: {
    marginLeft: 8,
    fontSize: 14,
    color: '#0369a1',
    textDecorationLine: 'underline',
  },
});