---
title: Type Define
sidebar:
  label: Define
---

`Paritech.Authority.Control Type Define <Service> <Type>`

Defines or redefines an Asset Type.

Existing metadata will be replaced with whatever is supplied.

## Arguments

| Field     | Description |
|-----------|-------------|
| `Service` | The Authority Service to connect to. |
| `Type`    | The type of the Asset. |
| `Code`    | The unique code of the Asset. |

## Available Options

| Option                  | Description |
|-------------------------|-------------|
| `-Meta <Key> <Value>`   | Supplies a metadata key/value. Can be specified multiple times. |
| `-Rename <Code>`        | Specifies a new code for an existing Asset Type. |

## Output

The process result will be 0 on success, and a negative value on failure.

## Examples

```sh
Paritech.Authority.Control Type Define XOSP User
```

## More Information

Utilises the [/type](../../../rest/type/bycode-code/) API.
