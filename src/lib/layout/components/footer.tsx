'use client';

import { Flex, Link, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export const Footer = () => {
  const [currentYear, setCurrentYear] = useState<string | null>(null);

  useEffect(() => {
    setCurrentYear(String(new Date().getFullYear()));
  }, []);

  return (
    <Flex as="footer" justifyContent="center" width="full">
      <Text fontSize="sm">
        {currentYear} -{' '}
        <Link
          href="https://agustinusnathaniel.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          agustinusnathaniel.com
        </Link>
      </Text>
    </Flex>
  );
};
