"use client";

import CustomLeave from '@/components/layout/custom-leave';
import {
  LiveKitRoom,
  RoomAudioRenderer,
  VideoConference
} from '@livekit/components-react';
import '@livekit/components-styles';
import { useSearchParams } from 'next/navigation';

export default function Page() {
  const token = useSearchParams().get('token');

  return (
    <LiveKitRoom
      video={true}
      audio={true}
      token={token!}
      connectOptions={{ autoSubscribe: false }}
      serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
      data-lk-theme="default"
      style={{ height: '100dvh' }}
    >
      <VideoConference />
      <RoomAudioRenderer />
      <CustomLeave />
    </LiveKitRoom>
  );
}