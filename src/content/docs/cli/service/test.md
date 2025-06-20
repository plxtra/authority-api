---
title: Service Test
sidebar:
  label: Test
---

`Paritech.Authority.Control Service Test <Hub>`

Checks the connectivity to a Service.

## Arguments

| Field     | Description |
|-----------|-------------|
| `Service` | The Authority Service to connect to. |

## Available Options

No options.

## Output

The process result will be 0 on success, and a negative value on failure.

## Examples

```sh
Paritech.Authority.Control Service Test XOSP
```

## More Information

Utilises the [/diagnostics](../../../rest/diagnostics/ping/) API.
