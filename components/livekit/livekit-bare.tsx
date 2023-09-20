import {
  RoomAudioRenderer,
  RoomName,
  VideoConference,
  useParticipants
} from '@livekit/components-react';
import CustomLeave from '../layout/custom-leave';
import { Button } from '../ui/button';
export default function LiveKitBare() {
  const participants = useParticipants();
  return <>
    <div className='hidden md:absolute p-4 bottom-0 capitalize md:flex gap-2 items-center w-screen'>
      <RoomName className='text-xl' />
      <Button variant={"outline"} size={"sm"}>Copy Link</Button>
      <span className='ml-auto'>Participants: {participants.length}</span>
    </div>
    <VideoConference />
    <RoomAudioRenderer />
    <CustomLeave />
  </>
}