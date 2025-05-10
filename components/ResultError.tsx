import { StyleSheet, View, Text } from 'react-native';
import { AlertCircle } from 'lucide-react-native';

interface ResultErrorProps {
  message: string;
}

export default function ResultError({ message }: ResultErrorProps) {
  return (
    <View style={styles.container}>
      <AlertCircle size={24} color="#dc2626" />
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fee2e2',
    borderRadius: 8,
    padding: 16,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  message: {
    marginLeft: 12,
    fontSize: 14,
    color: '#991b1b',
    flex: 1,
  },
});