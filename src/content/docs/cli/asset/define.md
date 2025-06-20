---
title: Asset Define
sidebar:
  label: Define
---

`Paritech.Authority.Control Asset Define <Service> <Type> <Code>`

Defines or redefines an Asset.

Any existing context data for this Asset will be merged with whatever is supplied, unless using the `-Rename` option.

:::note
The Asset Type must exist.
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
| `-App <Code>`           | Specifies metadata for an Application. Affects the -Meta and -ID options. Can be specified multiple times. |
| `-ID <Name>`            | Specifies a new ID for the current App. Can be specified multiple times. |
| `-Meta <Key> <Value>`   | Supplies a metadata key/value for the current App. Can be specified multiple times. |
| `-Rename <Type> <Code>` | Specifies a new type and code for an existing Asset. |
| `-Val <Key> <Value>`    | Supplies a key/value for the current ID. Can be specified multiple times. |

:::caution
When specifying the `-Rename` option, this will act as a full replacement. All existing context will be replaced with whatever is provided.
:::

## Output

The process result will be 0 on success, and a negative value on failure.

## Examples

```sh
Paritech.Authority.Control Asset Define XOSP User 1234
```

## More Information

Utilises the [/asset](../../../rest/asset/bytype-bycode-code/) API.
