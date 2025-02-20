import { auth } from "@clerk/nextjs/server";
import { DashboardContent } from "./_components/dashboard-component";

export default async function DashboardPage() {
  const { userId } = await auth();
  if (!userId) return <div>Unauthorized</div>;

  return <DashboardContent userId={userId} />;
}
