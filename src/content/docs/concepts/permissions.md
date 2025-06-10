---
title: Associations to Permissions
sidebar:
  label: Permissions
---

When determining the permissions allowed to a user or client application, a request is sent to the Authority service identifying an Asset. The Authority service will then locate all associated Assets, and recursively any associated Assets of those Assets (their transitive relations). This data describes the permissions available to the identified Asset.

## Example

`User`:`8e63acec-adc8-4c4f-b9a2-814931cb7c46` is directly associated with:

* `Market`:`XSX`
* `TradingAccount`:`XS:XS01`
* `Group`:`SuperUsers`

`Group`:`SuperUsers` is directly associated with:

* `TradingAccount`:`XS:XS01`
* `TradingAccount`:`XS:XS02`

If a request is made for the user's transitive permissions, then the Authority service will return results for:

* `User`:`8e63acec-adc8-4c4f-b9a2-814931cb7c46`
* `Market`:`XSX`
* `Group`:`SuperUsers`
* `TradingAccount`:`XS:XS01` (from the User Association)
* `TradingAccount`:`XS:XS01` (from the Group Association)
* `TradingAccount`:`XS:XS02`

Applications will need to handle the scenario where multiple Associations can be returned for a single Asset, especially in the case where those associations describe different levels of access to an Asset.
