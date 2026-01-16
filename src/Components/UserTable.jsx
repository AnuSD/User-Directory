const UserTable = ({ users, onRowClick }) => {
  if (users.length === 0) {
    return <p>No users found</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Company</th>
        </tr>
      </thead>

      <tbody>
        {users.map(user => (
          <tr key={user.id} onClick={() => onRowClick(user)}>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.company.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
