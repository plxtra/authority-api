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

`Paritech.Authority.Control Help Hub`

*List arguments and options for a Feature*

`Paritech.Authority.Control Help Asset Define`

*List valid Authority services*

`Paritech.Authority.Control Service List`

A Service is the front-end for an installation of the Authority Service. In XOSP, this should output a single record.

## Basic Commands

Full commands take the format of `Action Feature [Args]`.

*Test connectivity*

`Paritech.Authority.Control Service Test XOSP`
