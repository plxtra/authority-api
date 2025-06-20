---
title: Authority Service REST API
sidebar:
  label: Introduction
  order: 1
---

The Authority REST API provides a simple HTTP interface to the Authority Service data, both for querying current types, assets, and associations, and for manipulation of that data.

The API is offered by the Authority service, within the `plxtra/authority` Docker image.

## Controllers

The REST API is broken up into a number of controllers, each for a specific resource.

* [Asset](./asset/)
* [Association](./association/)
* [Diagnostics](./diagnostics/)
* [Type](./type/)
