import CreateMeetingCard from "@/components/layout/create-meeting";

export default async function Join({
  params
}: {
  params: {
    room: string
  }
}) {
  return (
    <main className="">
      <CreateMeetingCard withRoomName roomName={params.room} />
    </main>
  );
}