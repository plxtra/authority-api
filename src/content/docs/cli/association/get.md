---
title: Association Get
sidebar:
  label: Get
---

`Paritech.Authority.Control Association Get <Service> <FromType> <FromCode> <ToType> <ToCode>`

Retrieves the details of an Association between two Assets. Will include details of the From and To Assets.

:::caution[Pre-release]
This operation may not yet be available.
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

```sh title="Get Association"
Paritech.Authority.Control Association Get XOSP User 1234 TradingAccount XS:0001 > Associations.csv
```

```csv
// Assocations.csv
Type,Code
User,1234
TradingAccount,XS:0001
```

## More Information

Utilises the [/association](../../../rest/association/from-to-code/) API.
