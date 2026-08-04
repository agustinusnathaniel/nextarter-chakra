import { Image } from '@chakra-ui/react';

import { Tooltip } from '@/components/ui/tooltip';

type HelperImageProps = {
  label?: string;
  src: string;
};

const size = 5;

export const HelperImage = ({ label = '', src }: HelperImageProps) => (
  <Tooltip aria-label={label} content={label} showArrow>
    <Image alt={label} height={size} src={src} title={label} width={size} />
  </Tooltip>
);
