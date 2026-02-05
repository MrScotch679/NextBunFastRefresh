'use client';

import { useState, useEffect } from 'react';
import { useAccount } from 'wagmi';

export const AppKitDemo = () => {
  const [mounted, setMounted] = useState(false);
  const { address, isConnected, status } = useAccount();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div style={{ padding: 8, border: '1px solid #ccc', margin: 4 }}>
      <span suppressHydrationWarning>
        Wagmi/AppKit: {mounted ? status : '—'}
      </span>
      {mounted && isConnected && address && (
        <span suppressHydrationWarning> — {address.slice(0, 8)}…</span>
      )}
    </div>
  );
};
