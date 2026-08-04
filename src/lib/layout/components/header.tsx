import { Box, Flex } from '@chakra-ui/react';

import { ColorModeButton } from '@/components/ui/color-mode';

export const Header = () => (
  <Flex align="center" as="header" width="full">
    <Box marginLeft="auto">
      <ColorModeButton />
    </Box>
  </Flex>
);
