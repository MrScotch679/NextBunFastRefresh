'use client';

import { useQuery } from '@tanstack/react-query';

const fetchPlaceholder = async (): Promise<{ title: string }> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  if (!res.ok) throw new Error('Fetch failed');
  return res.json();
};

export const QueryDemo = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['placeholder'],
    queryFn: fetchPlaceholder,
  });

  return (
    <div style={{ padding: 8, border: '1px solid #ccc', margin: 4 }}>
      {isLoading && 'Loading…'}
      {error && 'Error'}
      {data && <span>Query: {data.title}</span>}
    </div>
  );
};
