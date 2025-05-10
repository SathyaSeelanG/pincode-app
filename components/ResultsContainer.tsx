import { StyleSheet, ScrollView, View } from 'react-native';
import { PincodeResponse } from '@/types/pincode';
import PostOfficeCard from './PostOfficeCard';
import ResultSummary from './ResultSummary';

interface ResultsContainerProps {
  data: PincodeResponse;
}

export default function ResultsContainer({ data }: ResultsContainerProps) {
  return (
    <ScrollView style={styles.container}>
      <ResultSummary message={data.Message} />
      <View style={styles.cardsContainer}>
        {data.PostOffice.map((office, index) => (
          <PostOfficeCard key={`${office.Name}-${index}`} postOffice={office} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardsContainer: {
    padding: 16,
  },
});