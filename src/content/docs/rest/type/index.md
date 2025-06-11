---
title: Authority REST API - Type Controller
sidebar:
  label: /type
---

The `type` URL provides bulk management of Asset Types.

## Retrieve all Asset Types

`GET /type`

Retrieves all registered Asset Types.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is an array of [AssetType](../../proto/authority/#assettype) objects. |

## Add or update Asset Types

`POST /type`

Adds or updates multiple registered Asset Types simultaneously.

### POST Body

An array of [AssetType](../../proto/authority/#assettype) objects to add or update.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 204  | Success | Completed successfully. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |
