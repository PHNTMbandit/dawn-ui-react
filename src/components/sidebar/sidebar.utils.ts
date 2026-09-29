export const getStoredSidebarOpen = (id: string, fallback: boolean) => {
  if (typeof document === 'undefined') return fallback
  const match = document.cookie.match(new RegExp(`(?:^|; )sidebar-state-${id}=([^;]*)`))
  return match ? decodeURIComponent(match[1]) === 'true' : fallback
}
