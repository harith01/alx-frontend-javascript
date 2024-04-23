export default function handleResponseFromAPI(promise) {
  return (
    promise.finally(() => console.log('Got a response from the API'))
      .then(() => ({ status: 200, body: 'Success' }), new Error())
  );
}
