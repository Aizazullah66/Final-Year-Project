import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://bzveyahkdhimqekitehi.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ6dmV5YWhrZGhpbXFla2l0ZWhpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4OTkzNjMsImV4cCI6MjA2MjQ3NTM2M30.oep0o6CA-B7y8-BWrI8aiKBJu5KLtC5ZroXNQ90hRmg"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});