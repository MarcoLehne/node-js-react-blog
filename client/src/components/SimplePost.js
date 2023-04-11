import {useAsync} from 'react-use';

const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message: 'Please return this once you are done' })
  };

const SimplePost = ({url}) => {

    const state = useAsync(async () => {
      const response = await fetch(url,options);
      const result = await response.json();
      return result
    }, [url]);
    
    // state has
    // loading = a boolean
    // error = an error object
    // value
  
    return (
      <div>
      {state.loading 
        ? <h1>loading...</h1>
        : <h1> {JSON.stringify(state.value)}</h1>}
      </div>
    );
}

export default SimplePost;