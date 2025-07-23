function Article({ title, date = "January 1, 1970", preview, minutesToRead }) {
  const emoji = minutesToRead < 30
    ? "☕️".repeat(Math.ceil(minutesToRead / 5))
    : "🍱".repeat(Math.ceil(minutesToRead / 10));

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{emoji} {minutesToRead} min read</p>
      <p>{preview}</p>
    </article>
  );
}
export default Article;
