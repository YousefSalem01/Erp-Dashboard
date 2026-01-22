// TODO: Implement axios instance with interceptors
// This will be the shared API utility used across all module features

/**
 * API Configuration
 * - Base URL from environment
 * - Request interceptor for auth tokens
 * - Response interceptor for error handling
 * - Refresh token logic
 */

// TODO: Create axios instance
// TODO: Add request interceptor
// TODO: Add response interceptor
// TODO: Add refresh token logic

export const api = {
  // Placeholder - will be replaced with axios instance
  get: async <T>(_url: string): Promise<T> => {
    // TODO: Implement
    throw new Error('Not implemented');
  },
  post: async <T>(_url: string, _data: unknown): Promise<T> => {
    // TODO: Implement
    throw new Error('Not implemented');
  },
  put: async <T>(_url: string, _data: unknown): Promise<T> => {
    // TODO: Implement
    throw new Error('Not implemented');
  },
  delete: async <T>(_url: string): Promise<T> => {
    // TODO: Implement
    throw new Error('Not implemented');
  },
};
