import {useAsync} from 'react-use';

const SimpleGet = ({url}) => {

    const state = useAsync(async () => {
      const response = await fetch(url);
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

export default SimpleGet;