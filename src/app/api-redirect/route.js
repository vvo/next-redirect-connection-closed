import { redirect } from "next/navigation";

export function POST(request) {
  redirect("/?success=true");
}
