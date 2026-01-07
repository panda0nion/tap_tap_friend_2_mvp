export async function graphqlRequest<T>(
  query: string,
  variables?: Record<string, unknown>,
  authToken?: string
): Promise<T> {
  const url = import.meta.env.VITE_GRAPHQL_URL as string | undefined;
  if (!url) {
    throw new Error("VITE_GRAPHQL_URL is not set");
  }

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      ...(authToken ? { Authorization: authToken } : {})
    },
    body: JSON.stringify({ query, variables })
  });

  if (!res.ok) {
    throw new Error(`GraphQL error: ${res.status}`);
  }

  const json = await res.json();
  if (json.errors?.length) {
    throw new Error(json.errors[0]?.message ?? "GraphQL error");
  }
  return json.data as T;
}
