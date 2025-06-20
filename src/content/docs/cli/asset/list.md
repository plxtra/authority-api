---
title: Asset List
sidebar:
  label: List
---

`Paritech.Authority.Control Asset List <Service>`

Retrieves the details of all Assets.

:::caution[Pre-release]
This operation may not yet be available.
:::

## Arguments

| Field      | Description |
|------------|-------------|
| `Service`  | The Authority Service to connect to. |

## Available Options

| Option                  | Description |
|-------------------------|-------------|
| `-App <Code>`           | Only returns Assets with specific Application context. Can be specified multiple times. |
| `-Cols <Columns>`       | A comma-separated list of column names. Defaults to type,code. |
| `-Enc <Encoding>`       | Output encoding. One of ASCII, UTF8 (default). |
| `-File <FileName>`      | Write to the given file |
| `-Format <Format>`      | Output data format. One of CSV (default), TSV, JSON. |
| `-NewLine <NewLine>`    | NewLine format. One of CR, LF, CRLF. Defaults to platform specific. |
| `-NoHeader`             | The output data does not contain a header line. |
| `-Stdout`               | Write to STDOUT. Default. |
| `-Type <Code>`          | Only returns Assets of this type. Can be specified multiple times. |

## Output

The process result will be 0 on success, and a negative value on failure.

## Examples

```sh title="List Assets"
Paritech.Authority.Control Asset List XOSP -Type TradingAccount > Assets.csv
```

```csv
// Assets.csv
Type,Code
TradingAccount,XS:0001
TradingAccount,XS:0002
TradingAccount,XS:0003
TradingAccount,XS:0004
```

## More Information

Utilises the [/asset](../../../rest/asset/bytype/) API.
