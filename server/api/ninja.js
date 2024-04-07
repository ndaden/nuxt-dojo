export default defineEventHandler(async (event) => {
  // handle query params
  // const { name } = getQuery(event);

  // handle post data
  // const { age } = await readBody(event);

  // in a server route we use $fetch, useFetch is a wrapper around $fetch
  const { data } = await $fetch("https://domain/business?apiKey=123456");

  return data;
});
