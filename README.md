# Expo Go: Module Not Found Error with Third-Party Libraries

This repository demonstrates a common issue when developing Expo applications and testing them using Expo Go.  The issue arises when your app relies on a third-party library that's not pre-bundled within Expo Go's environment.  This results in a runtime 'Module not found' error.

The `bug.js` file shows the problematic code, while `bugSolution.js` provides the solution.

**Problem:**  Expo Go has a limited set of built-in modules.  Using a library not included in this set will cause the app to crash.

**Solution:** To use external libraries, you must either use EAS Build (recommended) or detach your Expo project and manage dependencies via a standard Node.js package manager.