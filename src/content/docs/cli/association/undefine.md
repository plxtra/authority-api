---
title: Asset Undefine
sidebar:
  label: Undefine
---

`Paritech.Authority.Control Association Undefine <Service> <FromType> <FromCode> <ToType> <ToCode>`

Undefines (removes) an Association. Does not remove any associated Assets.

If the `-Remove` option is specified, context for the listed Applications will be removed instead, subject to the `-DeleteOnEmpty` option.

:::caution[Pre-release]
This operation may not yet be available.
:::

## Arguments

| Field     | Description |
|-----------|-------------|
| `Service`  | The Authority Service to connect to. |
| `FromType` | The type of the Asset the Association is from. |
| `FromCode` | The unique code of the Asset the Association is from. |
| `ToType`   | The type of the Asset the Association is to. |
| `ToCode`   | The unique code of the Asset the Association is to. |

## Available Options

| Option                  | Description |
|-------------------------|-------------|
| `-DeleteOnEmpty`        | When using the `-Remove` option, causes the Association to be removed if no more context data exists. |
| `-Remove <Code>`        | Removes context for an Application. Can be specified multiple times. |

## Output

The process result will be 0 on success, and a negative value on failure.

## Examples

```sh
Paritech.Authority.Control Association Undefine XOSP User 1234 TradingAccount XS:0001
```

## More Information

Utilises the [/association](../../../rest/association/from-to-code/) API.
