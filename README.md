```
model User {
  id        String     @id @default(uuid())
  email     String
  password  String
  Estimates Estimate[]
  Invoices  Invoice[]
  createdAt DateTime   @default(now())
  updatedAt DateTime   @updatedAt
}

model Invoice {
  id        Int      @id @default(autoincrement())
  client    String
  total     Int
  User      User     @relation(fields:[userId], references: [id])
  userId    String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model Estimate {
  id        Int      @id @default(autoincrement())
  client    String
  total     Int
  expires   DateTime
  User      User     @relation(fields:[userId], references: [id])
  userId    String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

URIs
```
Authentication:
  POST   - /api/v1/authentication/login    - Retrieve an Access Token
  POST   - /api/v1/authentication/register - Register a new User

User (protected with JWT):
  GET    - /api/v1/users     - Retrieve All Users
  GET    - /api/v1/users/:id - Retrive a User by ID
  DELETE - /api/v1/users/:id - Delete One User
  PUT    - /api/v1/users/:id - Update One User by ID

Invoice (Protected with JWT):
  POST   - /api/v1/invoices     - Create One Invoice
  GET    - /api/v1/invoices     - Get All Invoices
  GET    - /api/v1/invoices/:id - Get One Invoice by ID
  PUT    - /api/v1/invoices/:id - Update One Invoice by ID
  DELETE - /api/v1/invoices/:id - Delete One Invoice by ID

Estimate (Protected with JWT):
  POST   - /api/v1/estimates     - Create One Estimate
  GET    - /api/v1/estimates     - Get All Estimates
  GET    - /api/v1/estimates/:id - Get One Estimate by ID
  PUT    - /api/v1/estimates/:id - Update One Estimate by ID
  DELETE - /api/v1/estimates/:id - Delete One Estimate by ID
```
