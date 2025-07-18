import { createClient } from '@supabase/supabase-js';
import {Database} from "@/lib/database";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient<Database>(supabaseUrl, supabaseKey, {
  auth: {
    // persistSession: false,
    // autoRefreshToken: false // 토큰 리프레쉬 방지
  }
});