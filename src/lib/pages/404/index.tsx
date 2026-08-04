import {
  Box,
  Link as ChakraLink,
  Flex,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export const Page404 = () => (
  <Flex direction="column" justifyContent="center" minHeight="70vh">
    <Image
      alt="Error 404 not found Illustration"
      margin="0 auto"
      src="/404 Error-pana.svg"
      width={{ base: '100%', md: '60%', sm: '70%' }}
    />
    <Text color="gray" fontSize="xs" textAlign="center">
      <ChakraLink
        href="https://stories.freepik.com/web"
        rel="noopener noreferrer"
        target="_blank"
      >
        Illustration by Freepik Stories
      </ChakraLink>
    </Text>

    <Box marginY={4}>
      <Heading size="lg" textAlign="center">
        Page not Found.
      </Heading>

      <Box marginTop={4} textAlign="center">
        <Text color="gray" fontSize="sm">
          It&apos;s Okay!
        </Text>
        <Button asChild size="sm">
          <Link href="/">Let&apos;s Head Back</Link>
        </Button>
      </Box>
    </Box>
  </Flex>
);
