/*!
 * Begin implementing the surrounding logic for your Direflow Components here.
 * The following code is just an example, and everything here can be safely removed.
 *
 * Happy hacking! :)
*/
import { registerComponent } from 'direflow-project';

registerComponent('future-form')
  .onMount((component) => {
    console.log(component);
    // Do something with form
  })
  .onFail((err) => console.warn(err));

  registerComponent('future-inac-card')
  .onMount((component) => {
    console.log(component);
    // Use to inactivate form from card
  })
  .onFail((err) => console.warn(err));