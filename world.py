import json

def handler(event, context):
  name = event['pathParameters']['name']
  return {
    "statusCode": 200,
    "body": json.dumps({"message": f"Hello {name}"})
  }