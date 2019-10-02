# Step Three

We've added a second function, this lambda will be invoked with a POST request. In the path field we've specified a parameter `name`. This will be passed into our lambda on the event object, in the pathParameter field.

An example API Gateway URL for the POST request:

`https://yt9srzume8.execute-api.us-east-1.amazonaws.com/dev/world/Luke

Deploy with:

`serverless deploy`

Remove with:

`serverless remove`