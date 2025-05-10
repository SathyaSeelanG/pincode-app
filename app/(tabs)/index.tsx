import React from 'react';
import { StyleSheet, View } from 'react-native';
import { usePincodeSearch } from '@/hooks/usePincodeSearch';
import SearchBar from '@/components/SearchBar';
import ResultsContainer from '@/components/ResultsContainer';
import ResultError from '@/components/ResultError';
import EmptyState from '@/components/EmptyState';

export default function SearchScreen() {
  const { data, loading, error, searchPincode } = usePincodeSearch();

  return (
    <View style={styles.container}>
      <SearchBar onSearch={searchPincode} />
      {error ? (
        <ResultError message={error} />
      ) : data ? (
        <ResultsContainer data={data} />
      ) : (
        <EmptyState />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
});