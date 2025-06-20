---
title: Type Undefine
sidebar:
  label: Undefine
---

`Paritech.Authority.Control Type Undefine <Service> <Code> [...]`

Undefines (removes) an Asset Type.

:::caution[Pre-release]
This operation may not yet be available.
:::

## Arguments

| Field     | Description |
|-----------|-------------|
| `Service` | The Authority Service to connect to. |
| `Code`    | The unique code of the Asset Type. Can be specified multiple times to remove multiple Asset Types. |

## Output

The process result will be 0 on success, and a negative value on failure.

:::note
The operation will fail if the Asset Type has existing Assets.
:::

## Examples

```sh
Paritech.Authority.Control Type Undefine XOSP User
```

## More Information

Utilises the [/type](../../../rest/type/bycode/) API.
