import { Grid, Heading, Text } from '@chakra-ui/react';

export const SomeText = () => (
  <Grid textAlign="center">
    <Heading as="h1" fontWeight="bold" size="2xl">
      nextarter-chakra
    </Heading>

    <Text fontSize="xs">
      This is a Next.js app with Chakra-UI and TypeScript setup.
    </Text>
  </Grid>
);
