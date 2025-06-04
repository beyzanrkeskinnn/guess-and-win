# 🎯 Guess and Win - Stellar Blockchain Prediction Game

This project is a simple decentralized prediction game built on the Stellar blockchain using Soroban smart contracts. Players guess a number within a certain range, and if the guess is correct, they win token-based rewards. All logic is transparent and verifiable on-chain.

---

## 🚀 Features

- 🔐 Smart contract-based prediction mechanism
- 🎰 Fair and random guess evaluation
- 💰 Token-based rewards and balance tracking
- 👤 Admin functions for managing game parameters
- 📊 Fully auditable on the Stellar blockchain

---

## 🛠 Tech Stack

- **Blockchain**: Stellar + Soroban
- **Language**: Rust
- **Smart Contracts**: Soroban SDK
- **Tooling**: Cargo, Soroban CLI

---

## 📁 Project Structure
```bash
guess_game/
├── src/
│ ├── lib.rs # Entry point for the contract
│ ├── admin.rs # Admin utilities and access control
│ ├── balance.rs # Token and balance management
│ └── contract.rs # Main game logic: guess, validate, reward
├── Cargo.toml # Dependencies and metadata
├── README.md
```
## ⚙️ How to Run

1️⃣ **Install Dependencies:**

- [Rust](https://www.rust-lang.org/tools/install)
- [Soroban CLI](https://soroban.stellar.org/docs/getting-started/soroban-cli)

```bash
cargo install --locked soroban-cli
```
2️⃣ **Build the Contract:**
```bash
cargo build --target wasm32-unknown-unknown --release
```
3️⃣ **Deploy & Test Locally:**
```bash
soroban contract deploy \
  --wasm target/wasm32-unknown-unknown/release/guess_game.wasm \
  --source your-key \
  --network testnet
```

## 📌 Gameplay Logic
- Player sends a guess (e.g., number between 1-10)

- Contract generates a pseudo-random number

- If guess matches, reward is sent

- Otherwise, funds go to the pool
  
