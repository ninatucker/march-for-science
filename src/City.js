import Cities from './Cities';

// whatever you export from this module will be the
// city that the app references
let current = location ? location.pathname.match(/\/(.[^/]+)/)[1] : "annarbor";

export default Cities[current] ? Cities[current] : Cities["annarbor"];
