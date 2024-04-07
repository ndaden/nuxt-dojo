export default defineEventHandler(async (event) => {
  const { code } = event.context.params;
  const { apiKey } = useRuntimeConfig();

  const uri = `https://domain/business/${code}?apiKey=${apiKey}`;

  console.log(uri);
  const data = await $fetch(uri);

  return data;
});
