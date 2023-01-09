import { defer, LoaderFunctionArgs } from "react-router-dom";
import { sleep } from "../../../utils/utils";

export default async function AccountLoader({ request }: LoaderFunctionArgs) {
  const searchParams = new URLSearchParams(request.url);
  await sleep(2000);
  return defer({
    username: searchParams.get("username") ?? "",
    full_name: searchParams.get("full_name") ?? "",
  });
}
