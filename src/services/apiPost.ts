import { randomImageName } from "../helpers/generateRandomImageName";
import { getPagination } from "../helpers/getPagination";
import supabase, { supabaseUrl } from "./supabase";

export async function getAllPosts(page: number) {
  const { from, to } = getPagination(page, 2);
  const { data, error } = await supabase
    .from("post")
    .select(
      `
    id,
    image_url,
    user ( id, username )
    `
    )
    .range(from, to)
    .order("created_at", { ascending: false });
  if (error) throw error;
  return { data, page };
}

export async function createPost(image: File) {
  const [imageName, extension] = image.name.split(".");
  const randomizedImageName = randomImageName(imageName, extension);
  const image_url = `${supabaseUrl}/storage/v1/object/public/user-images/${randomizedImageName}`;
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();
  if (!user) return null;
  if (userError) throw userError;

  const { data, error } = await supabase
    .from("post")
    .insert([{ user_id: user.id, image_url }])
    .select();
  if (error) throw error;

  const { error: StorageError } = await supabase.storage
    .from("user-images")
    .upload(randomizedImageName, image);
  if (StorageError) throw StorageError;

  return data;
}
