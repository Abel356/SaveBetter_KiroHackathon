# SaveBetter Revised Development Hooks

## Recommended Agent Hooks for Faster Development

### 1. **Auto-Test Runner Hook**
**Trigger**: On file save in `src/` directory
**Action**: Run relevant tests and show results
```
When I save a TypeScript file:
- Run tests for that specific file
- Show pass/fail status in terminal
- If tests fail, suggest fixes
```

### 2. **Component Generator Hook**
**Trigger**: Manual button click
**Action**: Generate React component boilerplate
```
When I click "Generate Component":
- Ask for component name and type (UI/Chart/Form/Demo)
- Create component file with TypeScript interface
- Add to appropriate index.ts exports
- Generate basic test file
```

### 3. **Type Safety Checker Hook**
**Trigger**: On TypeScript file save
**Action**: Validate types and suggest improvements
```
When I save a .ts/.tsx file:
- Check for TypeScript errors
- Suggest interface improvements
- Flag any 'any' types for replacement
- Ensure proper imports
```

### 4. **Demo Data Generator Hook**
**Trigger**: Manual button click
**Action**: Generate realistic demo data
```
When I click "Generate Demo Data":
- Create realistic user personas (student, professional, family)
- Generate spending patterns and salary data
- Create Canadian bank rate mock data
- Update JSON files in /data directory
```

### 5. **Deployment Checker Hook**
**Trigger**: Before git commit
**Action**: Ensure deployment readiness
```
Before each commit:
- Run build process
- Check for console errors
- Validate environment variables
- Test critical user flows
- Generate deployment checklist
```

### 6. **Performance Optimizer Hook**
**Trigger**: On component file save
**Action**: Analyze and optimize performance
```
When I save React components:
- Check for unnecessary re-renders
- Suggest memo/callback optimizations
- Flag large bundle imports
- Recommend code splitting opportunities
```

### 7. **Accessibility Auditor Hook**
**Trigger**: On UI component save
**Action**: Ensure accessibility compliance
```
When I save UI components:
- Check for missing alt text, aria labels
- Validate color contrast ratios
- Ensure keyboard navigation
- Test screen reader compatibility
```

### 8. **API Route Tester Hook**
**Trigger**: On API file save in `src/app/api/`
**Action**: Test API endpoints automatically
```
When I save API routes:
- Test all HTTP methods
- Validate request/response schemas
- Check error handling
- Generate API documentation
```

### 9. **Styling Consistency Hook**
**Trigger**: On CSS/Tailwind file save
**Action**: Maintain design system consistency
```
When I modify styles:
- Check against design tokens
- Ensure responsive breakpoints
- Validate Tailwind class usage
- Suggest component extraction for repeated patterns
```

### 10. **Git Workflow Helper Hook**
**Trigger**: Manual button click
**Action**: Streamline git operations
```
When I click "Smart Commit":
- Generate meaningful commit messages based on changes
- Run pre-commit checks
- Suggest branch naming for features
- Auto-update version numbers if needed
```

## Hook Implementation Examples

### Component Generator Hook Config:
```json
{
  "name": "Generate React Component",
  "trigger": "manual",
  "description": "Generate boilerplate for new React components",
  "inputs": [
    {"name": "componentName", "type": "string", "required": true},
    {"name": "componentType", "type": "select", "options": ["UI", "Chart", "Form", "Demo"]}
  ]
}
```

### Auto-Test Runner Hook Config:
```json
{
  "name": "Auto Test Runner",
  "trigger": "file_save",
  "filePattern": "src/**/*.{ts,tsx}",
  "description": "Run tests automatically on file save"
}
```

## Benefits of These Hooks

1. **Speed**: Automate repetitive tasks
2. **Quality**: Catch issues early
3. **Consistency**: Maintain code standards
4. **Focus**: Stay in flow state, less context switching
5. **Confidence**: Automated testing and validation

## Priority Order for Setup

1. **Auto-Test Runner** - Immediate feedback loop
2. **Component Generator** - Speed up UI development
3. **Type Safety Checker** - Maintain code quality
4. **Demo Data Generator** - Quick realistic data
5. **Deployment Checker** - Ensure smooth demos

These hooks will dramatically speed up your development and help you maintain high quality while moving fast for the hackathon!