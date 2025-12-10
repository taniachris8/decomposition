/**
 * Renders the search input and Yandex logo.
 */

export default function Input() {
  return (
    <>
      <div className="input-container">
        <img src="images/yandex-logo.png" alt="logo" className="logo" />
        <input className="input" />
        <button className="search-btn">Search</button>
      </div>
    </>
  );
}
