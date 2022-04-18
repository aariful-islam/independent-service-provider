import React from "react";

const Blogs = () => {
  return (
    <div className="container">
      <h1>Difference between authorization and authentication</h1>
      <ul>
        <li>
          Authentication verify user identity, on the otherhand authorization
          permits access to resources.
        </li>
        <li>
          Authentication works through passwords, biometrics, one-time pins, or
          apps, On the otherhand authorization works through settings maintained
          by security teams.
        </li>
        <li>Authentication done before authorization, on the otherhand authorization done after successful authentication. </li>
        <li>Authentication can be partially changeable by the user, otherhand user can't change authorization.</li>
        <li>In Authentication data moves through ID tokens, In authorization data moves through access tokens </li>
      </ul>
      <br />
      <h1>Why are you using firebase? What other options do you have to implement authentication?</h1>
      <p>Firebase is a google backend application developement software. With firebase I can work with IOS,Android and web application also.Firebase Analytics gives us undeniable insight into user behavior. I can use this knowledge to make informed decisions about how to market my app better and to reach out to the audiences that I want to target.</p>
      There have some more other authentication optionss they are -
      <ul>
          <li>Back4App</li>
          <li>AWS Amplify</li>
          <li>Kuzzle</li>
          <li>Couchbase</li>
      </ul>
      <h1>What other services does firebase provide other than authentication?</h1>
      <p>Answer: Services of firebase in below -</p>
      <ul>
          <li>Cloud Firestore</li>
          <li>Cloud Functions</li>
          <li>Hosting</li>
          <li>Cloud Storage.</li>
          <li>Google Analytics.</li>
          <li>Predictions</li>
          <li>Cloud Messaging</li>
      </ul>
      


    </div>
  );
};

export default Blogs;
