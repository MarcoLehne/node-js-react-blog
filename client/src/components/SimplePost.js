import {useAsync} from 'react-use';

const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ message: 'Placeholder text' })
  };

const SimplePost = ({url, text}) => {

    const state = useAsync(async () => {
      options.body = JSON.stringify({message: text});
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
        : <h1> {JSON.stringify(state.value.message)}</h1>}
      </div>
    );
}

export default SimplePost;