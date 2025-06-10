---
title: Authority REST API - Asset Controller
sidebar:
  label: /asset/bytype
---

The Asset ByType URL allows for bulk retrieval of Assets by their types.

## Retrieve Assets of multiple Types

`GET /asset/bytype`

Retrieves all Assets that match one of the given Types.

### Query Parameters

| Parameter | Expected | Description |
|-----------|----------|-------------|
| type      | Optional | The identifier of an Asset Type. Can be specified multiple times to retrieve all Assets from multiple Types. |
| app       | Optional | The identifier of an Application. Will only return Assets that have context data mentioning this Application.<br>Can be specified multiple times to search for multiple Applications, where any match will return a result. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is an array of [Asset](../../proto/authority/#asset) objects. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |

## Retrieve Assets of multiple Types (Bulk)

`POST /asset/bytype`

Retrieves all Assets that match one of the given Types.

This is an alternative endpoint for when a large list of Asset Types needs to be provided.

### POST Body

A JSON array of strings, listing the identifiers of the Asset Types to retrieve.

### Query Parameters

| Parameter | Expected | Description |
|-----------|----------|-------------|
| app       | Optional | The identifier of an Application. Will only return Assets that have context data mentioning this Application.<br>Can be specified multiple times to search for multiple Applications, where any match will return a result. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is an array of [Asset](../../proto/authority/#asset) objects. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |
