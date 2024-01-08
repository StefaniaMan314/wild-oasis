import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://vwkwxkcrgrrzipkuxshy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3a3d4a2NyZ3Jyemlwa3V4c2h5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDAxNjI3ODEsImV4cCI6MjAxNTczODc4MX0.7O_91RuG6-Xn-hw8VmDf8VO12WFrp9UQo54bLJW0IHQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
