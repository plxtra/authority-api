---
title: Authority REST API - Type Controller
sidebar:
  label: /type/bycode
---

The Type ByCode URL allows for bulk manipulation of Types by their codes. 

## Retrieve Types by multiple Codes

`GET /type/bycode`

Retrieves all Asset Types that match the supplied list of type codes.

### Query Parameters

| Parameter | Expected | Description |
|-----------|----------|-------------|
| code      | Optional | The identifier of an Asset Type. Can be specified multiple times to retrieve multiple Types. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is an array of [AssetType](../../proto/authority/#assettype) objects.<br>Asset Type codes that do not match a registered Asset Type will be omitted.|
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |

## Retrieve Types by multiple Codes (bulk)

`POST /type/bycode`

Retrieves all Asset Types that match the supplied list of type codes.

This is an alternative endpoint for when a large list of Asset Types needs to be provided.

### POST Body

A JSON array of strings, listing the type codes of the Asset Types to retrieve.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is an array of [AssetType](../../proto/authority/#assettype) objects.<br>Asset Type codes that do not match a registered Asset Type will be omitted.|
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |

## Delete Types by multiple Codes

`DELETE /type/bycode`

Delete all Asset Types that match the supplied list of type codes.

### POST Body

A JSON array of strings, listing the type codes of the Asset Types to delete.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 204  | Success | Completed successfully.<br>Asset Type codes that do not match a registered Asset Type will be ignored. |
| 409  | Failure | The operation would cause a conflict.<br>Content is a JSON array of one or more error codes describing the problem. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |
