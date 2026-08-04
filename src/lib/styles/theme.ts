import { createSystem, defaultConfig, defineTokens } from '@chakra-ui/react';

const tokens = defineTokens({
  fonts: {
    body: { value: 'var(--font-body)' },
    heading: { value: 'var(--font-body)' },
  },
});

export const customTheme = createSystem(defaultConfig, {
  theme: {
    tokens,
  },
});
