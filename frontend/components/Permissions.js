import { Query, Mutation } from "react-apollo";
import Error from "./ErrorMessage";
import gql from "graphql-tag";
import Table from "./styles/Table";
import SickButton from "./styles/SickButton";
import PropTypes, { object } from "prop-types";

const possiblePermissions = [
  "USER",
  "ITEMCREATE",
  "ITEMUPDATE",
  "ITEMDELETE",
  "ADMIN",
  "PERMISSIONUPDATE"
];

const UPDATE_PERMISSION_MUTATION = gql`
  mutation UPDATE_PERMISSION_MUTATION(
    $permissions: [Permission]
    $userId: ID!
  ) {
    updatePermissions(permissions: $permissions, userId: $userId) {
      id
      permissions
      name
      email
    }
  }
`;
const ALL_USERS_QUERY = gql`
  query ALL_USERS_QUERY {
    users {
      id
      name
      email
      permissions
    }
  }
`;

const Permissions = props => (
  <Query query={ALL_USERS_QUERY}>
    {({ data, error, loading }) => {
      if (loading) return <p>Loading...</p>;
      console.log(data);
      return (
        <div>
          <Error error={error} />
          <div>
            <h2>Manage Permissions</h2>
            <Table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  {possiblePermissions.map(permission => (
                    <th key={permission}>{permission}</th>
                  ))}
                  <th>here</th>
                </tr>
              </thead>
              <tbody>
                {data.users.map(user => (
                  <UserPermissions user={user} key={user.id} />
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      );
    }}
  </Query>
);
class UserPermissions extends React.Component {
  static propTypes = {
    user: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      id: PropTypes.string,
      permissions: PropTypes.array
    }).isRequired
  };
  state = {
    permissions: this.props.user.permissions
  };
  handlePermissionChange = e => {
    const checkbox = e.target;
    // take a copy of the current permissions
    let updatedPermissions = [...this.state.permissions];

    if (checkbox.checked) {
      // add it in
      updatedPermissions.push(checkbox.value);
    } else {
      updatedPermissions = updatedPermissions.filter(
        permission => permission !== checkbox.value
      );
    }
    this.setState({
      permissions: updatedPermissions
    });
    console.log(updatedPermissions);
    // figure out if we need to remove or add this permission
  };
  render() {
    const user = this.props.user;
    return (
      <Mutation
        mutation={UPDATE_PERMISSION_MUTATION}
        variables={{
          permissions: this.state.permissions,
          userId: this.props.user.id
        }}
      >
        {(updatePermissions, { data, error, loading }) => (
          <>
            {error && (
              <tr>
                <td colspan="8">
                  <Error error={error} />
                </td>
              </tr>
            )}
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              {possiblePermissions.map(permission => (
                <td key={permission}>
                  <label htmlFor={`${user.id}-permission-${permission}`}>
                    <input
                      id={`${user.id}-permission-${permission}`}
                      type="checkbox"
                      checked={this.state.permissions.includes(permission)}
                      value={permission}
                      onChange={this.handlePermissionChange}
                    />
                  </label>
                </td>
              ))}
              <td>
                <SickButton
                  type="button"
                  disabled={loading}
                  onClick={updatePermissions}
                >
                  Updat{loading? "ing": "e"}
                </SickButton>
              </td>
            </tr>
          </>
        )}
      </Mutation>
    );
  }
}
export default Permissions;
