import { useRoomContext } from "@livekit/components-react";
import { useEffect } from "react";
import { ToastAction } from "../ui/toast";
import { useToast } from "../ui/use-toast";
import { useRouter, useSearchParams } from "next/navigation";

export default function CustomLeave() {
  const room = useRoomContext();
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const router = useRouter();
  room.on('disconnected', () => {
    router.push('/');
  });
  useEffect(() => {
    toast({
      title: 'Joined Meeting Successfully',
      action: (
        <ToastAction onClick={() => {
          const rooms =
            navigator.clipboard.writeText(`${window.location.origin}/${searchParams.get('room')!}`);
        }} altText="Copy Meeting Link">Copy Meeting Link</ToastAction>
      )
    });
  }, [])
  return <></>
}
