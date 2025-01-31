---
title: Runtime APIs
description:
keywords:
---

Substrate ships with the following runtime APIs:

- [`BlockBuilder`](https://paritytech.github.io/substrate/master/sp_block_builder/trait.BlockBuilder.html): Provides the functionality required for building a block.
- [`TaggedTransactionQueue`](https://paritytech.github.io/substrate/master/sp_transaction_pool/runtime_api/trait.TaggedTransactionQueue.html): Handles validating transactions in the transaction queue.
- [`OffchainWorkerApi`](https://paritytech.github.io/substrate/master/sp_offchain/trait.OffchainWorkerApi.html): Handles [offchain capabilities](/fundamentals/offchain-operations/).
- [`AuraApi`](https://paritytech.github.io/substrate/master/sp_consensus_aura/trait.AuraApi.html): Handles block authorship with [Aura consensus](/fundamentals/consensus/).
- [`SessionKeys`](https://paritytech.github.io/substrate/master/sp_session/trait.SessionKeys.html): Generates and decodes [session keys](/fundamentals/accounts-addresses-keys/).
- [`GrandpaApi`](https://paritytech.github.io/substrate/master/sp_finality_grandpa/trait.GrandpaApi.html): Integrates the [GRANDPA](/fundamentals/consensus/) finality gadget into the runtime.
- [`AccountNonceApi`](https://paritytech.github.io/substrate/master/frame_system_rpc_runtime_api/trait.AccountNonceApi.html): Handles querying transaction indices.
- [`TransactionPaymentApi`](https://paritytech.github.io/substrate/master/pallet_transaction_payment_rpc_runtime_api/trait.TransactionPaymentApi.html): Handles querying information about transactions.
- [`Benchmark`](https://paritytech.github.io/substrate/master/frame_benchmarking/trait.Benchmark.html): Provides a way to [benchmark](/test/benchmark/) a FRAME runtime.

## Learn more

- How to design your custom runtime APIs using the [`impl_runtime_apis`](https://paritytech.github.io/substrate/master/sp_api/macro.impl_runtime_apis.html) macro
