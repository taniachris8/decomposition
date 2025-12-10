/**
 * Renders a link to a popular article
 */

import Widget from "./Widget";

export default function Article() {
  return (
    <>
      <Widget
        title="Work on mistakes"
        img="https://npr.brightspotcdn.com/dims4/default/d36a20e/2147483647/strip/true/crop/5184x3193+0+107/resize/880x542!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Ffb%2F76%2F7defa9964b8eadaa2f450c5ec658%2Fadobestock-68949462.jpeg">
        <div className="content-container">
          <p>Look on Yandex and remember</p>
        </div>
      </Widget>
    </>
  );
}
