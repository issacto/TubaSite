#mv expertAI.py /Users/issac/Documents/ExperAi/bin/python
#$ cd documents/ExperAi/lib/python3.7/site-packages/
# zip -r9 lambda_function.zip *
#source ExperAi/bin/activate
import os
import json
os.environ["EAI_USERNAME"] = 'tototototoman@gmail.com'
os.environ["EAI_PASSWORD"] = 'pUfver-rodkoj-zigso7'
from expertai.nlapi.cloud.client import ExpertAiClient

def lambda_handler(event, context):
    client = ExpertAiClient()   
    text = event['queryStringParameters']['review']
    language= 'en'
    document = client.specific_resource_analysis(
    body={"document": {"text": text}}, 
    params={'language': language, 'resource': 'sentiment'})
    document1 = client.specific_resource_analysis(
    body={"document": {"text": text}}, 
    params={'language': language, 'resource': 'relevants'})
    x=[]
    a= []
    for mainlemma in document1.main_lemmas:
        x.append(mainlemma.value)
    a.append(document.sentiment.overall)
    a.append(x)

    return {
        'statusCode': 200,
        'headers': {
            "Access-Control-Allow-Headers" : "Content-Type",
            "Access-Control-Allow-Origin": "*" ,
            "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
        },
        'body':  json.dumps(a)
    }