import { createClient } from "@supabase/supabase-js";
import { Database } from "../types/schema";

export const supabaseUrl = "https://lzrslhygdxwyshinircf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6cnNsaHlnZHh3eXNoaW5pcmNmIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODk2Mzg3NTUsImV4cCI6MjAwNTIxNDc1NX0.z-a5AsMKOt5kUlQEqykyFIjKnaVzaADYOumPVLQmbTo";

const supabase = createClient<Database>(supabaseUrl, supabaseKey);

export default supabase;
