---
title: Authority REST API - Asset Controller
sidebar:
  label: /asset/bytype/$/bycode
---

The Asset ByType ByCode URL allows for retrieval of Assets based on their codes.

## Retrieve multiple Assets by Code

`GET /asset/bytype/<type>/bycode`

Retrieves all Assets of the given type that match the supplied list of codes.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| type      | A single URL-encoded Asset Type code. |

### Query Parameters

| Parameter | Expected | Description |
|-----------|----------|-------------|
| code      | Optional | The identifier of an Asset. Can be specified multiple times to retrieve multiple Assets. |
| app       | Optional | The identifier of an Application. Will only return Assets that have context data mentioning this Application.<br>Can be specified multiple times to search for multiple Applications, where any match will return a result. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is an array of [Asset](../../proto/authority/#asset) objects. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |

## Retrieve multiple Assets by Code (bulk)

`POST /asset/bytype/<type>/bycode`

Retrieves all Assets of the given type that match the supplied list of codes.

This is an alternative endpoint for when a large list of Asset codes needs to be provided.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| type      | A single URL-encoded Asset Type code. |

### POST Body

A JSON array of strings, listing the codes of the Assets to retrieve.

### Query Parameters

| Parameter | Expected | Description |
|-----------|----------|-------------|
| app       | Optional | The identifier of an Application. Will only return Assets that have context data mentioning this Application.<br>Can be specified multiple times to search for multiple Applications, where any match will return a result. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is an array of [Asset](../../proto/authority/#asset) objects. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |

## Delete multiple Assets by Code

`DELETE /asset/bytype/<type>/bycode`

Deletes all Assets of the given type that match the supplied list of codes.

Alternatively, if one or more `app` codes are included, this will remove the matching Application data. Completely deleting the Asset is controlled by `deleteOnEmpty`.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| type      | A single URL-encoded Asset Type code. |

### POST Body

A JSON array of strings, listing the codes of the Assets to delete.

### Query Parameters

| Parameter | Expected | Description |
|-----------|----------|-------------|
| app       | Optional | The identifier of an Application. Will only affect Assets that have context data mentioning this Application, and will simply remove the Application from its data.<br>Can be specified multiple times to delete multiple Applications. |
| deleteOnEmpty | Optional | A boolean true/false. If true, and one or more `app` values are provided, will delete matching Assets when no Application data remains. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 204  | Success | Completed successfully.<br>Asset codes that do not match a registered Asset will be ignored. |
| 409  | Failure | The operation would cause a conflict.<br>Content is a JSON array of one or more error codes describing the problem. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |
