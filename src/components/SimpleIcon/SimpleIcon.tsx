// filepath: /c:/Users/olivi/Portfolio/personal-site/src/components/SimpleIcon.tsx
import React from 'react';

interface SimpleIconProps {
  icon: {
    svg: string;
  };
  size?: number;
}

export function SimpleIcon({ icon, size = 24 }: SimpleIconProps) {
  return (
    <div
      style={{ width: size, height: size }}
      dangerouslySetInnerHTML={{ __html: icon.svg }}
    />
  );
}