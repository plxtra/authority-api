---
title: Authority REST API - Association Controller
sidebar:
  label: /association/from/$/$/to/$/$
---

The `association/from/<type>/<code>/to/<totype>/<tocode>` URL manipulates individual Associations between two Assets.

## Check for an Association

`HEAD /association/from/<type>/<code>/to/<totype>/<tocode>`

Checks if an Association exists between two Assets.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| type      | A single URL-encoded Asset Type code. |
| code      | A single URL-encoded Asset code. |
| totype    | A single URL-encoded Asset Type code. |
| tocode    | A single URL-encoded Asset code. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 204  | Success | The Association exists. |
| 404  | Failure | The Association does not exist. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |

## Retrieve an Association

`GET /association/from/<type>/<code>/to/<totype>/<tocode>`

Retreives an Association between two Assets.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| type      | A single URL-encoded Asset Type code. |
| code      | A single URL-encoded Asset code. |
| totype    | A single URL-encoded Asset Type code. |
| tocode    | A single URL-encoded Asset code. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | The Association exists.<br>Content is a single [FullAssociation](../../../proto/dto/#fullassociation) object. |
| 404  | Failure | The Association does not exist. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |

## Add or update an Association

`POST /association/from/<type>/<code>/to/<totype>/<tocode>`

Adds or updates an Association between two Assets. The Context data will be merged with any existing Association and Assets.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| type      | A single URL-encoded Asset Type code. |
| code      | A single URL-encoded Asset code. |
| totype    | A single URL-encoded Asset Type code. |
| tocode    | A single URL-encoded Asset code. |

### POST Body

A single [FullAssociation](../../../proto/dto/#fullassociation) object to add or update. The supplied Asset Types and codes must match that of the URL.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 201  | Success | The Association was registered.<br>The redirect Location will point to the Association. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |

## Deletes an Association between two Assets

`DELETE /association/from/<type>/<code>/to/<totype>/<tocode>`

Deletes an Association between two Assets.

Alternatively, if one or more `app` codes are included, removes any matching context data instead. Deletion when there's no more context data is controlled by `deleteOnEmpty`.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| type      | A single URL-encoded Asset Type code. |
| code      | A single URL-encoded Asset code. |
| totype    | A single URL-encoded Asset Type code. |
| tocode    | A single URL-encoded Asset code. |

### Query Parameters

| Parameter | Expected | Description |
|-----------|----------|-------------|
| app       | Optional | An Application identifier. Context data for this Application will be removed from the Association.<br>Can be specified multiple times to delete additional Applications. |
| deleteOnEmpty | Optional | A boolean true/false. If true, and one or more `app` values are provided, the Association will be deleted when its context data is empty. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 204  | Success | The Association was deleted. |
| 404  | Failure | The Association does not exist. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |
