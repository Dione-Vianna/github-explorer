export function RepositoryItem({ repository }) {
  return (
    <li>
      <strong>{repository.name ?? 'repo'}</strong>
      <p>{repository.description}</p>

      <a href={repository.html_url}>Acessar repository</a>
    </li>
  );
}
