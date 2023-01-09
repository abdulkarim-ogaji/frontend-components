import { ActionFunctionArgs } from "react-router-dom";
import { sleep } from "../../../utils/utils";

export default async function AccountAction({ request }: ActionFunctionArgs) {
  const searchParams = new URLSearchParams(request.url);
  await sleep(2000);
  console.log("file", searchParams.get("picture"));
  const blob = await request.blob();
  console.log("file2", blob);

  switch (request.method) {
    case "put":
      return {
        username: searchParams.get("username") ?? "",
        full_name: searchParams.get("full_name") ?? "",
        picture: blob,
      };
    default:
      return { username: "Abdulkarim", full_name: "Abdulkarim Ogaji" };
  }
}
