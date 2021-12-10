export const reducerUtils = {
  initial: (data = null) => ({
    isLoading: false,
    data,
    error: null,
  }),
  loading: (preveState = null) => ({
    data: preveState,
    isLoading: true,
    error: null,
  }),
  success: (data) => ({
    data,
    isLoading: false,
    error: null,
  }),
  error: (error) => ({
    data: null,
    isLoading: false,
    error,
  }),
};
