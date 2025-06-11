---
title: Authority REST API - Asset Controller
sidebar:
  label: /asset/bytype/$
---

The `asset/bytype/<type>` URL provides bulk management of Assets by Asset Type.

## Retrieve Assets by Asset Type

`GET /asset/bytype/<type>`

Retrieves all Assets of the given Asset Type.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| type      | A single URL-encoded Asset Type code. |

### Query Parameters

| Parameter | Expected | Description |
|-----------|----------|-------------|
| app       | Optional | An Application identifier. Will only return Assets with context data for this Application.<br>Can be specified multiple times to include additional Applications. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is an array of [Asset](../../../proto/authority/#asset) objects. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |
