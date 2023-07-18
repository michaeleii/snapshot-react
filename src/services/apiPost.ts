import { randomImageName } from "../helpers/generateRandomImageName";
import supabase, { supabaseUrl } from "./supabase";

export async function getAllPosts() {
  const { data, error } = await supabase
    .from("post")
    .select(
      `
    id,
    image_url,
    user_id
    `
    )
    .order("created_at", { ascending: false });
  if (error) {
    throw error;
  }

  return data;
}

export async function createPost(image: File) {
  const [imageName, extension] = image.name.split(".");
  const randomizedImageName = randomImageName(imageName, extension);
  const image_url = `${supabaseUrl}/storage/v1/object/public/user-images/${randomizedImageName}`;
  const { data, error } = await supabase
    .from("post")
    .insert([{ user_id: "f1c8edda-1b8e-4da6-b0e1-5da35bd77a61", image_url }])
    .select();
  if (error) {
    throw error;
  }
  const { error: StorageError } = await supabase.storage
    .from("user-images")
    .upload(randomizedImageName, image);
  if (StorageError) {
    throw StorageError;
  }
  return data;
}
