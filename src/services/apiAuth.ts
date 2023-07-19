import supabase from "./supabase";

export async function signUp(
  username: string,
  email: string,
  password: string
) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
  });
  if (error) throw error;
  if (data && data.user) {
    const { error: CreateUserError } = await supabase
      .from("user")
      .insert([{ id: data.user.id, username }])
      .select();
    if (CreateUserError) throw CreateUserError;
  }
  return data;
}

export async function login(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw error;

  return data;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw error;
}

export async function getCurrentUser() {
  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();
  if (!user) return null;
  if (userError) throw userError;
  const { data: currentUser, error } = await supabase
    .from("user")
    .select()
    .eq("id", user.id);
  if (error) throw error;
  return currentUser?.[0];
}
