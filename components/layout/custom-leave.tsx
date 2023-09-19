import { useRoomContext } from "@livekit/components-react"

export default function CustomLeave() {
  const room = useRoomContext();
  room.on('disconnected', () => {
    window.location.href = '/';
  });
  return <></>
}
