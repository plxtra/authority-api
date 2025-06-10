---
title: Authority.proto (Paritech.Authority.Protocol)
sidebar:
  label: Authority.proto
---

Data model for the Paritech Authority service

[Download Source](../Authority.proto)

## Messages

### AppContext

Descripes the contextual data supplied by an Application

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Application | string |  | The code identifying the Application |
| 10 | IDs | [ID](#id) | repeated | Any identifiers associated with the Application |
| 19 | Metadata | Map&lt;string,string&gt; |  | Any metadata associated with the Application |

### Asset

Describes an Asset

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Code | string |  | The unique code identifying this Asset |
| 9 | Type | string |  | The unique code of the Asset Type this Asset belongs to |
| 10 | Context | [AppContext](#appcontext) | repeated | Any application-specific context attached to this Asset |

### AssetType

Describes an Asset Type

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Code | string |  | The unique code identifying this Asset Type |
| 19 | Metadata | Map&lt;string,string&gt; |  | Any metadata associated with the Asset Type |

### Association

Describes an Association between two Assets

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 10 | Context | [AppContext](#appcontext) | repeated | Any application-specific context attached to this association |

### ID

An identifier with one or more values

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Name | string |  | The identifier name |
| 2 | Values | Map&lt;string,string&gt; |  | The values associated with this identifier |
