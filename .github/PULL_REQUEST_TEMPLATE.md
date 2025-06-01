## Instructions for Pull Requests

Please read these instructions thoroughly in order to ensure that your pull
request is processed in a timely manner. This document contains detailed
instructions for registering a compression table. If your pull request concerns
some other change to the repository, you may delete all of the text in this text
box and write up a more relevant description.

There is a Compression Table Registration Form below that MUST be included in a
registration request. The form includes check boxes that you are expected to
fill out when you submit your request.

Once you submit your request, your pull request will be reviewed by the registry
maintainers. Changes regarding the required criteria may be requested. If there
are no objections or changes requested, your registration will be registered
after a minimum of 7 days.

## DID Method Registration Process

In order to register a new compression table, you must add a YAML file to the
[./tables](./tables) directory.

Here is an example registration entry:

```yaml
---
domain: Example Foo Problem Domain
contact: yourGithubHandle
mode: default
provisional: true
compressionTable:
  - type: context
    table:
      32768: https://www.w3.org/ns/credentials/v2
      32769: https://www.w3.org/ns/credentials/examples/v2
      32770: https://w3id.org/utopia/v2
  - type: https://w3id.org/security#cryptosuiteString
    table:
      1: ecdsa-rdfc-2019
      2: ecdsa-sd-2023
      3: eddsa-rdfc-2022
```

Your Pull Request will be automatically validated, please ensure that all of the automated tests pass (no errors reported) or your submission will not be reviewed. Common reasons for failed validation includes invalidly formatted YAML files and missing mandatory fields.

----- REGISTRATION FORM: DELETE EVERYTHING ABOVE THIS LINE ------

### Compression Table Registration

As a CBOR-LD compression table registrant, I have ensured that my DID method registration complies with the following statements:

- [ ] The YAML file I am submitting has [passed all automated validation tests below](#partial-pull-merging).
