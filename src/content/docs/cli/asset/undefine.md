---
title: Asset Undefine
sidebar:
  label: Undefine
---

`Paritech.Authority.Control Asset Undefine <Service> <Type> <Code>`

Undefines (removes) an Asset.

If the `-Remove` option is specified, context for the listed Applications will be removed instead, subject to the `-DeleteOnEmpty` option.

:::caution[Pre-release]
This operation may not yet be available.
:::

## Arguments

| Field     | Description |
|-----------|-------------|
| `Service` | The Authority Service to connect to. |
| `Type`    | The type of the Asset. |
| `Code`    | The unique code of the Asset. |

## Available Options

| Option                  | Description |
|-------------------------|-------------|
| `-DeleteOnEmpty`        | When using the `-Remove` option, causes the Asset to be removed if no more context data exists. |
| `-Remove <Code>`        | Removes context for an Application. Can be specified multiple times. |

## Output

The process result will be 0 on success, and a negative value on failure.

:::note
The operation will fail to delete if the Asset has existing associations.
:::

## Examples

```sh
Paritech.Authority.Control Asset Undefine XOSP User 1234
```

## More Information

Utilises the [/asset](../../../rest/asset/bytype-bycode-code/) API.
