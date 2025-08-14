---
title: Authority REST API - Type Controller
sidebar:
  label: /type/bycode
---

The `type/bycode` URL provides bulk management of Asset Types by code.

## Retrieve Asset Types by code

`GET /type/bycode`

Retrieves the listed Asset Types.

### Query Parameters

| Parameter | Expected | Description |
|-----------|----------|-------------|
| code      | Optional | An Asset Type code. Can be repeated to retrieve additional Asset Types. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is an array of [AssetType](../../proto/authority/#assettype) objects.<br>Asset Type codes that do not match will be omitted. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |

## Retrieve Asset Types by code (bulk)

`POST /type/bycode`

Retrieves the listed Asset Types.

This is an alternative endpoint for providing more codes than the maximum URL length permits.

### POST Body

A JSON string array, listing Asset Type codes to retrieve.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is an array of [AssetType](../../proto/authority/#assettype) objects.<br>Asset Type codes that do not match will be omitted. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |

## Delete Asset Types by code

`DELETE /type/bycode`

Deletes the listed Asset Types.

### POST Body

A JSON array of strings, listing the Asset Type codes to delete.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 204  | Success | Completed successfully.<br>Asset Type codes that do not match will be ignored. |
| 409  | Failure | The operation would cause a conflict.<br>Content is a JSON array of one or more error codes describing the problem. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |
