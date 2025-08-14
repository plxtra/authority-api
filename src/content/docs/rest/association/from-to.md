---
title: Authority REST API - Association Controller
sidebar:
  label: /association/from/$/$/to/$
---

## Retrieve all Associations from an Asset to an Asset Type

`GET /association/from/<type>/<code>/to/<totype>`

Retrieves the requested Asset, along with any direct Associations `From` that Asset to Assets of a specific type.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| type      | A single URL-encoded Asset Type code. |
| code      | A single URL-encoded Asset code. |
| totype    | A single URL-encoded Asset Type code. Will only return Associations to Assets of this type. |

### Query Parameters

| Parameter | Expected | Description |
|-----------|----------|-------------|
| app       | Optional | An Application identifier. Will only return Associations with context data for this Application.<br>Can be repeated to include additional Applications. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | The Asset was found.<br>Content is a single [AssociationsFromAsset](../../../proto/dto/#associationsfromasset) object. |
| 404  | Failure | The Asset does not exist. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |

## Synchronise all Associations from an Asset to an Asset Type

`PATCH /association/from/<type>/<code>/to/<totype>`

Performs a synchronisation of Associations to Assets of a specific type, which involves:

* Adding or updating existing Associations.
* Removing unlisted Associations - that is, Associations with the right Asset Type not included in this call.

Alternatively, if one or more `app` codes are included, removes any matching context data from unlisted Associations instead. Deletion when there's no more context data is controlled by `deleteOnEmpty`.

This method will add or update Assets as necessary, for both the root and associated Assets. They do not need to be created first.

This method will not remove Assets, even if they were created by a previous Association operation.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| type      | A single URL-encoded Asset Type code. |
| code      | A single URL-encoded Asset code. |
| totype    | A single URL-encoded Asset Type code. Will only affect Associations to Assets of this type. |

### Query Parameters

| Parameter | Expected | Description |
|-----------|----------|-------------|
| app       | Optional | An Application identifier. Context data for this Application will be removed from unlisted Associations.<br>Can be repeated to delete additional Applications. |
| deleteOnEmpty | Optional | A boolean true/false. If true, and one or more `app` values are provided, unlisted Associations will be deleted when their context data is empty. |

### POST Body

An [AssociationsFromAsset](../../proto/dto/#assocationsfromasset) object describing the root Asset and any direct associated Assets.

Only Assets that match `totype` can be supplied.
