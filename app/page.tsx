import CreateMeetingCard from "@/components/layout/create-meeting";
import { UserButton } from "@clerk/nextjs";

export default async function Home() {
  return (
    <main className="">
      <div className="absolute right-0">
        <UserButton afterSignOutUrl="/" />
      </div>
      <CreateMeetingCard />

    </main>
  );
}
