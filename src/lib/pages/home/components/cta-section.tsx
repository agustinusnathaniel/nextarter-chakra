import { Box, Button, Flex, Image, Link } from '@chakra-ui/react';
import { AiFillGithub } from 'react-icons/ai';

const repoLink = 'https://github.com/agustinusnathaniel/nextarter-chakra';

export const CTASection = () => {
  return (
    <Box textAlign="center">
      <Box transform="scale(0.85)">
        <Flex gap={2} justifyContent="center" marginY={4}>
          <Link
            aria-label="Deploy to Vercel"
            href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fagustinusnathaniel%2Fnextarter-chakra"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              alt="Vercel deploy button"
              fit="contain"
              height={10}
              src="https://vercel.com/button"
            />
          </Link>

          <Link
            aria-label="Deploy to Netlify"
            href="https://app.netlify.com/start/deploy?repository=https://github.com/agustinusnathaniel/nextarter-chakra"
            rel="noopener noreferrer"
            target="_blank"
          >
            <Image
              alt="Netlify deploy button"
              fit="contain"
              height={10}
              src="https://www.netlify.com/img/deploy/button.svg"
            />
          </Link>
        </Flex>
      </Box>

      <Flex alignItems="center" gap={2} justifyContent="center">
        <Button asChild size="sm">
          <a
            href="https://github.com/agustinusnathaniel/nextarter-chakra/generate"
            rel="noopener noreferrer"
            target="_blank"
          >
            Use This Template
          </a>
        </Button>
        <Button asChild size="sm">
          <a href={repoLink} rel="noopener noreferrer" target="_blank">
            <AiFillGithub />
            Open in Github
          </a>
        </Button>
      </Flex>
    </Box>
  );
};
