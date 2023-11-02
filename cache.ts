import { LRUCache } from 'lru-cache'

declare var __ESM_BROWSER__: boolean
declare var __GLOBAL__: boolean

export function createCache<T extends {}>(
  max = 500
): Map<string, T> | LRUCache<string, T> {
  if (__GLOBAL__ || __ESM_BROWSER__) {
    return new Map<string, T>()
  }
  return new LRUCache({ max })
}
