module.exports.handler = async (event, context) => {
  let { name } = event.pathParameters;
  return {
    statusCode: 200,
    body: JSON.stringify({message: `Hello ${name}`})
  };
};