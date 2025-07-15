#!/bin/bash
# Project initialization script
# cd scripts
# ./setup.sh

# Move to project root (if script is inside a subfolder like `scripts/`)
cd "$(dirname "$0")/.." || exit 1

# Detect current directory and project name
PROJECT_DIR=$(pwd)
PROJECT_NAME=$(basename "$PROJECT_DIR")

echo "Initializing project in $PROJECT_DIR"
echo "🚀 Setting up project..."

# Check for required tools
command -v node >/dev/null 2>&1 || { echo "Node.js is required but not installed. Exiting."; exit 1; }
command -v npm >/dev/null 2>&1 || { echo "npm is required but not installed. Exiting."; exit 1; }

# Create .env file from .env.example if it doesn't exist
if [ -f ".env.example" ]; then
    if [ ! -f ".env" ]; then
        cp .env.example .env
        echo "🔐 Created .env from .env.example"
    else
        echo "🔐 .env file already exists. Skipping."
    fi
else
    echo "⛔️ Warning: .env.example not found! Skipping .env setup."
fi

# Install dependencies
echo "🔮 Installing project dependencies..."
npm install

# Install dev tools (Husky, Prettier, Lint-Staged)
echo "🛠 Installing Husky, Prettier, and Lint-Staged..."
npm install --save-dev husky prettier lint-staged

# ____________________________________________________
# Setup git repository if not already initialized
# ____________________________________________________
if [ ! -d .git ]; then
    git init
    git add .
    git commit -m "Initial project setup"
    echo "Initialized Git repository."
else
    echo "🐵 Git repository already initialized."
fi

# ____________________________________________________
# Create default Git branches if they don't exist
# ____________________________________________________
if ! git show-ref --quiet refs/heads/develop; then
    git checkout -b develop
fi

if ! git show-ref --quiet refs/heads/main; then
    git checkout -b main
fi

# ____________________________________________________
# Set up Husky
# ____________________________________________________
echo "🐺 Setting up Husky..."
npx husky install

# Ensure .husky directory exists
mkdir -p .husky

# Define pre-commit hook file
PRE_COMMIT_HOOK=".husky/pre-commit"

# Ensure the pre-commit hook file exists
if [ ! -f "$PRE_COMMIT_HOOK" ]; then
    echo "🦋 Creating Husky pre-commit hook..."
    cat <<EOL > "$PRE_COMMIT_HOOK"
#!/bin/sh
. "\$(dirname "\$0")/_/husky.sh"

EOL
    chmod +x "$PRE_COMMIT_HOOK"
fi

# ________________________________________________________________________________________________________
# Add necessary commands to the pre-commit hook **only if they are not already present**
# ________________________________________________________________________________________________________
if ! grep -q "npm run lint" "$PRE_COMMIT_HOOK"; then
    echo "npm run lint" >> "$PRE_COMMIT_HOOK"
fi

if ! grep -q "npm run type-check" "$PRE_COMMIT_HOOK"; then
    echo "npm run type-check" >> "$PRE_COMMIT_HOOK"
fi

# (FIX)
# if ! grep -q "npx lint-staged" "$PRE_COMMIT_HOOK"; then
#     echo "npx lint-staged" >> "$PRE_COMMIT_HOOK"
# fi

echo "🐺 Husky pre-commit hook updated successfully."

# ____________________________________________________
# Ensure "type-check" script exists in package.json
# ____________________________________________________
if ! grep -q '"type-check"' package.json; then
    echo "✨ Adding type-check script to package.json..."
    jq '.scripts["type-check"] = "tsc --noEmit"' package.json > temp.json && mv temp.json package.json
else
    echo "type-check script already exists in package.json. Skipping."
fi

# ____________________________________________________
# Ensure "lint-staged" is configured in package.json    (FIX)
# ____________________________________________________
# if ! grep -q '"lint-staged"' package.json; then
#     echo "📄 Configuring lint-staged in package.json..."
#     jq '.["lint-staged"] = {"**/*.{js,jsx,ts,tsx,json,md}": "prettier --write"}' package.json > temp.json && mv temp.json package.json
# else
#     echo "lint-staged already configured in package.json. Skipping."
# fi

echo "✅ Project $PROJECT_NAME initialized successfully!"
