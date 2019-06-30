# Coporate Equality Index (CEI) API
This API takes the name of a company and returns its 2019 CEI rating.

## Endpoints

### `GET /companies`
Returns list of valid company names that the API has CEI ratings for.

### `GET /cei`
#### Query Params:
- `company`: Name of the company to retreive CEI rating for. Must be valid company name. Valid company names can be retreived from `GET /companies`

#### Example:
```
GET /cei?company=Accenture

# response:
# {"company":"Accenture","cei_2019":"100"}
```

## Live Sandbox Environment:
http://cei-api.us-east-1.elasticbeanstalk.com/companies
