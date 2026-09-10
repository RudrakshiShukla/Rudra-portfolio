# CI/CD Process

This portfolio project uses **GitHub Actions** for Continuous Integration (CI) and Continuous Deployment (CD).

The main purpose of CI/CD is to automatically check the project and deploy the website whenever changes are added to the production branch.

---

## 1. Branch Structure

The project uses three branches:

* **portfolio-v1** → First version of the portfolio
* **portfolio-v2** → Development and improvements for the second version
* **main** → Stable/production branch

The `main` branch contains the version that is ready to be deployed.

---

## 2. Development Process

The development process follows this flow:

```text
portfolio-v2
      ↓
Make changes
      ↓
Push changes
      ↓
Create Pull Request
      ↓
main
```

Instead of directly changing the `main` branch, development is done on a separate branch.

This makes the project safer and easier to manage.

---

# 3. Continuous Integration (CI)

CI automatically checks whether the project is working correctly.

The CI workflow is stored here:

```text
.github/
└── workflows/
    └── ci.yml
```

The CI workflow runs when code is pushed to:

* `portfolio-v1`
* `portfolio-v2`
* `main`

It also runs when a Pull Request is created for `main`.

### CI Steps

The workflow performs these steps:

```text
Checkout Code
      ↓
Setup Node.js
      ↓
Install Dependencies
      ↓
Build Project
      ↓
CI Success ✅
```

### Step 1: Checkout Code

GitHub Actions gets the latest project code from the repository.

```yaml
uses: actions/checkout@v4
```

### Step 2: Setup Node.js

The project uses Node.js 20.

```yaml
uses: actions/setup-node@v4
```

### Step 3: Install Dependencies

The project dependencies are installed using:

```bash
npm ci
```

`npm ci` installs the exact dependencies defined in `package-lock.json`.

### Step 4: Build the Project

The project is built using:

```bash
npm run build
```

If the project builds successfully, CI passes.

If there is a build error, CI fails and the problem needs to be fixed before deployment.

---

# 4. Continuous Deployment (CD)

CD automatically deploys the website to **GitHub Pages**.

The deployment workflow is stored here:

```text
.github/
└── workflows/
    └── deploy.yml
```

The deployment workflow runs when changes are pushed to the `main` branch.

It can also be started manually using GitHub Actions.

### CD Steps

```text
main
  ↓
Install Dependencies
  ↓
Build Project
  ↓
Create GitHub Pages Artifact
  ↓
Deploy
  ↓
Live Website 🚀
```

---

## 5. GitHub Pages Deployment

The Vite project is configured for GitHub Pages using:

```ts
base: '/Rudra-portfolio/'
```

This tells Vite that the website will be hosted inside the `/Rudra-portfolio/` path.

The production files are generated inside:

```text
dist/
```

GitHub Actions uploads the `dist` folder and deploys it to GitHub Pages.

---

# 6. Environment Protection

GitHub Pages uses an environment called:

```text
github-pages
```

The `main` branch was added as an allowed deployment branch.

This means only an allowed branch can deploy the website to the GitHub Pages environment.

This provides an additional layer of control over production deployment.

---

# 7. Complete CI/CD Flow

The complete workflow is:

```text
                Development
                     │
                     ▼
               portfolio-v2
                     │
                     │ Push
                     ▼
              GitHub Repository
                     │
                     ▼
              Pull Request
                     │
                     ▼
                  main
                     │
                     ▼
              GitHub Actions
                     │
              ┌──────┴──────┐
              ▼             ▼
             CI             CD
              │             │
        Build & Check       │
              │             │
              ▼             ▼
             ✅          GitHub Pages
                            │
                            ▼
                    Live Portfolio 🚀
```

---

# 8. Why CI/CD is Useful

CI/CD helps to:

* Automatically test the project build
* Find build errors early
* Avoid manual deployment
* Keep the production branch stable
* Deploy the website automatically
* Maintain a professional development workflow

---

# 9. Technologies Used

* React
* TypeScript
* Vite
* Three.js
* React Three Fiber
* Git
* GitHub
* GitHub Actions
* GitHub Pages
* Node.js

---

## 10. GitHub Actions Files

The project contains two workflows:

### CI

```text
.github/workflows/ci.yml
```

Responsible for checking and building the project.

### CD

```text
.github/workflows/deploy.yml
```

Responsible for deploying the production build to GitHub Pages.

---

## Final Workflow

```text
Developer
   ↓
portfolio-v2
   ↓
Git Push
   ↓
Pull Request
   ↓
main
   ↓
CI ✅
   ↓
CD 🚀
   ↓
GitHub Pages
   ↓
Live Portfolio
```

This setup provides a simple and professional **Git + GitHub + CI/CD workflow** for the portfolio project.
