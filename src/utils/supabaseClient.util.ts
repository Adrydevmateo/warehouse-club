import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { getEnv, logError } from './logs.util'

const supabaseUrl = getEnv('VITE_PROJECT_URL')
const supabaseKey = getEnv('VITE_API_KEY')

let supabase: SupabaseClient<never, "public", never> | undefined = undefined

export function getSupabaseClient() {
  if (!supabaseUrl) return logError('Supabase URL was not provided')
  if (!supabaseKey) return logError('Supabase KEY was not provided')
  if (!supabase) supabase = createClient(supabaseUrl, supabaseKey)
  return supabase
}
