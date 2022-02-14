export function RepositoryItem({ repository }) {
  return (
    <li>
      <strong>{repository.name ?? 'repo'}</strong>
      <p>{repository.description}</p>

      <a href={repository.link}>Acessar repository</a>
    </li>
  );
}
