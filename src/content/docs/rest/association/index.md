---
title: Authority REST API - Association Controller
sidebar:
  label: /association
---

The Association Controller is responsible for retrieving and manipulating the associations between Assets.

## Add or update multiple Associations

`POST /association`

Adds or updates existing direct Associations from a single root Asset.

This method is able to create new Assets, including their metadata - it is not necessary to first register the Assets.

### POST Body

An [AssociationsFromAsset](../../proto/dto/#assocationsfromasset) object describing the root Asset and any direct associated Assets.

### Response

| Code | Status  | Description |
|------|---------|-------------|
| 204  | Success | Completed successfully. |
| 422  | Failure | Invalid data was provided.<br>Content is a JSON array of one or more error codes describing the problem. |
