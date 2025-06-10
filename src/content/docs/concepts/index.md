---
title: Authority Service Concepts
sidebar:
  label: Overview
---

The Authority Service is based around management of Associations between different system objects.

* [Assets](#assets): Assets are named objects that can form relationships.
* [Asset Type](#asset-types): Assets are grouped into Types.
* [Association](#associations): Associations contain the metadata for a relationship between two Assets.

## Asset Types

An [Asset Type](../proto/authority/#assettype) is a way of grouping Assets into distinct categories. Each Type forms a namespace, such that Assets within one Type do not clash with Assets in another Type.

Types can contain a limited amount of metadata, for system management and use by automated tooling as required.

Some examples of Asset Types would be:

* `User` for external logins.
* `Client` for client application logins.
* `TradingAccount` for controlling access to Trading Accounts.
* `Market` for controlling access to specific Markets.

## Assets

An [Asset](../proto/authority/#asset) consists of a Type, a case-sensitive Code unique within that Type, and a collection of application-specific metadata to describe the Asset in greater detail for consuming services.

When updating an Asset, the Authority service automatically merges this application-specific data with what has already been stored previously. Data for one application will be replaced (or deleted), while data for other applications can remain untouched.

Some examples of Assets (and their Types) would be:

* `User`:`8e63acec-adc8-4c4f-b9a2-814931cb7c46` for an external user account represented by a GUID.
* `Client`:`Expo$Web` for the Expo client application to directly access data using a Client Token.
* `TradingAccount`:`XS:XS01` to represent the XS:XS01 Trading Account.
* `Market`:`XSX` to represent the XSX market.

## Associations

An [Association](../proto/authority/#association) consists of a From Asset and a To Asset, and a collection of application-specific metadata to describe the Association in greater detail for consuming services.

Only one Association can exist at a time between two Assets. Like an Asset, when updating an Association, the Authority service automatically merges this application-specific data with what has already been stored previously. Data for one application will be replaced (or deleted), while data for other applications can remain untouched.
