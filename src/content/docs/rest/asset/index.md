---
title: Authority REST API - Asset Controller
sidebar:
  label: /asset
---

The `asset` URL provides bulk management of Assets.

## Retrieve all Assets

`GET /asset`

Retrieves all registered Assets.

### Query Parameters

| Parameter | Expected | Description |
|-----------|----------|-------------|
| app       | Optional | An Application identifier. Will only return Assets with context data for this Application.<br>Can be specified multiple times to include additional Applications. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is an array of [Asset](../../proto/authority/#asset) objects. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |

## Add or update Assets

`POST /asset`

Adds or updates multiple registered Assets simultaneously. The Context data will be merged with any existing registration.

### POST Body

An array of [Asset](../../proto/authority/#asset) objects to add or update.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 204  | Success | Completed successfully. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |
