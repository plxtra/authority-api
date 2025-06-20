---
title: Authority Service REST API Usage
sidebar:
  label: Usage
  order: 2
---

## Connecting

Connect to the Authority service via HTTP at `http://authority/` using HTTP/1.1, HTTP/2.0, or HTTP/3.0.

## Authenticating

The REST API requires an access token issued by the expected OAuth Server, with the appropriate Audience for the Authority service.

### Permissions

The `Authority/Admin` grants read/write-access to the Authority service. To only allow read-access to an application, use the `Authority/Service` scope.

## Serialisation and Deserialisation

Most endpoints will support both JSON and binary Protobuf (`application/x-protobuf`) formats, both as `Content-Type` on PUT/POST/PATCH, and as `Accepts` on GET/POST.

:::tip
When an endpoint accepts or returns an array of Protobuf messages, this can be written with repeated `WriteDelimitedTo`, and read with repeated `ParseDelimitedFrom`.
:::

See [JSON Data Types](../../proto/#json-serialisation) for specific notes on JSON serialisation.
