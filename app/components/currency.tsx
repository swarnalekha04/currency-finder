import React, { useState, ChangeEvent } from 'react';
import { Box, Button, Input, Text } from '@chakra-ui/react';
import { useLazyQuery } from '@apollo/client';
import { GET_CURRENCY_QUERY } from '../../queries';

const Currency: React.FC = () => {
  const [countryName, setCountryName] = useState<string>('');
  const [getCurrency, { loading, data }] = useLazyQuery<CurrencyData>(GET_CURRENCY_QUERY);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setCountryName(newValue);
    getCurrency({ variables: { countryName: newValue } });
  };

  return (
    <Box p={4}>
      <Input placeholder="Enter country name" value={countryName} onChange={handleChange} />
      {loading && <Text>Loading...</Text>}
      {data && (
        <Text mt={2}>
          Currency: {data.item[0]?.currency[0]?.object?.nameEn || 'Not found'}
        </Text>
      )}
    </Box>
  );
};

interface CurrencyData {
  item: [{
    nameEn: string;
    currency: [{
      object: {
        nameEn: string;
      };
    }];
  }];
}

export default Currency;
