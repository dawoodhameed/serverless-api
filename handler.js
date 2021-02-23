export const hello = async (event, context) => {
  //event object contains all the information that triggered this lambda
  //context object contains info about the runtime our lambda is executing in
  console.log(event);
  console.info(context);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "testing dawood",
    }),
  };
};
