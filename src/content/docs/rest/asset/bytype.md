---
title: Authority REST API - Asset Controller
sidebar:
  label: /asset/bytype
---

The `asset/bytype` URL provides bulk management of Assets by Asset Type.

## Retrieve Assets by Asset Type

`GET /asset/bytype`

Retrieves all Assets of the given Asset Types.

### Query Parameters

| Parameter | Expected | Description |
|-----------|----------|-------------|
| type      | Optional | An Asset Type code. Can be specified multiple times to include additional Asset Types. |
| app       | Optional | An Application identifier. Will only return Assets with context data for this Application.<br>Can be specified multiple times to include additional Applications. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is an array of [Asset](../../../proto/authority/#asset) objects. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |

## Retrieve Assets of multiple Types (Bulk)

`POST /asset/bytype`

Retrieves all Assets of the given Asset Types.

This is an alternative endpoint for providing more codes than the maximum URL length permits.

### POST Body

A JSON string array, listing the Asset Type codes to retrieve.

### Query Parameters

| Parameter | Expected | Description |
|-----------|----------|-------------|
| app       | Optional | An Application identifier. Will only return Assets with context data for this Application.<br>Can be specified multiple times to include additional Applications. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is an array of [Asset](../../../proto/authority/#asset) objects. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |
