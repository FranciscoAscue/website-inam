const BASE_URL = import.meta.env.BASE_URL;

const EXTERNAL_PROTOCOL_RE = /^[a-z][a-z\d+\-.]*:/i;

export function withBase(path: string): string {
  if (!path) return BASE_URL;

  if (
    path.startsWith('#') ||
    path.startsWith('//') ||
    EXTERNAL_PROTOCOL_RE.test(path)
  ) {
    return path;
  }

  const hashIndex = path.indexOf('#');
  const hash = hashIndex >= 0 ? path.slice(hashIndex) : '';
  const pathname = hashIndex >= 0 ? path.slice(0, hashIndex) : path;

  if (!pathname || pathname === '/') {
    return `${BASE_URL}${hash}`;
  }

  const normalizedPath = pathname.startsWith('/') ? pathname.slice(1) : pathname;
  return `${BASE_URL}${normalizedPath}${hash}`;
}

export function stripBaseFromPathname(pathname: string): string {
  const basePath = BASE_URL.endsWith('/') ? BASE_URL.slice(0, -1) : BASE_URL;

  if (!basePath) return pathname || '/';
  if (pathname === basePath) return '/';
  if (pathname.startsWith(`${basePath}/`)) {
    return pathname.slice(basePath.length) || '/';
  }

  return pathname || '/';
}
