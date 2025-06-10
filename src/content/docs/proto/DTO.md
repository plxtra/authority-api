---
title: DTO.proto (Paritech.Authority.Protocol)
sidebar:
  label: DTO.proto
---

Contains the data transfer objects for the REST API

[Download Source](../DTO.proto)

## Messages

### AssociationsFromAsset

Describes the associations from a root Asset

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Root | [Asset](../authority/#asset) |  | The root Asset being described |
| 10 | Associations | [ToAssetAssociation](#toassetassociation) | repeated | Associations from the root asset |

### AssociationsToAsset

Describes the associations to a root Asset

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Root | [Asset](../authority/#asset) |  | The root Asset being described |
| 10 | Associations | [FromAssetAssociation](#fromassetassociation) | repeated | Associations to the root asset |

### FromAssetAssociation

Describes an Association from an Asset to a root

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | FromAsset | [Asset](../authority/#asset) |  | The details of the Asset this association is from |
| 10 | Association | [Association](../authority/#association) |  | The details of the Association |

### FullAssociation

Describes an Association from an Asset to an Asset

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | FromAsset | [Asset](../authority/#asset) |  | The details of the Asset this association is from |
| 2 | ToAsset | [Asset](../authority/#asset) |  | The details of the Asset this association is to |
| 10 | Association | [Association](../authority/#association) |  | The details of the Association |

### ToAssetAssociation

Describes an Association to an Asset from a root

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | ToAsset | [Asset](../authority/#asset) |  | The details of the Asset this association is to |
| 10 | Association | [Association](../authority/#association) |  | The details of the Association |

### TransitiveAssociations

Describes the transitive associations from a root Asset

| No | Field | Type | Label | Description |
| -- | ----- | ---- | ----- | ----------- |
| 1 | Root | [Asset](../authority/#asset) |  | The root Asset being described |
| 10 | Associations | [FullAssociation](#fullassociation) | repeated | Associations from the root asset. From Assets will not have context |
