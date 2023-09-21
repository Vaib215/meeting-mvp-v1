import { SignIn } from "@clerk/nextjs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign in",
};

export default function Page() {
  return (
    <main className="grid place-items-center pt-4">
      <SignIn />
    </main>
  );
}
