import { Flex } from '@chakra-ui/react';

import { CTASection } from './components/cta-section';
import { SomeImage } from './components/some-image';
import { SomeText } from './components/some-text';

export const Home = () => (
  <Flex
    alignItems="center"
    direction="column"
    gap={4}
    justifyContent="center"
    mb={8}
    minHeight="70vh"
    w="full"
  >
    <SomeText />
    <SomeImage />
    <CTASection />
  </Flex>
);
