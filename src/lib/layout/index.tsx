'use client';

import { Box } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import { Footer } from './components/footer';
import { Header } from './components/header';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => (
  <Box margin="0 auto" maxWidth={800} transition="0.5s ease-out">
    <Box margin="8">
      <Header />
      <Box as="main" marginY={22}>
        {children}
      </Box>
      <Footer />
    </Box>
  </Box>
);
