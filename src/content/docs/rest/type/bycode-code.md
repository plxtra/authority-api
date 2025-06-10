---
title: Authority REST API - Type Controller
sidebar:
  label: /type/bycode/$
---

The Type ByCode Code URL allows for manipulating individual Types by their code.

## Check if a Type exists

`HEAD /type/bycode/<code>`

Checks if an Asset Type exists with the supplied code.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| code      | A single URL-encoded Asset Type code |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 204  | Success | The Asset Type exists. |
| 404  | Failure | The Asset Type does not exist.
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |

## Retrieve a single Type

`GET /type/bycode/<code>`

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| code      | A single URL-encoded Asset Type code |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | The Asset Type was found.<br>Content is a single [AssetType](../../proto/authority/#assettype) object. |
| 404  | Failure | The Asset Type does not exist.
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |

## Add or update a Type

`POST /type/bycode/<code>`

Adds or updates an existing Asset Type registration.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| code      | A single URL-encoded Asset Type code |

### POST Body

A single [AssetType](../../proto/authority/#assettype) object to add or update. The supplied Asset Type code must match that of the URL.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 201  | Success | The Asset Type was registered.<br>The redirect Location will point to the registered Asset Type. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |

## Replace/rename a Type

`PATCH /type/bycode/<code>`

Replaces an existing Asset Type registration, optionally changing its Asset Type code.

If the Asset Type code is changed, all existing Assets of that Asset Type change to the new Asset Type.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| code      | A single URL-encoded Asset Type code |

### POST Body

A single [AssetType](../../proto/authority/#assettype) object to replace. The supplied Asset Type code can differ from the URL.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 201  | Success | The Asset Type was replaced.<br>The redirect Location will point to the new registered Asset Type. |
| 404  | Failure | The Asset Type does not exist.
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |

## Remove a Type

`DELETE /type/bycode/<code>`

Deletes an existing Asset Type registration. Will fail if Assets exist with this Asset Type.

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
