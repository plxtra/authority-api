---
title: Authority REST API - Asset Controller
sidebar:
  label: /asset/bytype/$/bycode/$
---

The Asset ByType ByCode Code URL allows for manipulating individual Assets by their type and code.

## Verify an Asset exists

`HEAD /asset/bytype/<type>/bycode/<code>`

Checks if an Asset exists with the supplied type and code.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| type      | A single URL-encoded Asset Type code. |
| code      | A single URL-encoded Asset code |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 204  | Success | The Asset exists. |
| 404  | Failure | The Asset does not exist.
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |

## Retrieve a single Asset

`GET /asset/bytype/<type>/bycode/<code>`

Retrieves an Asset with the supplied type and code.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| type      | A single URL-encoded Asset Type code. |
| code      | A single URL-encoded Asset code |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | The Asset was found.<br>Content is a single [Asset](../../proto/authority/#asset) object. |
| 404  | Failure | The Asset does not exist.
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |

## Add or update an Asset

`POST /asset/bytype/<type>/bycode/<code>`

Adds or updates an existing Asset registration.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| type      | A single URL-encoded Asset Type code. |
| code      | A single URL-encoded Asset code |

### POST Body

A single [Asset](../../proto/authority/#asset) object to add or update. The supplied Asset type and code must match that of the URL.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 201  | Success | The Asset was registered.<br>The redirect Location will point to the registered Asset Type. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |

## Replace/rename an Asset

`PATCH /asset/bytype/<type>/bycode/<code>`

Replaces an existing Asset registration, optionally changing its Asset Type and/or code.

If the Asset type and/or code is changed, all existing Associations to that Asset will instead point to the new Asset.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| type      | A single URL-encoded Asset Type code. |
| code      | A single URL-encoded Asset code |

### POST Body

A single [Asset](../../proto/authority/#asset) object to replace. The supplied Asset type and/or code can differ from the URL.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 201  | Success | The Asset Type was replaced.<br>The redirect Location will point to the new registered Asset Type. |
| 404  | Failure | The Asset Type does not exist.
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |

## Remove an Asset

`DELETE /asset/bytype/<type>/bycode/<code>`

Deletes an existing Asset registration. Will fail if Associations exist for this Asset, either To or From.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| type      | A single URL-encoded Asset Type code. |
| code      | A single URL-encoded Asset code |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 204  | Success | The Asset was deleted. |
| 404  | Failure | The Asset does not exist.
| 409  | Failure | The operation would cause a conflict.<br>Content is a JSON array of one or more error codes describing the problem. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |
