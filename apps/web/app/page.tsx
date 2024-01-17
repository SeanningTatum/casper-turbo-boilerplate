"use client";

import { Button } from "design-system/components/ui/button";
import { Checkbox } from "design-system/components/ui/checkbox";

import { trpc } from "@/lib/trpc";

export default function Page() {
  const getAllUserQuery = trpc.user.getAll.useQuery();

  if (getAllUserQuery.isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="h-screen">
      <h1>{JSON.stringify(getAllUserQuery.data?.data)}</h1>
      <Button>Click me</Button>
      <Checkbox></Checkbox>
    </div>
  );
}
