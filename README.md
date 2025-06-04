# 🎯 Guess and Win 
 
## About Me

I'm Beyzanur Keskin, a 2020 BÖTE graduate from Ondokuz Mayıs University. I started as a Jr. Full Stack Developer in 2024 and discovered Web3 in 2025. After the Rise Bootcamp, I built my first blockchain project on MultiversX. Now, I'm developing smart contract projects on Stellar and Stacks to create simple, transparent decentralized solutions.

## Description

Quess And Win is a decentralized prediction game built on the Scroll blockchain using smart contracts. Players guess a number within a fixed range. If the guess matches the winning number, they receive token rewards. All game logic, from number generation to reward distribution, runs on-chain, ensuring fairness and transparency. The smart contract handles player inputs, checks correctness, and sends rewards automatically. Easy to use and fully decentralized, Quess And Win offers a fun, trustless way to test your luck and earn tokens.

## Vision
Quess And Win aims to make blockchain technology fun, simple, and accessible to everyone. By combining an easy-to-understand game with transparent, on-chain logic, it introduces users to the power of decentralization in an engaging way. The project removes the need for trust, letting players see and verify every step on the blockchain. Through token-based rewards, it gives real value to participation. Our vision is to inspire mass adoption of Web3 by turning everyday gaming into a gateway for learning, earning, and exploring the benefits of decentralized technologies in a fair and open system.

## Project Roadmap/Future planes

### Smart Contract Design & Setup (Soroban on Scroll)
- Define Variables:
  - `winning_number` (uint)  
  - `guess_range` (uint)  
  - `entry_fee` (token amount)  
  - `reward_pool` (token balance)  
  - `player_guesses` (mapping: address → number)  

- Set Basic Rules:
Define the guess range, entry fee, and reward logic.

### Core Smart Contract Functions
- make_guess(uint guess): Accepts the guess and entry fee, stores the guess.

- check_result(address player): Compares the player’s guess with the winning number.

- distribute_reward(address winner): Transfers tokens from the reward pool to the correct guesser.

- reset_game(): Admin function to set a new winning number and reset the game state.

### Security & Fairness Logic
- Use verifiable random number generation (e.g., hash-based RNG).

- Prevent multiple guesses from the same address in a single game round.

### Front-End Development
- Build a clean and simple React-based UI to:

   - Connect wallets

   - Make guesses

   - Display game rules, guess range, and rewards

   - Check results

- Integrate with the smart contract using Scroll-compatible SDKs.

### Testing
- Unit test the smart contract logic on testnet.

- Test front-end interactions and transaction flows.

### Deployment
- Deploy the smart contract on the Scroll mainnet.

- Launch the front-end on decentralized hosting platforms (e.g., IPFS or Vercel).

## Programing Language
Rust & Web3

 ## Setup Enviroment

 Installation Guide
Follow these steps to set up the project locally and start development:

Prerequisites
Rust (with rustup)

Soroban CLI

Node.js and npm

Setup Steps
Clone the repository

bash
Kopyala
Düzenle
git clone https://github.com/yourusername/yourproject.git
cd yourproject
Install Rust

If you don’t have Rust installed, run:

bash
Kopyala
Düzenle
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
Verify Rust installation:

bash
Kopyala
Düzenle
rustc --version
Install Soroban CLI

Install Soroban CLI via Cargo:

bash
Kopyala
Düzenle
cargo install --locked soroban-cli
Check Soroban CLI:

bash
Kopyala
Düzenle
soroban --version
Install frontend dependencies

Navigate to the frontend folder (if applicable):

bash
Kopyala
Düzenle
cd frontend
npm install
Run the project locally

Start local Soroban test network (optional):

bash
Kopyala
Düzenle
soroban network start
Build the smart contract:

bash
Kopyala
Düzenle
soroban contract build
Deploy the contract to the test network (replace <network> with your network):

bash
Kopyala
Düzenle
soroban contract deploy --network <network> --wasm target/wasm32-unknown-unknown/release/contract.wasm
Start the frontend development server:

bash
Kopyala
Düzenle
npm start
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
  
