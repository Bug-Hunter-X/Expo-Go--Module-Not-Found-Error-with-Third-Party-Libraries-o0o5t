This solution uses EAS Build to handle third party dependencies. EAS Build provides a managed build environment including support for external libraries.  Alternatively, you can detach your app which is explained in Expo's documentation.

To fix this, follow these steps:

1. **Use EAS Build:**
   Configure your EAS Build pipeline and make sure your package.json includes the necessary third party modules.
   EAS Build automatically includes required modules in the build process.

2. **(Less Recommended) Detach your Project:**
   Detach your project to manage native dependencies. Expo's documentation has instructions for this process.  However, it is more complex and requires a deeper understanding of native development. 