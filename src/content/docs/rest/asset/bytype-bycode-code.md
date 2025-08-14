---
title: Authority REST API - Asset Controller
sidebar:
  label: /asset/bytype/$/bycode/$
---

The `asset/bytype/<type>/bycode/<code>` URL manipulates individual Assets by code.

## Check for an Asset

`HEAD /asset/bytype/<type>/bycode/<code>`

Checks if an Asset is registered.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| type      | A single URL-encoded Asset Type code. |
| code      | A single URL-encoded Asset code. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 204  | Success | The Asset exists. |
| 404  | Failure | The Asset does not exist. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |

## Retrieve an Asset

`GET /asset/bytype/<type>/bycode/<code>`

Retrieves an Asset.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| type      | A single URL-encoded Asset Type code. |
| code      | A single URL-encoded Asset code. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | The Asset was found.<br>Content is a single [Asset](../../../proto/authority/#asset) object. |
| 404  | Failure | The Asset does not exist. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |

## Add or update an Asset

`POST /asset/bytype/<type>/bycode/<code>`

Adds or updates a registered Asset. The Context data will be merged with any existing registration.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| type      | A single URL-encoded Asset Type code. |
| code      | A single URL-encoded Asset code. |

### POST Body

A single [Asset](../../../proto/authority/#asset) object to add or update. The supplied Asset Type and code must match that of the URL.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 201  | Success | The Asset was registered.<br>The redirect Location will point to the registered Asset Type. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |

## Replace/rename an Asset

`PATCH /asset/bytype/<type>/bycode/<code>`

Replaces a registered Asset, optionally changing its Asset Type and/or Asset code.

The supplied Context data will replace any existing Context data.

If the Asset Type and/or code are changed, all Associations to or from that Asset will change to the new Asset Type and/or code.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| type      | A single URL-encoded Asset Type code. |
| code      | A single URL-encoded Asset code. |

### POST Body

A single [Asset](../../../proto/authority/#asset) object to replace. The supplied Asset Type and/or code can differ from the URL.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 201  | Success | The Asset Type was replaced.<br>The redirect Location will point to the new registered Asset Type. |
| 404  | Failure | The Asset Type does not exist. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |

## Remove an Asset

`DELETE /asset/bytype/<type>/bycode/<code>`

Deletes a registered Asset. Will fail if any Associations reference this Asset.

Alternatively, if one or more `app` codes are included, removes any matching context data instead. Deletion when there's no more context data is controlled by `deleteOnEmpty`.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| type      | A single URL-encoded Asset Type code. |
| code      | A single URL-encoded Asset code. |

### Query Parameters

| Parameter | Expected | Description |
|-----------|----------|-------------|
| app       | Optional | An Application identifier. Context data for this Application will be removed from the Asset.<br>Can be repeated to delete additional Applications. |
| deleteOnEmpty | Optional | A boolean true/false. If true, and one or more `app` values are provided, the Asset will be deleted when its context data is empty. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 204  | Success | The Asset was deleted. |
| 404  | Failure | The Asset does not exist. |
| 409  | Failure | The operation would cause a conflict.<br>Content is a JSON array of one or more error codes describing the problem. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |
