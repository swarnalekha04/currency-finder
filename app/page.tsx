'use client'

import { ApolloProvider } from '@apollo/client';
import client from '../apollo-client';
import { ChakraProvider } from '@chakra-ui/react';
import Currency  from './components/currency'

import { Component } from 'react';
function CurrencyApp() {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Currency />
      </ChakraProvider>
    </ApolloProvider>
  );
}

export default CurrencyApp;