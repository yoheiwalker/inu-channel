'use client';

import { useEffect, useState } from 'react';

const formatViews = (count: number) => count >= 100000000
  ? `${(count / 100000000).toFixed(1)}億回`
  : count >= 10000 ? `${(count / 10000).toFixed(1)}万回` : `${count.toLocaleString('ja-JP')}回`;

export function LiveVideoViews({ id, fallback }: { id: string; fallback: string }) {
  const [value, setValue] = useState(fallback);
  useEffect(() => {
    fetch('/api/youtube').then((response) => response.json() as Promise<{ videos?: Record<string, number> }>).then((data) => {
      if (typeof data?.videos?.[id] === 'number') setValue(formatViews(data.videos[id]));
    }).catch(() => undefined);
  }, [id]);
  return <>{value}</>;
}
