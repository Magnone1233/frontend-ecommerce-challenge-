export const getAuthHeaders = (includeContentType = false) => {
  const token = localStorage.getItem("accessToken");

  return {
    ...(includeContentType ? { "Content-Type": "application/json" } : {}),
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
};
