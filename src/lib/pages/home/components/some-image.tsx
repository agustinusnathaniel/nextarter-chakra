'use client';

import { Flex } from '@chakra-ui/react';

import { HelperImage } from './helper-image';

export const SomeImage = () => (
  <Flex alignItems="center" gap={2} justifyContent="center">
    <HelperImage label="Chakra UI" src="/chakra-ui-logomark-colored.svg" />
    <HelperImage label="TypeScript" src="/ts-logo-512.svg" />
  </Flex>
);
