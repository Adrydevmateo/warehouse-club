export function getEnv(name: 'VITE_PASSWORD' | 'VITE_PROJECT_URL' | 'VITE_API_KEY') {
  const result = import.meta.env[name]
  if (result) return result
  logWarning(`Environment variable not found: ${name}`)
}

export const logInfo = (msg: string) => console.log(`@@ INFO | ${msg}`)
export const logWarning = (msg: string) => console.warn(`@@ WARNING | ${msg}`)
export const logError = (msg: string) => console.error(`@@ ERROR | ${msg}`)