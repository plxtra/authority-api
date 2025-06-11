---
title: Authority REST API - Type Controller
sidebar:
  label: /type/bycode/$
---

The `type/bycode/<code>` URL manipulates individual Asset Types.

## Check for an Asset Type

`HEAD /type/bycode/<code>`

Checks if an Asset Type is registered.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| code      | A single URL-encoded Asset Type code. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 204  | Success | The Asset Type exists. |
| 404  | Failure | The Asset Type does not exist. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |

## Retrieve an Asset Type

`GET /type/bycode/<code>`

Retrieves an Asset Type.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| code      | A single URL-encoded Asset Type code. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | The Asset Type was found.<br>Content is a single [AssetType](../../proto/authority/#assettype) object. |
| 404  | Failure | The Asset Type does not exist. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |

## Add or update an Asset Type

`POST /type/bycode/<code>`

Adds or updates a registered Asset Type.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| code      | A single URL-encoded Asset Type code. |

### POST Body

A single [AssetType](../../proto/authority/#assettype) object to add or update. The supplied Asset Type code must match that of the URL.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 201  | Success | The Asset Type was registered.<br>The redirect Location will point to the registered Asset Type. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |

## Replace/rename a Type

`PATCH /type/bycode/<code>`

Replaces a registered Asset Type, optionally changing its Asset Type code.

If the Asset Type code is changed, all Assets with that type change to the new code.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| code      | A single URL-encoded Asset Type code. |

### POST Body

A single [AssetType](../../proto/authority/#assettype) object to replace. The supplied Asset Type code can differ from the URL.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 201  | Success | The Asset Type was replaced.<br>The redirect Location will point to the updated Asset Type. |
| 404  | Failure | The Asset Type does not exist. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |

## Remove a Type

`DELETE /type/bycode/<code>`

Deletes a registered Asset Type. Will fail if any Assets exist with this Asset Type.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| code      | A single URL-encoded Asset Type code |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 204  | Success | The Asset Type was deleted. |
| 404  | Failure | The Asset Type does not exist.
| 409  | Failure | The operation would cause a conflict.<br>Content is a JSON array of one or more error codes describing the problem. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |
