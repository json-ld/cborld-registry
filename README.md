## The CBOR-LD Registry

CBOR-LD is a compact binary representation for Linked Data. The file format
can use compression tables to achieve compression rates that are many times
greater than what is achievable using statistical compression techniques.
This repository contains the global compression table registry for CBOR-LD.

## Registering a Compression Table

Registering a new compression table is easy:

1. Fork this repository.
2. Add a file to the `tables` directory with a unique identifier.
3. Raise a pull request on this repository.

## Developing

To develop on this repository, you will need:

* Node.js v22+

### Install Tooling

To set up the tooling, run the following command:

```
npm i
```

### Build the Registry

To build the registry, run the following command:

```
npm run build
```
