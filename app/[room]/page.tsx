import CreateMeetingCard from "@/components/layout/create-meeting";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Room",
};

export default async function Join({
  params
}: {
  params: {
    room: string
  }
}) {
  return (
    <main className="">
      <CreateMeetingCard withRoomName roomName={params.room.split("-").join(" ")} />
    </main>
  );
}
