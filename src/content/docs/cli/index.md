---
title: Authority Command Line Interface
sidebar:
  label: Introduction
---

The CLI tools for Authority Services are available in the `auth-control` Docker Image, or as part of the [XOSP distribution](/using/cli-tools).

These tools typically just exercise the Authority [REST API](../rest/) with some added smarts for reading and writing CSV files.

## Help Commands

The CLI tool can provide basic documentation on the features and arguments available.

*List valid Actions*

`Paritech.Authority.Control Help`

*List valid Features for an Action*

`Paritech.Authority.Control Help Service`

*List arguments and options for a Feature*

`Paritech.Authority.Control Help Asset Define`

## Basic Commands

Full commands take the format of `Action Feature [Args]`.

### Available Features

* [Asset](./asset/): Actions related to manipulation of Assets.
* [Association](./association/): Actions related to manipulation of Associations.
* [Service](./service/): Actions related to the Authority Services.
* [Type](./type/): Actions related to manipulation of Asset Types.
