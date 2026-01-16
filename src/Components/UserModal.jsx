const UserModal = ({ user, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close" onClick={onClose}>X</button>

        <h3>{user.name}</h3>
        <p><b>Email:</b> {user.email}</p>
        <p><b>Phone:</b> {user.phone}</p>
        <p><b>Website:</b> {user.website}</p>

        <p>
          <b>Address:</b><br />
          {user.address.street}, {user.address.city}
        </p>

        <p>
          <b>Company:</b><br />
          {user.company.name}<br />
          {user.company.catchPhrase}
        </p>
      </div>
    </div>
  );
};

export default UserModal;
