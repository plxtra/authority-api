---
title: Authority REST API - Association Controller
sidebar:
  label: /association/from/.../...
---

The `association/from/<type>/<code>` URL manages Associations from the `From` side of the relationship.

## Retrieve direct Associations from an Asset

`GET /association/from/<type>/<code>`

Retrieves the requested Asset, along with any direct Associations `From` that Asset.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| type      | A single URL-encoded Asset Type code. |
| code      | A single URL-encoded Asset code. |

### Query Parameters

| Parameter | Expected | Description |
|-----------|----------|-------------|
| totype    | Optional | An Asset Type code. Will only return Associations to Assets of this type.<br>Can be specified multiple times to include additional Asset Types. |
| app       | Optional | An Application identifier. Will only return Associations with context data for this Application.<br>Can be specified multiple times to include additional Applications. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | The Asset was found.<br>Content is a single [AssociationsFromAsset](../../../proto/dto/#associationsfromasset) object. |
| 404  | Failure | The Asset does not exist. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |

## Add or update Associations from an Asset

`POST /association/from/<type>/<code>`

Adds or updates Associations `From` the target Asset.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| type      | A single URL-encoded Asset Type code. |
| code      | A single URL-encoded Asset code. |

### POST Body

A single [AssociationsFromAsset](../../../proto/dto/#associationsfromasset) object describing the Assets and Associations.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 204  | Success | Completed successfully. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |

## Delete Associations from an Asset

`DELETE /association/from/<type>/<code>`

Deletes all Associations from an Asset.

Alternatively, if one or more `app` codes are included, remove any matching context data instead. Deletion when there's no more context data is controlled by `deleteOnEmpty`.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| type      | A single URL-encoded Asset Type code. |
| code      | A single URL-encoded Asset code. |

### Query Parameters

| Parameter | Expected | Description |
|-----------|----------|-------------|
| totype    | Optional | An Asset Type code. Will only delete Associations to Assets of this type.<br>Can be specified multiple times to include additional Asset Types. |
| app       | Optional | An Application identifier. Context data for this Application will be removed from the Associations.<br>Can be specified multiple times to delete additional Applications. |
| deleteOnEmpty | Optional | A boolean true/false. If true, and one or more `app` values are provided, Associations will be deleted when their context data is empty. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 204  | Success | Completed successfully. |
| 404  | Failure | The Asset does not exist. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |
