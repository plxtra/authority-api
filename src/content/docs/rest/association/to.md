---
title: Authority REST API - Association Controller
sidebar:
  label: /association/to/$
---

The `association/to/<type>/<code>` URL manages Associations from the `To` side of the relationship.

## Retrieve direct Associations to an Asset

`GET /association/to/<type>/<code>`

Retrieves the requested Asset, along with any direct Associations `To` that Asset.

### URL Parameters

| Parameter | Description |
|-----------|-------------|
| type      | A single URL-encoded Asset Type code. |
| code      | A single URL-encoded Asset code. |

### Query Parameters

| Parameter | Expected | Description |
|-----------|----------|-------------|
| fromtype  | Optional | An Asset Type code. Will only return Associations from Assets of this type.<br>Can be specified multiple times to include additional Asset Types. |
| app       | Optional | An Application identifier. Will only return Associations with context data for this Application.<br>Can be specified multiple times to include additional Applications. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | The Asset was found.<br>Content is a single [AssociationsToAsset](../../../proto/dto/#associationstoasset) object. |
| 404  | Failure | The Asset does not exist. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |
