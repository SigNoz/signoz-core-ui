import { lazy, Suspense } from 'react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import { defaultFallback } from './DefaultIcons';
import { IconProps } from './types';

const Icon = ({ name, fallback, ...props }: IconProps) => {
  const LucideIcon = lazy(dynamicIconImports[name]);

  return (
    <Suspense fallback={fallback || defaultFallback}>
      <LucideIcon {...props} />
    </Suspense>
  );
}

export default Icon