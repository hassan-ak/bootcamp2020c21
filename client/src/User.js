import { gql, useQuery } from '@apollo/client';
import './App.css';

const GET_USER = gql`
    {
        user {
            name
            age
        }
    }

`

function User() {
    const { loading, error, data } = useQuery(GET_USER);
    if (loading) return <div>Loading...</div>
    if (error) return <div>Error...</div>
  return (
      <div>
        Hello world from user
        <br></br>
        Name : {data.user.name}
        <br></br>
        Age : {data.user.age}
      </div>
  );
}

export default User;
