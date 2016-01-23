# MEAN-ReCaptcha2_Example

Working example of recaptcha in a form to send an email.</br>

To be able to run this project with "nodemon" you must add a .env file with these properties:

RECAPTCHA_SECRET=YOUR_SECRET_KEY
USER_EMAIL=SENDER_EMAIL
PASS_EMAIL=SENDER_EMAIL_PASSWORD

And change these files:
- /app_client/contact/contact.controller.js 
	
	vm.publicKey = '- insert your public key from https://www.google.com/recaptcha/admin -'; 
 
- /app_api/controllers/contact.js
	
	host: '- insert your host -',


## License

Copyright 2016 Stefano Cappa

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

</br>
**Created by Stefano Cappa**