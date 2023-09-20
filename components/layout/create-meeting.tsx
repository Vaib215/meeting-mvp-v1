import { generateAccessToken } from "@/utils/services/tokenService";
import { Plus } from "lucide-react";
import { redirect } from "next/navigation";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";

export async function joinMeeting(formData: FormData) {
  "use server"
  const room = formData.get("room") as string;
  const name = formData.get("name") as string;

  const token = generateAccessToken(room, name);
  redirect(`/meeting?room=${room}&name=${name}&token=${token}`);
}

export default async function CreateMeetingCard({
  withRoomName = false,
  roomName,
}: {
  withRoomName?: boolean;
  roomName?: string;
}) {
  return (
    <Card className="max-w-sm m-4">
      <CardHeader>
        <CardTitle>{withRoomName ? "Join" : "Create"} Meeting {withRoomName && `(${roomName})`}</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={joinMeeting} className="space-y-2">
          <Input name="room" {
            ...withRoomName && {
              value: roomName,
              className: "hidden"
            }
          } placeholder="Enter a room name" />
          <Input name="name" placeholder="Enter your name" required />
          <Button variant={"secondary"} className="space-x-2">
            <Plus size={12} /> Join
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
