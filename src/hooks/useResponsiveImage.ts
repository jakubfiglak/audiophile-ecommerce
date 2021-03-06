import { useEffect, useState } from 'react';
import { useBreakpoints } from './useBreakpoints';
import { IResponsiveImages, IImage } from '../../graphql/types';

export function useResponsiveImage(images: IResponsiveImages) {
  const [image, setImage] = useState<IImage>({
    data: images.desktop.data,
    alt: images.desktop.alt,
  });
  const breakpoint = useBreakpoints();

  useEffect(() => {
    if (breakpoint === 'mobile') {
      setImage({
        data: images.mobile.data,
        alt: images.mobile.alt,
      });
    }
    if (breakpoint === 'tablet') {
      setImage({
        data: images.tablet.data,
        alt: images.tablet.alt,
      });
    }
  }, [breakpoint]);

  return image;
}
