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
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();
  if (!user) return null;
  if (userError) throw userError;

  const [imageName, extension] = image.name.split(".");
  const randomizedImageName = randomImageName(imageName, extension);
  const image_url = `${supabaseUrl}/storage/v1/object/public/user-images/${user.id}/${randomizedImageName}`;

  const { data, error } = await supabase
    .from("post")
    .insert([{ user_id: user.id, image_url }])
    .select();
  if (error) throw error;

  const { error: StorageError } = await supabase.storage
    .from("user-images")
    .upload(`${user.id}/${randomizedImageName}`, image);
  if (StorageError) throw StorageError;

  return data;
}

export async function deletePost(id: number) {
  const { data, error } = await supabase
    .from("post")
    .delete()
    .match({ id })
    .select();
  if (!data) return null;
  if (error) throw error;
  const photo = data[0];
  const imageName = photo.image_url.split("/").pop() || "";
  const { error: StorageError } = await supabase.storage
    .from("user-images")
    .remove([`${photo.user_id}/${imageName}`]);
  if (StorageError) throw StorageError;
  return data;
}
