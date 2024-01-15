# Next.js Project Authentication Template

-- 2023 December Personal Project

**This template is implemented using Next.js server actions.**

## Supported Features

- Credential register and login
- Social login
- Email verification (with [Resend](https://resend.com/))
- Reset password

## Highlights

1. The user authentication is done through Next.js server actions mainly; you can do it using APIs as well.

## How to use

1. Create and fill in a `.env` file based on the template `.env.example`
2. Run `npm i` to install all the packages used by the project
3. Run `npx prisma generate && npx prisma db push` to update the database (recommended online Postgresql db: [Neon](https://neon.tech/))
4. Run `npm run dev` to start the project in the dev mode

**Modified based on: [CodeWithAntonio](https://github.com/AntonioErdeljac/next-auth-v5-advanced-guide)**
