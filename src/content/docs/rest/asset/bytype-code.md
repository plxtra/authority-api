---
title: Authority REST API - Asset Controller
sidebar:
  label: /asset/bytype/$
---

The Asset ByType Type URL allows for retrieval of Assets of a given Asset Type.

## Retrieve Assets of a single Type

`GET /asset/bytype/<type>`

Performing a GET on this URL retrieves all Assets that match the given Asset Type code.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| type      | A single URL-encoded Asset Type code. |

### Query Parameters

| Parameter | Expected | Description |
|-----------|----------|-------------|
| app       | Optional | The identifier of an Application. Will only return Assets that have context data mentioning this Application.<br>Can be specified multiple times to search for multiple Applications, where any match will return a result. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is an array of [Asset](../../proto/authority/#asset) objects. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |
