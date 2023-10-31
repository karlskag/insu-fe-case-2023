export const getCookie = (name: string) =>
  document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`)?.pop() || '';

export function removeCookie(name: string) {
  document.cookie = `${name} =; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
  document.cookie = `${name} =; path=/app; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
  document.cookie = `${name} =; path=/login; expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}
