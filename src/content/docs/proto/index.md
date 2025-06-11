---
title: Authority Protobuf Type Reference
sidebar:
  label: Overview
  order: 1
---

## Serialisation and Deserialisation

Most API endpoints will support both JSON and binary Protobuf (`application/x-protobuf`) formats as appropriate.

:::tip
When an endpoint accepts or returns an array of Protobuf messages, this can be written with repeated `WriteDelimitedTo`, and read with repeated `ParseDelimitedFrom`.
:::

### JSON Data Types

In the case of JSON, the API accepts the [standard Protobuf JSON formatting](https://protobuf.dev/programming-guides/json/).
