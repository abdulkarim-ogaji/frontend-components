import {
  Form,
  Link,
  useActionData,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import Button from "../../../components/Button";
import CameraIcon from "../../../components/Icons/cameraIcon";

export default function Account() {
  const loaderData = useLoaderData();
  const { state, formMethod, formData } = useNavigation();

  return (
    <div className="pt-8">
      <h3 className="font-semibold text-lg mb-4">Name and photos</h3>
      <p className="font-thin mb-4">
        Changing your name below will update your name on your profile.{" "}
        <Link
          to="/"
          className="text-[var(--primary-color)] pb-0.5 border-b border-[var(--primary-color)]"
        >
          View your profile
        </Link>
      </p>
      <Form method="put" className="" encType="multipart/form-data">
        <div className="flex gap-4 mb-4">
          <img
            src="/profile.jpg"
            alt="profile"
            width={128}
            height={128}
            className="rounded-full h-[128px] object-cover"
          />
          <label
            htmlFor="picture"
            className="w-[128px] h-[128px] rounded-full border-2 cursor-pointer flex items-center justify-center"
          >
            <div className="w-[40px] h-[40px]">
              <CameraIcon />
            </div>
            <input type="file" name="picture" id="picture" className="hidden" />
          </label>
        </div>
        <div className="mb-4 flex flex-col gap-2">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            className="w-[280px] max-w-full pill focus:outline-[var(--primary-color)] h-[34px] px-3 appearance-none border"
          />
        </div>
        <div className="mb-8 flex flex-col gap-2">
          <label htmlFor="full_name">Full name</label>
          <input
            type="text"
            name="full_name"
            className="w-[280px] max-w-full pill focus:outline-[var(--primary-color)] h-[34px] px-3 appearance-none border"
          />
        </div>
        <div className="flex gap-4">
          <Button
            loading={state == "submitting" && formMethod == "put"}
            type="submit"
            loadingEl="Loading..."
          >
            Save
          </Button>
          <button type="button">Cancel</button>
        </div>
      </Form>
    </div>
  );
}
