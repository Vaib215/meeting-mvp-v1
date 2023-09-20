import { generateAccessToken } from "@/utils/services/tokenService";
import { Plus } from "lucide-react";
import { redirect } from "next/navigation";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";
import { currentUser } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/api";

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
  const user: User | null = await currentUser();
  return (
    <Card className="max-w-sm m-4">
      <CardHeader>
        <CardTitle>{withRoomName ? "Join" : "Create"} Meeting {withRoomName && `(${roomName})`} as {user?.firstName} {user?.lastName}</CardTitle>
      </CardHeader>
      <CardContent>
        <form action={joinMeeting} className="space-y-2">
          <Input name="room" {
            ...withRoomName && {
              value: roomName,
              className: "hidden",
              readOnly: true
            }
          } placeholder="Enter a room name" />
          <Input
            {
            ...user && {
              value: `${user?.firstName} ${user?.lastName}`,
              readOnly: true,
              className: "hidden"
            }
            }
            name="name" placeholder="Enter your name" required />
          <Button variant={"secondary"} className="space-x-2">
            <Plus size={12} /> Join
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
