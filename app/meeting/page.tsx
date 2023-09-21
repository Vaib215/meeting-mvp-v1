"use client";

import LiveKitBare from '@/components/livekit/livekit-bare';
import { LiveKitRoom } from '@livekit/components-react';
import '@livekit/components-styles';
import { useSearchParams } from 'next/navigation';

export default function Page() {
  const searchParams = useSearchParams();

  return (
    <LiveKitRoom
      video={true}
      audio={true}
      token={searchParams.get('token')!}
      connectOptions={{ autoSubscribe: true }}
      serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
      data-lk-theme="default"
      style={{ height: '100dvh' }}
    >
      <LiveKitBare />
    </LiveKitRoom>
  );
}
