---
title: Asset Get
sidebar:
  label: Get
---

`Paritech.Authority.Control Asset Get <Service> <Type> <Code> [...]`

Retrieves the details of one or more Assets.

:::caution[Pre-release]
This operation may not yet be available.
:::

## Arguments

| Field      | Description |
|------------|-------------|
| `Service`  | The Authority Service to connect to. |
| `Type`     | The type of the Asset. |
| `Code`     | The unique code of the Asset. Can be specified multiple times to retrieve multiple Assets. |

## Available Options

| Option                  | Description |
|-------------------------|-------------|
| `-Cols <Columns>`       | A comma-separated list of column names. Defaults to type,code. |
| `-Enc <Encoding>`       | Output encoding. One of ASCII, UTF8 (default). |
| `-File <FileName>`      | Write to the given file |
| `-Format <Format>`      | Output data format. One of CSV (default), TSV, JSON. |
| `-NewLine <NewLine>`    | NewLine format. One of CR, LF, CRLF. Defaults to platform specific. |
| `-NoHeader`             | The output data does not contain a header line. |
| `-Stdout`               | Write to STDOUT. Default. |

## Output

The process result will be 0 on success, and a negative value on failure.

## Examples

```sh title="Get Asset"
Paritech.Authority.Control Asset Get XOSP User 1234 TradingAccount XS:0001 > Asset.csv
```

```csv
// Asset.csv
Type,Code
User,1234
```

## More Information

Utilises the [/asset](../../../rest/asset/bytype-bycode-code/) API.
