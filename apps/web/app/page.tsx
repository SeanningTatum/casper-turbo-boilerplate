"use client";

import { trpc } from "@/lib/trpc";
import { Button } from "@ui/components/button";
import { Checkbox } from "@ui/components/checkbox";

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
