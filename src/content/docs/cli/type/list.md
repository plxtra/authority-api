---
title: Type List
sidebar:
  label: List
---

`Paritech.Authority.Control Type List <Service>`

Retrieves the details of all Asset Types.

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
| `-Cols <Columns>`       | A comma-separated list of column names. Defaults to code. |
| `-Enc <Encoding>`       | Output encoding. One of ASCII, UTF8 (default). |
| `-File <FileName>`      | Write to the given file |
| `-Format <Format>`      | Output data format. One of CSV (default), TSV, JSON. |
| `-NewLine <NewLine>`    | NewLine format. One of CR, LF, CRLF. Defaults to platform specific. |
| `-NoHeader`             | The output data does not contain a header line. |
| `-Stdout`               | Write to STDOUT. Default. |

## Output

The process result will be 0 on success, and a negative value on failure.

## Examples

```sh title="List Assets"
Paritech.Authority.Control Type List XOSP > Types.csv
```

```csv
// Types.csv
Code
Client
Market
News
TradingAccount
User
```

## More Information

Utilises the [/type](../../../rest/type/) API.
