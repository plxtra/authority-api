---
title: Authority REST API - Type Controller
sidebar:
  label: /type
---

The Type Controller is responsible for retrieving and manipulating Asset Type definitions.

## Retrieve all Asset Types

`GET /type`

Retrieves all Asset Types registered with the Authority service.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is an array of [AssetType](../../proto/authority/#assettype) objects. |

## Add or update multiple Asset Types

`POST /type`

Adds or updates existing Asset Type registrations.

### POST Body

An array of [AssetType](../../proto/authority/#assettype) objects to add or update.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 204  | Success | Completed successfully. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |
