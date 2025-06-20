---
title: Association List
sidebar:
  label: List
---

`Paritech.Authority.Control Association List <Service> <FromType> <FromCode>`

Retrieves the details of the direct Associations from an Asset. Will include details of the From and all To Assets.

:::caution[Pre-release]
This operation may not yet be available.
:::

## Arguments

| Field      | Description |
|------------|-------------|
| `Service`  | The Authority Service to connect to. |
| `FromType` | The type of the Asset the Association is from. |
| `FromCode` | The unique code of the Asset the Association is from. |

## Available Options

| Option                  | Description |
|-------------------------|-------------|
| `-App <Code>`           | Only returns Associations with specific Application context. Can be specified multiple times. |
| `-Cols <Columns>`       | A comma-separated list of column names. Defaults to type,code. |
| `-Enc <Encoding>`       | Output encoding. One of ASCII, UTF8 (default). |
| `-File <FileName>`      | Write to the given file |
| `-Format <Format>`      | Output data format. One of CSV (default), TSV, JSON. |
| `-NewLine <NewLine>`    | NewLine format. One of CR, LF, CRLF. Defaults to platform specific. |
| `-NoHeader`             | The output data does not contain a header line. |
| `-Stdout`               | Write to STDOUT. Default. |
| `-ToType <Code>`        | Only returns Associations to Assets of this type. Can be specified multiple times. |

## Output

The process result will be 0 on success, and a negative value on failure.

## Examples

```sh title="List Associations"
Paritech.Authority.Control Association List XOSP User 1234 -ToType TradingAccount > Associations.csv
```

```csv
// Assocations.csv
Type,Code
User,1234
TradingAccount,XS:0001
TradingAccount,XS:0002
TradingAccount,XS:0003
TradingAccount,XS:0004
```

## More Information

Utilises the [/association](../../../rest/association/from/) API.
