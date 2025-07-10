import { useState } from 'react';
import Nav from './Nav';
import axios from 'axios';

// https://jsonplaceholder.typicode.com/todos/1

const Api = () => {
  const [url, seturl] = useState('');
  const [data, setData] = useState(null);
  const [apiResponce, setApiResponce] = useState(null);
  const [apierror, setApierror] = useState(null);

  const handleApiRequistget = async () => {
    setApiResponce(null);
    setApierror(null);
    try {
      const responce = await axios.get(url);
      setApiResponce(responce.data);
    } catch (error) {
      setApierror(error.message);
    }
  };

  const handleApiRequistpost = async () => {
    setApiResponce(null);
    setApierror(null);
    try {
      const dataobj = JSON.parse(data);
      const responce = await axios.post(url, dataobj);
      setApiResponce(responce.data);
    } catch (error) {
      setApierror(error.message);
    }
  };
  const handleApiRequistput = async () => {
    setApiResponce(null);
    setApierror(null);
    try {
      const dataobj = JSON.parse(data);
      const responce = await axios.put(url, dataobj);
      setApiResponce(responce.data);
    } catch (error) {
      setApierror(error.message);
    }
  };
  const handleApiRequistdelete = async () => {
    setApiResponce(null);
    setApierror(null);
    try {
      const dataobj = JSON.parse(data);
      const responce = await axios.delete(url, dataobj);
      setApiResponce(responce.data);
    } catch (error) {
      setApierror(error.message);
    }
  };

  return (
    <>
      <div className="container1">
        <Nav />

        <section className="center">
          <div className="box">
            <div class="form-group">
              <label for="url">URL</label>
              <input
                type="text"
                class="form-control mt-2 data"
                id="url"
                value={url}
                placeholder="Enter Your Url"
                onChange={(e) => {
                  seturl(e.target.value);
                }}
              />
            </div>

            <div class="form-group mt-3">
              <label for="json"> JSON DATA </label>
              <textarea
                class="form-control mt-3 data"
                id="json"
                rows="4"
                value={data}
                placeholder='{ "key" : "value" }'
                onChange={(e) => {
                  setData(e.target.value);
                }}
              ></textarea>
            </div>

            <button
              className="btn btn-primary m-3"
              onClick={handleApiRequistget}
            >
              Get Request
            </button>
            <button
              className="btn btn-success  m-3"
              onClick={handleApiRequistpost}
            >
              Post Request
            </button>
            <button
              className="btn btn-warning  m-3"
              onClick={handleApiRequistput}
            >
              Put Request
            </button>
            <button
              className="btn btn-danger  m-3"
              onClick={handleApiRequistdelete}
            >
              Delete Request
            </button>

            {apiResponce && (
              <div className="box2">
                <h4>Api Responce</h4>
                <pre>{JSON.stringify(apiResponce, null, 2)}</pre>
              </div>
            )}
            {apierror && (
              <div className="box2">
                <h4>Api Error</h4>
                <pre>{JSON.stringify(apierror, null, 2)}</pre>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};
export default Api;
