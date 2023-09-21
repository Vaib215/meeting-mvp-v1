import CreateMeetingCard from "@/components/layout/create-meeting";
import { UserButton } from "@clerk/nextjs";

export default async function Home() {
  return (
    <main className="">
      <div className="absolute right-0">
        <UserButton afterSignOutUrl="/" />
      </div>
      <CreateMeetingCard />

      <div className="markdown-body entry-content container-lg p-4">
        <h1 className="text-3xl font-bold">AICTE Online Meeting System</h1>
        <h2 className="text-xl font-semibold">Team Hex Coders 2.0</h2>
        <p className="my-4 text-gray-700">
          Welcome to the AICTE Online Meeting System project, developed as a part of the Smart India Hackathon.
          This platform leverages the power of WebRTC (Web Real-Time Communication) to facilitate online meetings, collaborations, and communication within the AICTE community.
        </p>
        <h2 className="text-xl font-semibold">Features</h2>
        <ul className="list-disc list-inside my-4">
          <li className="mb-2">Seamless audio and video communication.</li>
          <li className="mb-2">Share your screen for presentations and discussions.</li>
          <li className="mb-2">Chat with participants during meetings.</li>
          <li className="mb-2">Secure login and user management.</li>
          <li className="mb-2">Record meetings for future reference.</li>
          <li className="mb-2">Easy-to-use interface for a wide range of users.</li>
          <li className="mb-2">Tailor the system to meet AICTE&apos;s specific requirements.</li>
          <li className="mb-2">Accommodate varying numbers of users and meeting sizes.</li>
        </ul>
    </div>
    </main>
  );
}
