import Button from "../misc/Button";
import { useCreatePost } from "./useCreatePost";

function UploadImage() {
  const { mutate, isLoading } = useCreatePost();
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (e.target instanceof HTMLFormElement) {
      const formData = new FormData(e.target);
      const image = formData.get("image");
      if (image instanceof File) {
        mutate(image);
      }
    }
  }
  return (
    <div className="flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex max-w-md flex-col gap-5 rounded-lg bg-white p-10 "
      >
        <h1 className="mb-5 text-3xl font-bold tracking-tighter">
          Create a post
        </h1>
        <div>
          <input
            type="file"
            name="image"
            id="image"
            required
            accept="image/png, image/jpeg"
          />
        </div>
        <div>
          <Button disabled={isLoading}>
            {isLoading ? "Uploading..." : "Upload"}
          </Button>
        </div>
      </form>
    </div>
  );
}
export default UploadImage;
