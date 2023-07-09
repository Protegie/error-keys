# @PrimalJournal/error-keys

A comprehensive library of standard error keys for streamlined and efficient error handling across diverse domains.

# Installation

Use the following command to install this package:

``npm install @PrimalJournal/error-keys``

# Usage

After installation, you can import only the necessary keys for your module. Here is an example:

```
import { INVALID_CREDENTIALS_PROVIDED } from '@PrimalJournal/error-keys/authentication';

if (!validCredentials) {
  throw new Error(INVALID_CREDENTIALS_PROVIDED);
}
```

# Key Categories

This package provides error keys categorized into separate modules, each corresponding to a specific domain such as:

- authentication: Contains keys related to authentication errors.
- server: Contains keys related to server interaction errors.
- profile: Contains keys related to user profile management errors.
- sms: Contains keys related to SMS handling errors.
- And many more categories covering various domains.

# License

This project is licensed under the ISC license.

# Contributing

We welcome contributions! Just open a PR and request review. 

# Contact

For questions or feedback, please reach out to the author, @easyadin | tobiayokunnu@gmail.com.
