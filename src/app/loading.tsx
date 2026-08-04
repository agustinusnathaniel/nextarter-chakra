import { Center, Spinner } from '@chakra-ui/react';

export default function Loading() {
  return (
    <Center minH="60vh">
      <Spinner size="xl" />
    </Center>
  );
}
