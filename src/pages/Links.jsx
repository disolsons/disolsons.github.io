export default function Links() {
  const links = [
    { url: 'https://react.dev', label: 'React', description: "Curious about builing with React? Check the official page." },
    { url: 'https://kagi.com/smallweb', label: 'Kagi', description: 'Small web browser, find other small websites like this one.'}
  ]
  return (
    <>
      <h2>★ COOL LINKS ★</h2>
      <p>Here are some places I like on the web. Check them out!</p>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {links.map(({ url, label, description }) => (
          <li key={url} style={{ marginBottom: '0.75rem' }}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              ▶ {label}{' '}
              <span style={{ color: '#aaa' }}>— {description}</span>
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}
