---
title: Authority REST API - Association Controller
sidebar:
  label: /association
---

The `association` URL provides bulk management of Associations.

## Add or update multiple Associations

`POST /association`

Adds or updates direct Associations from an Asset.

This method will add or update Assets as necessary, for both the root and associated Assets. They do not need to be created first.

### POST Body

An [AssociationsFromAsset](../../proto/dto/#assocationsfromasset) object describing the root Asset and any direct associated Assets.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 204  | Success | Completed successfully. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |
