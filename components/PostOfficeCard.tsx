import { StyleSheet, View, Text } from 'react-native';
import { PostOffice } from '@/types/pincode';
import { Building2, MapPin, CircleDot } from 'lucide-react-native';

interface PostOfficeCardProps {
  postOffice: PostOffice;
}

export default function PostOfficeCard({ postOffice }: PostOfficeCardProps) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.name}>{postOffice.Name}</Text>
        <View style={[
          styles.badge,
          { backgroundColor: postOffice.DeliveryStatus === 'Delivery' ? '#dcfce7' : '#fee2e2' }
        ]}>
          <Text style={[
            styles.badgeText,
            { color: postOffice.DeliveryStatus === 'Delivery' ? '#166534' : '#991b1b' }
          ]}>
            {postOffice.DeliveryStatus}
          </Text>
        </View>
      </View>

      <View style={styles.infoRow}>
        <Building2 size={16} color="#666" />
        <Text style={styles.infoText}>{postOffice.BranchType}</Text>
      </View>

      <View style={styles.infoRow}>
        <MapPin size={16} color="#666" />
        <Text style={styles.infoText}>
          {postOffice.Block}, {postOffice.District}, {postOffice.State}
        </Text>
      </View>

      <View style={styles.infoRow}>
        <CircleDot size={16} color="#666" />
        <Text style={styles.infoText}>{postOffice.Circle} Circle</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111',
    flex: 1,
  },
  badge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '500',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  infoText: {
    marginLeft: 8,
    fontSize: 14,
    color: '#444',
  },
});