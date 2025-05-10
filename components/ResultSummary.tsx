import { StyleSheet, View, Text } from 'react-native';

interface ResultSummaryProps {
  message: string;
}

export default function ResultSummary({ message }: ResultSummaryProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f8fafc',
    borderRadius: 8,
    padding: 12,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  message: {
    fontSize: 14,
    color: '#475569',
    textAlign: 'center',
  },
});