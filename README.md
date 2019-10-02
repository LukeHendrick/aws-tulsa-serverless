# Step Four

Great! We're successfully deploying our functions and services, but there's one problem. By default Serverless is delivering a single zip file to be used for all Lambdas, with all code being available in all Lambdas. Using Serverless' "package" object, we can request that our Lambdas be packaged individually, and that they only include the files that we explicitly want.

Deploy with:

`serverless deploy`

Remove with:

`serverless remove`