---
name: migration
description: Prismaを使用したデータベーススキーマ管理とマイグレーション
---

# Migration Skill

本プロジェクトでは、Prismaを使用してデータベーススキーマを管理しています。

## ファイル構成

- **スキーマ定義**: [backend/prisma/schema.prisma](backend/prisma/schema.prisma)
- **マイグレーション履歴**: [backend/prisma/migrations/](backend/prisma/migrations/)
- **シード定義**: [backend/prisma/seed.ts](backend/prisma/seed.ts)

## マイグレーション流れ

### 1. スキーマの変更

[backend/prisma/schema.prisma](backend/prisma/schema.prisma) を編集して、モデルや設定を追加・変更します。

```prisma
model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String
}
```

### 2. マイグレーション実行

ローカル開発環境では以下のコマンドでマイグレーションを作成・実行します：

```bash
# マイグレーションを作成して実行
make migrate
```

または Docker 内から直接実行：

```bash
docker compose -f docker-compose.local.yml exec backend npx prisma migrate dev
```

プロンプトが出たら、マイグレーション名を入力（例：`add_user_email`）

### 3. 型生成

Prismaクライアント型が自動的に更新されます：

```bash
# 手動で型を生成する場合
make generate
```

### 4. データ初期化（シード）

[backend/prisma/seed.ts](backend/prisma/seed.ts) でシードロジックを定義し、以下で実行：

```bash
make seed
```

## よく使うコマンド

| コマンド        | 説明                                       |
| --------------- | ------------------------------------------ |
| `make migrate`  | マイグレーション作成・実行 + 型生成        |
| `make generate` | Prisma クライアント型を生成                |
| `make seed`     | シードデータを初期化                       |
| `make preview`  | Prisma Studio を起動                       |
| `make re`       | 環境リセット → 起動 → マイグレーション実行 |

## Prisma Studio

データベースを GUI で管理できます：

```bash
make preview
```

http://localhost:5555 でアクセス可能
