"use client";

import { useAuth } from "@clerk/nextjs";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { TaskForm } from "../_components/task-form";
import { TaskCard } from "../_components/task-card";

export default function TasksPage() {
  const { userId } = useAuth();

  const tasks = useQuery(api.tasks.getTasks, { userId: userId || "" });
  return (
    <div className="flex bg-background w-full">
      <div className="flex flex-col mx-auto w-full max-w-3xl">
        <h1 className="text-3xl font-semibold mb-6">Tasks</h1>

        <TaskForm />

        {tasks?.length === 0 ? (
          <div className="text-center text-muted-foreground">
            No tasks found
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {tasks?.map((task) => <TaskCard key={task._id} task={task} />)}
          </div>
        )}
      </div>
    </div>
  );
}
