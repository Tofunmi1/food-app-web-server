import { Cache, QueryInput } from '@urql/exchange-graphcache';

/*urql doesn't have good types on it cache function, so we create ours*/
export function betterUpdateQuery<Result, Query>(
  cache: Cache,
  qi: QueryInput,
  result: any,
  fn: (r: Result, q: Query) => Query) {
  return cache.updateQuery(qi, (data) => fn(result, data as any) as any);
}
