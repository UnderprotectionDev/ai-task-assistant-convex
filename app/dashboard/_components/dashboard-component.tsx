"use client";

import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { Card } from "@/components/ui/card";
import { TaskProgressCard } from "./task-progress-card";
import TaskSummaryCard from "./task-summary-card";

export function DashboardContent({ userId }: { userId: string }) {
  const tasks = useQuery(api.tasks.getTasks, { userId });

  if (!tasks) {
    return <div>No tasks found</div>;
  }

  return (
    <div className="flex w-full bg-background">
      <div className="flex-1">
        <div className="flex flex-col max-h-[700px] h-full mx-auto max-w-3xl">
          <h1 className="text-3xl font-semibold mb-6">Dashboard</h1>

          <TaskProgressCard tasks={tasks} />

          <Card className="shadow-lg rounded-2xl overflow-y-scroll __hideScrollBar">
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-4">Task Summary</h2>
              <ul className="space-y-4">
                {tasks.map((task) => (
                  <TaskSummaryCard key={task._id} task={task} />
                ))}
              </ul>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
