---
title: Authority REST API - Asset Controller
sidebar:
  label: /asset/bytype/$/bycode
---

The `asset/bytype/<type>/bycode` URL provides bulk management of Assets by code.

## Retrieve Assets by code

`GET /asset/bytype/<type>/bycode`

Retrieves the listed Assets of the given type.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| type      | A single URL-encoded Asset Type code. |

### Query Parameters

| Parameter | Expected | Description |
|-----------|----------|-------------|
| code      | Optional | An Asset code. Can be specified multiple times to retrieve additional Assets. |
| app       | Optional | An Application identifier. Will only return Assets with context data for this Application.<br>Can be specified multiple times to include additional Applications. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is an array of [Asset](../../../proto/authority/#asset) objects. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |

## Retrieve Assets by code (bulk)

`POST /asset/bytype/<type>/bycode`

Retrieves the listed Assets of the given type.

This is an alternative endpoint for providing more codes than the maximum URL length permits.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| type      | A single URL-encoded Asset Type code. |

### Query Parameters

| Parameter | Expected | Description |
|-----------|----------|-------------|
| app       | Optional | An Application identifier. Will only return Assets with context data for this Application.<br>Can be specified multiple times to include additional Applications. |

### POST Body

A JSON string array, listing the Asset codes to retrieve.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is an array of [Asset](../../../proto/authority/#asset) objects. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |

## Delete Assets by code

`DELETE /asset/bytype/<type>/bycode`

Deletes the listed Assets of the given type.

Alternatively, if one or more `app` codes are included, removes any matching context data instead. Deletion of Assets with no more context data is controlled by `deleteOnEmpty`.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| type      | A single URL-encoded Asset Type code. |

### Query Parameters

| Parameter | Expected | Description |
|-----------|----------|-------------|
| app       | Optional | An Application identifier. Context data for this Application will be removed from the listed Assets.<br>Can be specified multiple times to delete additional Applications. |
| deleteOnEmpty | Optional | A boolean true/false. If true, and one or more `app` values are provided, Assets will be deleted when their context data is empty. |

### POST Body

A JSON string array, listing the Asset codes to delete.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 204  | Success | Completed successfully.<br>Asset codes that do not match a registered Asset will be ignored. |
| 409  | Failure | The operation would cause a conflict.<br>Content is a JSON array of one or more error codes describing the problem. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |
