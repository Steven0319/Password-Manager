import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { FormProfile } from "./components/FormProfile";

export default async function ProfilePage() {
  const session = await getServerSession();

  if (!session?.user?.email) {
    redirect("/login"); 
  }

  const user = await db.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    redirect("/login");
  }

  return <FormProfile user={user} />;
}
