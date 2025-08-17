/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_BASE_URL } from "./constants";

type RequestInitLike = RequestInit & {
  query?: Record<string, string | number | boolean | undefined>;
};

export async function apiFetch<T = any>(
  path: string,
  tag?: string,
  init: RequestInitLike = {}
): Promise<T> {
  const { query, ...rest } = init;

  let qs = "";
  if (query) {
    const sp = new URLSearchParams();
    Object.entries(query).forEach(([k, v]) => {
      if (v !== undefined && v !== null) sp.set(k, String(v));
    });
    qs = `?${sp.toString()}`;
  }

  const url = `${API_BASE_URL}${path}${qs}`;

  const headers = new Headers(rest.headers ?? {});
  if (!headers.has("Content-Type") && !(rest.body instanceof FormData)) {
    headers.set("Content-Type", "application/json");
  }

  const res = await fetch(url, {
    ...rest,
    headers,
    next: { revalidate: 300, tags: tag ? [tag] : undefined },
    credentials: rest.credentials ?? "include",
  });

  const text = await res.text();
  let body: any = text;
  try {
    body = text ? JSON.parse(text) : null;
  } catch {
  }

  if (!res.ok) {
    const message = body?.message ?? res.statusText ?? "Request failed";
    const err: any = new Error(message);
    err.status = res.status;
    err.body = body;
    throw err;
  }

  return body;
}
