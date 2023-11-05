export const ApiPath = (resource: string) =>
  `${process.env.API_URL}/api/v1/${resource}`;
