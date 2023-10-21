// TODO: Duplicate or move this file outside the `_examples` folder to make it a route
import { Metadata } from "next";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Button } from "@/components/ui/button";

export const dynamic = "force-dynamic";

// export const metadata = {
//   title: "Todos",
//   description: "List of todos",
// };

export default async function ServerComponent() {
  // Create a Supabase client configured to use cookies
  const supabase = createServerComponentClient({ cookies });

  // This assumes you have a `todos` table in Supabase. Check out
  // the `Create Table and seed with data` section of the README 👇
  // https://github.com/vercel/next.js/blob/canary/examples/with-supabase/README.md
  const { data: todos } = await supabase.from("todos").select();

  return (
    <>
      <Button>Click me</Button>
      <pre style={{ color: "white" }}>{JSON.stringify(todos, null, 2)}</pre>
    </>
  );
}
