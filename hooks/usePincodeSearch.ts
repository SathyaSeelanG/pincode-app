import { useState } from 'react';
import { PincodeResponse } from '@/types/pincode';

export function usePincodeSearch() {
  const [data, setData] = useState<PincodeResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchPincode = async (pincode: string) => {
    if (!/^\d{6}$/.test(pincode)) {
      setError('Please enter a valid 6-digit PIN code');
      return;
    }

    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
      const data = await response.json();
      
      if (data[0].Status === 'Error') {
        setError('No post offices found for this PIN code');
        setData(null);
      } else {
        setData(data[0]);
      }
    } catch (err) {
      setError('Failed to fetch data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, searchPincode };
}