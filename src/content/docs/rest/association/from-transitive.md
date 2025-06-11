---
title: Authority REST API - Association Controller
sidebar:
  label: /association/from/$/$/transitive
---

The `association/from/<type>/<code>` URL manages transitive Associations following the `From` relationships.

## Retrieve transitive Associations from an Asset

`GET /association/from/<type>/<code>/transitive`

Retrieves the requested Asset, along with any transitive Associations `From` that Asset. This is a recursive process, retrieving all Associations from associated Assets.

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

:::note
Filtering only affects the results you receive. It does not prevent following the transitive Associations.

For example, if a type filter specifies `TradingAccount`, and the root Asset references a `Group` which itself references Trading Accounts, the `Group` association will not be returned, but the `TradingAccount` associations it has will.
:::

:::note
Filtering does not apply to the root Asset. It will always be included, regardless of the `totype` or `app` values provided.
:::

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | The Asset was found.<br>Content is a single [TransitiveAssociations](../../../proto/dto/#transitiveassociations) object. |
| 404  | Failure | The Asset does not exist. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |
