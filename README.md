# Simple Crud

A simple, one-click deploy, CRUD backend for web and mobile apps. Uses the Serverless Framework to deploy to AWS and Webpack under the hood to minify the source code for AWS Lambda to be more cost-effective and performant.

## Tech Stack

**Server:** Node, AWS API Gateway, AWS Lambda, DynamoDB, Serverless Framework

## Available Scripts

To deploy, setup the proper AWS credentials found in the Github Actions .yml file in the secrets section of your Github repo and push to Github.

To deploy without CI/CD, set up AWS credentials in your shell environment and run the following commands

```bash
  npm i
  npx serverless deploy
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
