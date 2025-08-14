---
title: Association Define
sidebar:
  label: Define
---

`Paritech.Authority.Control Association Define <Service> <FromType> <FromCode> <ToType> <ToCode>`

Defines or redefines an Association between two Assets.

Any existing context data for the Assets and the Association will be merged with whatever is supplied.

:::note
The Asset Types must exist, but the Assets themselves do not need to exist and will be created/updated.
:::

## Arguments

| Field      | Description |
|------------|-------------|
| `Service`  | The Authority Service to connect to. |
| `FromType` | The type of the Asset the Association is from. |
| `FromCode` | The unique code of the Asset the Association is from. |
| `ToType`   | The type of the Asset the Association is to. |
| `ToCode`   | The unique code of the Asset the Association is to. |

## Available Options

| Option                  | Description |
|-------------------------|-------------|
| `-App <Code>`           | Specifies metadata for an Application on the Association. Affects the -Meta and -ID options. Can be specified multiple times. |
| `-FromApp <Code>`       | Specifies metadata for an Application on the From Asset. Affects the -Meta and -ID options. Can be specified multiple times. |
| `-ID <Name>`            | Specifies a new ID for the current App. Can be specified multiple times. |
| `-Meta <Key> <Value>`   | Supplies a metadata key/value for the current App. Can be specified multiple times. |
| `-Rename <Type> <Code>` | Specifies a new type and code for an existing Asset. |
| `-ToApp <Code>`         | Specifies metadata for an Application on the To Asset. Affects the -Meta and -ID options. Can be specified multiple times. |
| `-Val <Key> <Value>`    | Supplies a key/value for the current ID. Can be specified multiple times. |

## Output

The process result will be 0 on success, and a negative value on failure.

## Examples

```sh
Paritech.Authority.Control Association Define XOSP User 1234 TradingAccount XS:0001
```

## More Information

Utilises the [/association](../../../rest/association/from-to-code/) API.
