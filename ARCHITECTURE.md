# Pharaoh Portal — System Architecture

## Overview
Pharaoh Portal unifies TEOS Egypt’s civic-first blockchain ecosystem:
- Bankchain
- CivicChain
- Pi Smart City
- AI Auditor
- Sovereign Licensing

## Layers
1. **Frontend:** Next.js 15 + TailwindCSS + shadcn/ui
2. **Backend:** Node.js + FastAPI (Python)
3. **Blockchain:** Solana (Anchor), Pi Network APIs
4. **Database:** PostgreSQL / Supabase
5. **AI Layer:** TEOS AI Auditor, risk scoring
6. **Compliance:** ISO 20022 pipelines, sovereign license enforcement

## Deployment
- Hosted on Vercel + Cloudflare
- CI/CD pipelines with GitHub Actions
- Branch protection + CODEOWNERS
