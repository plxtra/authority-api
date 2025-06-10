---
title: Authority REST API - Asset Controller
sidebar:
  label: /asset
---

The Asset Controller is responsible for retrieving and manipulating Asset definitions.

## Retrieve all known Assets

`GET /asset`

Retrieves all Assets registered with the Authority service.

### Query Parameters

| Parameter | Expected | Description |
|-----------|----------|-------------|
| app       | Optional | The identifier of an Application. Will only return Assets that have context data mentioning this Application. Can be specified multiple times to search for multiple Applications, where any match will return a result. |

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 200  | Success | Content is an array of [AssetType](../../proto/authority/#assettype) objects. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |

## Add or update multiple Assets

`POST /asset`

Adds or updates existing Asset registrations.

### POST Body

An array of [Asset](../../proto/authority/#asset) objects to add or update.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 204  | Success | Completed successfully. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |
