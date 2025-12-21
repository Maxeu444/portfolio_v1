"use client";

import { Snowfall } from 'react-snowfall';
import { useTheme } from '@/lib/theme-provider';

export function SnowfallEffect() {
  const { theme } = useTheme();

  const targetDate = new Date('2026-02-01T00:00:00');
  const isSnowfallActive = new Date() < targetDate;
  
  if (!isSnowfallActive) return null;
  
  return (
    <Snowfall 
      color={theme === 'light' ? '#386641' : '#ffffff'}
      snowflakeCount={100}
    />
  );
}
